import React, { Component } from "react";
import ItemBuyBar from "./itembuy_bar";
import ItemSellBar from "./itemsell_bar";
import "./item_list.css";
import BackendUrl from "../urls";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
      isLoaded: false,
    };
  }
  async componentDidMount() {
    var currentuser = sessionStorage.getItem("username");
    console.log("cuurent user: " + currentuser);
    if (currentuser != null) {
      var userdata = {
        Id: currentuser,
      };
      console.log(userdata);
      var type = this.props.type;
      var pattern = "user" + type + "product";
      var url = BackendUrl + "/backend/" + pattern;
      console.log(url);
      try {
        const response = await fetch(url, {
          method: "post",
          body: JSON.stringify({ userdata }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        console.log(data);
        if (data.value === null) {
          this.setState({
            items: null,
            isLoaded: true,
          });
        } else {
          console.log("here is buy data");
          this.setState({
            items: data,
            isLoaded: true,
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  render() {
    var isLoaded = this.state.isLoaded;
    console.log(this.props.type);
    if (!isLoaded) {
      return (
        <div
          class="container m-2 p-3"
          style={{
            boxShadow: "0 5px 10px rgb(0,0,0,0.16)",
            height: "auto",
            width: "auto",
            padding: "0px",
            backgroundColor: "white",
          }}
        >
          <div
            class="spinner-border text-muted"
            style={{
              width: "3rem",
              height: "3rem",
              marginLeft: "45%",
              marginTop: "10%",
            }}
          ></div>
        </div>
      );
    } else if (
      isLoaded &&
      this.state.items === null &&
      this.props.type === "buy"
    ) {
      return <p class="text-center mt-1">You have not bought anything yet</p>;
    } else if (
      isLoaded &&
      this.state.items === null &&
      this.props.type === "sell"
    ) {
      return <p class="text-center mt-1">You have not sold anything yet</p>;
    } else if (this.props.type == "sell") {
      return (
        <>
          <div className="itembarr border-0 mx-auto  text-center bg-dark text-white ">
            <div className="itemcomp">Product Id</div>
            <div className="itemcomp">ProductName</div>
            <div className="itemcomp ">Status</div>

            <div className="itemcomp">Time</div>
          </div>
          <div className="itemlist">
            {this.state.items.map(function (item) {
              return <ItemSellBar item={item} />;
            })}
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="itembarr border-0 mx-auto  text-center bg-dark text-white ">
            <div className="itemcomp">Product Id</div>
            <div className="itemcomp">ProductName</div>
            <div className="itemcomp">Status</div>

            <div className="itemcomp">Time</div>
          </div>
          <div className="itemlist">
            {this.state.items.map(function (item) {
              return <ItemBuyBar item={item} />;
            })}
          </div>
        </>
      );
    }
  }
}
export default ItemList;
