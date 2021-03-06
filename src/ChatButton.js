import React, { Component } from "react";
import './chatbutton.css'
class ChatButton extends Component {

    constructor(props) {
        super(props);
        this.state = { display: false };
    }

    show = () => {
        if (!sessionStorage.username) {
            alert("SignIn First");
        }
        else {
            console.log("show");
            this.props.toggleChat(this.props.sellerid);
        }
    }

    render() {
        return (
            <button className="chatbutton" onClick={this.show}>Chat With Seller</button>
        )
    }
}

export default ChatButton;
