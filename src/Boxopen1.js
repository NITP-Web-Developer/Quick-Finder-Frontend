import React from "react";
import Item_detailsBox from "./Item_detailsBox";
import MiniBox from "./miniBox";
import Box5 from "./Box5";
import ChatBox from "../src/Chat/ChatBox/Chatbox";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sellerid: "",
      chatid: "",
    };
    this._child = React.createRef();
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
          <div class="row">
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
          </div>
          <ChatBox ref={this._child} sellerid={this.state.sellerid} />
        </div>
      </>
    );
  }
}
export default Main;
