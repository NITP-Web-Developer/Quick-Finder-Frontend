import React from "react";
import Item_detailsBox from "./Boxes/Item_detailsBox";
import MiniBox from "./Boxes/miniBox";
import Box5 from "./Boxes/Box5";
import ChatBox from "../../Chat/ChatBox/Chatbox";
import BackendUrl from "../../urls";
import Layout1 from "../MainPage/Layouts/Layout1";
import Layout2 from "../MainPage/Layouts/Layout2";
import Layout3 from "../MainPage/Layouts/Layout3";
import Layout4 from "../MainPage/Layouts/Layout4";
import {useState} from "react";
import Loader from "../Loader/Loader";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getting:[],
      _child:{},
      sellerid: "",
      chatid: "",
      product_id:"",
      objectId:""
    };
    this.getData();
    this.getData = this.getData.bind(this);
  }

  async getData() {
    // await this.getObject();
    console.log("hi");
    var obj = {};
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');
    this.setState({objectId:id});
    // console.log(id);
    obj.search_id = id;
    console.log(obj);
    fetch(`${BackendUrl}/getData`, {
      method: "post",
      body: JSON.stringify({ obj }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        // var meslen = json.mes.length;
        // this.setState({getting:json.mes});
        this.setState({ _child: json.mes });
        console.log(this.state._child);
      });
    return;
  }


  getDetails(search_input) {
    var obj = {};
    obj.search_input = search_input;
    console.log(obj.search_input);
    fetch(`${BackendUrl}/getDetails`, {
      method: "post",
      body: JSON.stringify({ obj }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        // var meslen = json.mes.length;
        console.log(json.mes);
        this.setState({getting:json.mes});
        // this.setState({ _child: json.mes[0] });
      });
    return;
  }
  
  toggleChat = (sellerid) => {
    if (sellerid !== this.state.sellerid) {
      this._child.current.change(sellerid);
      this.setState({
        sellerid: sellerid,
      });
    }
    var chatbox = document.getElementsByClassName("chatcontainer")[0];
    chatbox.style.display = "block";
  };

  render() {
    const { match, location, history } = this.props;
    console.log(this.state._child);
    console.log(this.props);
    if(this.state._child.product_images){
      return (
        <>
          <div class="container-fluid" style={{ width: "100%" }}>
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <Item_detailsBox
                  data={this.state._child}
                  property={this.state._child}
                  toggleChat={this.toggleChat}
  
                />
              </div>
              
            </div>
            <Layout2
            layout_num={1}
            search_input={this.state.search_input}
            getting={this.state.getting}
          />
  
            {/* <div class="row">
              <div class="col-lg-3 col-md-4 col-sm-4">
                <Box5 />
              </div>
              <div class="col-lg-3 col-md-4 col-sm-4">
                <Box5 />
              </div>
              <div class="col-lg-3 col-md-4 col-sm-4">
                <Box5 />
              </div>
              <div class="col-lg-3 col-md-4 col-sm-4">
                <Box5 />
              </div>
            </div> */}
            {/* <ChatBox ref={this._child} sellerid={this.state.sellerid} /> */}
          </div>
        </>
      );
        }
      else{
        return (<Loader/>);
      }        
  }
}
export default Main;
