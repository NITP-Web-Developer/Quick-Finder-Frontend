import React, { Component } from "react";
import "./item_bar.css";
class ItemBuyBar extends Component {
  render() {
    var time = this.props.item.Time.substring(0, 24);
    return (
      <div className="itembar">
        <div className="itemcompo">{this.props.item.SellerId}</div>
        <div className="itemcompo">{this.props.item.orderId}</div>
        <div className="itemcompo">{this.props.item.razorpay_orderId}</div>
        <div className="itemcompo">{time}</div>
      </div>
    );
  }
}

export default ItemBuyBar;
