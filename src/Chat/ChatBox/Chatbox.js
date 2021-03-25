import React from 'react'
import './chatbox.css';
import io from 'socket.io-client'
import Message from './messagecont';
import PrevChats from './prevchats';
// import { json } from 'body-parser';
import Image from './image';

// var fs = require('fs')

const SERVER = 'https://quick-finder-backend.herokuapp.com'
// const SERVER = 'http://localhost:4000'
let socket
var mescont
var chatbox

class Chatbox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: "",
      mes: "",
      type: "",
      chatid: "",
      users: [],
      chattingwith: "",
      typing: false,
      prevchats: {},
      showchat: false,
      online: {}
    }
  }


  change = (sellerid) => {
    console.log('chatting with ', sellerid);
    var length = sellerid.length
    console.log(length);
    var chatid = sellerid.slice(0, length / 2) + this.state.id.slice(0, length / 2)
    console.log(chatid);
    chatid = chatid.split('').sort().join('');
    if (this.state[`message${chatid}`] !== undefined) {
      this.setState({
        chattingwith: sellerid,
        chatid: chatid,
      }, () => {
        // this.joinWithChatid()
      })
    } else {
      this.setState({
        chattingwith: sellerid,
        chatid: chatid,
        [`message${chatid}`]: []
      }, () => {
        this.joinWithChatid()
      })
    }
  }

  scrolltobottom = () => {
    mescont = document.getElementsByClassName("mes-cont")[0]
    var scrollheight = mescont.scrollHeight
    mescont.scrollTop = scrollheight + 1000
  }

  componentDidMount() {
    chatbox = document.getElementsByClassName("chatcontainer")[0]

    if (socket === undefined) {
      socket = io(SERVER, { 'transports': ['websocket', 'polling'] });
    }

    this.setState({
      id: window.sessionStorage.username
    }, () => {
      this.showPrevChats()
    })
    // console.log(socket);
    socket.on('started', data => {
      console.log('started',data);
      this.setState({
        [`message${this.state.chatid}`]: data
      })
    })

    socket.on('receive', ({ mes, id, datetime, type, chatId }) => {
      // console.log('recieved',mes, id, datetime, type, chatId);
      // console.log(mes,id);
      if (this.state.chatid === chatId) {
        // console.log('live from', id);
        this.setState(prevState => ({
          [`message${this.state.chatid}`]: [...prevState[`message${this.state.chatid}`], { 'message': mes, 'type': type, 'userid': id, 'datetime': datetime }]
        }),()=>{
          this.scrolltobottom()
        });
      } else {
        console.log('notification from', id);
        this.setState(prevState => ({
          [`message${chatId}`]: [...prevState[`message${chatId}`], { 'message': mes, 'type': type, 'userid': id, 'datetime': datetime }],
          [`notif${chatId}`]: prevState[`notif${chatId}`] + 1
        }));
      }
    })

    socket.on('typing', ({ userid, chatid }) => {
      // console.log('typing',userid,chatid);
      if (this.state.chatid === chatid) {
        if (!this.state.typing) {
          // console.log(this.state.typing);
          setTimeout(() => {
            // console.log("set typing");
            this.setState({
              typing: false
            })
          }, 2000);
          this.setState({
            typing: true
          })
        }
      }
    })

    socket.on('friendsonline', online => {
      // console.log('friends online',online);
      this.setState({
        online: online
      })
    })

    socket.on('online', online => {
      this.setState({
        online: online
      })
    })

    socket.on('disconnected', userid => {
      // console.log("disconnected",userid);
      this.setState(prevState => ({
        online: { ...prevState.online, [userid]: false }
      }))
    })

  }

  joinWithChatid = () => {
    var userid = this.state.id
    var chatid = this.state.chatid
    var chattingwith = this.state.chattingwith
    socket.emit('newchat', { userid, chatid, chattingwith });
    socket.emit('join', { userid, chatid })
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendMes = (e) => {
    // console.log('sendmes');
    if (e.code === "Enter" || e === "Enter") {
      this.setState({
        type: 'txt'
      }, () => this.send())
    }
  }

  send = async () => {
    console.log('sending');
    const mes = this.state.mes
    const type = this.state.type
    const id = this.state.id
    const chatId = this.state.chatid
    var d = new Date(Date.now());
    if (mes !== "") {
      socket.emit('send', { mes, id, chatId, type })
      this.setState(prevState => ({
        [`message${chatId}`]: [...prevState[`message${chatId}`], {
          'message': mes, 'type': type, 'userid': id, datetime: {
            date: d.toDateString().toString(),
            time: d.toTimeString().toString()
          }
        }]
      }));
      this.setState({
        mes: "",
        type: ""
      }, () => this.scrolltobottom())
    }
  }

  getChats = async (chatid) => {
    // console.log('getting chats', this.state[`message${chatid}`], "fdf");
    let response = await fetch(`${SERVER}/getchat/${chatid}`);

    const reader = response.body.getReader();

    const contentLength = +response.headers.get('Content-Length');

    // console.log(contentLength);

    let receivedLength = 0;
    let chunks = [];
    while (true) {
      const { done, value } = await reader.read();
      // console.log('after done');

      if (done) {
        break;
      }


      chunks.push(value);
      receivedLength += value.length;

      // console.log(`Received ${receivedLength} of ${contentLength}`)
    }

    let chunksAll = new Uint8Array(receivedLength);
    let position = 0;
    for (let chunk of chunks) {
      chunksAll.set(chunk, position);
      position += chunk.length;
    }

    let result = new TextDecoder("utf-8").decode(chunksAll);

    let commits = JSON.parse(result);
    // console.log(commits[chatid]['mesDetails']);
    this.setState({
      [`message${chatid}`]: commits[chatid]['mesDetails']
    }, () => {
      this.scrolltobottom()
      // console.log('chst messages', chatid, this.state[`message${chatid}`]);
    })
  }

  showPrevChats = async () => {
    console.log(this.state.prevchats);
    fetch((`${SERVER}/prevchats/${this.state.id}`), {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())
      .then((json) => {
        // console.log(json.result.chatid);
        if (json.result.chatid !== null && json.result.chatid !== undefined) {
          this.setState({
            prevchats: json.result.chatid
          }, () => {
            for (var chatid in this.state.prevchats) {
              var userid = this.state.id
              console.log(chatid);
              if (chatid !== undefined) {
                console.log('defined', chatid);
                this.setState({
                  [`message${chatid}`]: [],
                  [`notif${chatid}`]: 0
                }, async () => {
                  console.log(chatid, this.state[`message${chatid}`]);
                })
                this.getChats(chatid)
                socket.emit('join', { userid, chatid })
              }
            }
          })
        }
        // for(var item in json.result.chatid){
        //   console.log(item);
        // }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  selectUser = (name) => {
    console.log(name);
    var id = this.state.id
    if (id !== "") {
      if (id !== name) {
        var chatid = [this.state.id, name].sort()
        this.setState({
          chattingwith: name,
          chatid: chatid[0] + chatid[1],
          inroom: true
        }, () => {
          // this.join()
        })
        // console.log(this.state.chatid);
      } else {
        alert('Choose other user!')
      }
    } else {
      alert("name is empty")
    }
  }

  typing = (e) => {
    var chatid = this.state.chatid
    var userid = this.state.id
    this.handleChange(e)

    socket.emit('type', { userid, chatid })

  }

  _renderObject() {
    return Object.keys(this.state.prevchats).map((obj, i) => {
      return (
        <div>
          {obj}
        </div>
      )
    })
  }

  selectPrevChat = (prevchatid) => {
    console.log(prevchatid);
    if (prevchatid !== this.state.chatid) {
      // socket.emit('leaveroom', this.state.chatid)
      this.setState({
        [`notif${prevchatid}`]: 0
      }, () => {
        this.setState({
          chatid: prevchatid,
          chattingwith: "NUll",
        }, () => {
          // this.join()
          // var chatid = this.state.chatid
          this.scrolltobottom()
          // socket.emit('getchat', { chatid })
        })
      })
    }
  }

  showChat = () => {
    this.setState(prevState => ({
      showChat: !prevState.showChat
    }))
  }

  openFiles = () => {
    var file = document.getElementById('file')
    file.click()
  }

  sendFile = async (e) => {
    var fileReader = new FileReader();

    fileReader.onprogress = (data) => {
      console.log(data);
      if (data.lengthComputable) {
        var progress = parseInt(((data.loaded / data.total) * 100), 10);
        // console.log(progress);
      }
    }
    fileReader.readAsDataURL(e.target.files[0])

    var chatid = this.state.chatid
    var userid = this.state.id

    fileReader.addEventListener('load', () => {
      // console.log(btoa(fileReader.result.split('base64,')[1]), fileReader.result.split('base64,')[1]);
      var result = fileReader.result
      this.setState({
        mes: result,
        type: 'img'
      }, () => {
        this.send()
      })
    })
  }

  hidechat = () => {
    chatbox.style.display = "none"
  }

  render() {
    return (
      <div className="chatcontainer">
        <div className="chat-heading">
          <div className="close" onClick={() => this.hidechat()}>
            <p>X</p>
          </div>
          {
            <button style={{ height: "40px", backgroundColor: "white", border: "none" }} onClick={this.showChat}>Show Chats</button>
          }
          <div >
            <h1>Chat</h1>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <p>chatID:{this.state.chatid}</p>
            </div>
          </div>
          <p style={{ overflowWrap: 'anywhere' }}>{this.state.id}</p>
        </div>
        <div className="main-cont">
          <div className="chat-box">
            {
              <div className="chattingwith">
                <p>
                  {
                    "Chatting with: " + this.state.chattingwith
                  }
                </p>
                {
                  this.state.typing ? <div className="typing-stat">
                    <p >
                      typing...
                  </p>
                  </div> : null
                }
              </div>
            }
            <div className="mes-cont">

              {
                this.state[`message${this.state.chatid}`] !== undefined ? this.state[`message${this.state.chatid}`].map(item => {
                  return item.type === 'txt' ?
                    <Message mes={item.message} time={item.datetime.time.split(' ')[0]} class={item.userid === this.state.id ? "sen" : "rec"} />
                    :
                    <Image src={item.message} time={item.datetime.time.split(' ')[0]} class={item.userid === this.state.id ? "sen" : "rec"} />
                }) : null
              }
            </div>
            <div className="input-send">
              <input id="file" onChange={this.sendFile} type="file" hidden />
              <div>
                <p onClick={this.openFiles}>+</p>
                <input type="text" name="mes" onKeyPress={this.sendMes} onChange={this.typing} value={this.state.mes} />
              </div>
              <button onClick={() => this.sendMes("Enter")}>Send</button>
            </div>
          </div>
          <div className="prev-chats" style={{ display: this.state.showChat ? "block" : "none" }}>
            {
              Object.keys(this.state.prevchats).map((obj, i) => {
                // console.log(obj);
                return (
                  <PrevChats online={this.state.online} userid={this.state.id} selectPrevChat={this.selectPrevChat} notif={this.state[`notif${obj}`]} currchatid={this.state.chatid} prevchats={obj} />
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }

}

export default Chatbox;
