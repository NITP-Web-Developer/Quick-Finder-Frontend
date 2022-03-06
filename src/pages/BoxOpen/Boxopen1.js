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
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getting:[],
      sellerid: "",
      chatid: "",
    };
    this.getDetails("");
    this.getDetails = this.getDetails.bind(this);

    this._child = React.createRef();
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
        var meslen = json.mes.length;
        console.log(json.mes);
        // this.setState({getting:json.mes});
        this.setState({ getting: json.mes });
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
    console.log(location);
    console.log(this.props);
    return (
      <>
        <div class="container" style={{ width: "100%" }}>
          <div class="row">
            <div class="col-lg-9 col-md-12 col-sm-12">
              <Item_detailsBox
                property={this.props.location.state}
                toggleChat={this.toggleChat}
              />
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3">
              <MiniBox />
              <MiniBox />
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
          <ChatBox ref={this._child} sellerid={this.state.sellerid} />
        </div>
      </>
    );
  }
}
export default Main;
