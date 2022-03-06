import React, { Component } from "react";
import "./Item_detailsBox.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ObjectId } from "mongodb";
import ChatButton from "./ChatButton";
import { Link, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import BackendUrl from "../../../urls";

class DetailsBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getting:[],
      price: "",
      product_id: "",
      product_name: "",
      product_type: "",
      seller_address: "",
      seller_id: "",
      seller_name: "",
      status: "",
      product_image: "",
      description: "",
    };

    // this.getData();
    // this.getData = this.getData.bind(this);
  
  }



  componentDidUpdate() {}

  componentDidMount() {
    if (this.props.property !== undefined) {
      this.setState({
        price: this.props.property.price,
        product_id: this.props.property.product_id,
        product_name: this.props.property.product_name,
        product_type: this.props.property.product_type,
        seller_address: this.props.property.seller_address,
        seller_id: this.props.property.seller_id,
        seller_name: this.props.property.seller_name,
        status: this.props.property.status,
        description: this.props.property.description,
        product_image: this.props.property.product_images,
      });

      // this.setState({
      //   "price": "50000",
      //   "product_id": "5655df4sf45sdf475ds4f5s4df",
      //   "product_name": "RealMe5",
      //   "product_type": "Mobile phone",
      //   "seller_address": "Jalandhar, - 144701, Punjab, India",
      //   "seller_id": "d54sf5d4f5s4d5f4s5d4f54",
      //   "seller_name":"Ankit kumar",
      //   "status":"2years",
      //   "product_image":"cam.jpg_1611433836065.jpg",
      // })
    }
  }
  getData() {
    var obj = {};
    obj.search_id = this.state.prduct_id;
    console.log(obj.search_input);
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
        var meslen = json.mes.length;
        // this.setState({getting:json.mes});
        this.setState({ getting: json.mes });
      });
    return;
  }


  render() {
    return (
      <div className="DetailsBox" id={this.state.product_id}>
        <img
          className="Details_item"
          src={this.state.product_image}
          alt="got"
        />
        <div className="Details_details">
          <div
            style={{
              fontFamily: "arial",
              fontSize: "27px",
              fontWeight: "700",
              color: "#454547",
            }}
          >
            {this.state.product_name}
          </div>
          <div
            style={{ fontFamily: "arial", fontSize: "15px", color: "#C7C9C7" }}
          >
            {this.state.seller_name}
          </div>
          <div
            style={{ fontFamily: "arial", fontSize: "15px", color: "#C7C9C7" }}
          >
            {this.state.seller_address}
          </div>
          <div
            style={{ fontFamily: "arial", fontSize: "11px", color: "#8D928D" }}
          >
            {this.state.description}
          </div>

          {/* <p className="Details_pro">{this.state.product_id}</p>
          <p className="Details_name">{this.state.product_name}</p>
          <p className="Details_location">location : {this.state.seller_address}</p>
          <p className="Details_disc">{this.state.status}</p> */}
          <div className="Details_pics">
            {/* <img className="Details_pic" src={process.env.PUBLIC_URL + "/realme7.jpeg"} alt="got" />
            <img className="Details_picl" src={process.env.PUBLIC_URL + "/realme7p.jpeg"} alt="got" /> */}
            <img
              className="Details_pic"
              src={this.state.product_image}
              alt="got"
            />
            <img
              className="Details_pic"
              src={this.state.product_image}
              alt="got"
            />
            <img
              className="Details_pic"
              src={this.state.product_image}
              alt="got"
            />
          </div>
          <p className="Details_pr"> {this.state.price} Rs</p>
          <Link
            to={{
              pathname: "/QUICK_FINDER/checkout",
              state: {
                totalprice: this.state.price,
                itemNumber: 1,
                sellerId: this.state.seller_id,
                productId: this.state.product_id,
              },
            }}
            className="btn btn-dark btn-sm Details_purBtn"
          >
            PURCHASE
          </Link>
          <ChatButton
            toggleChat={this.props.toggleChat}
            sellerid={this.props.property.seller_id}
          />
        </div>
      </div>
    );
  }
}

export default DetailsBox;
