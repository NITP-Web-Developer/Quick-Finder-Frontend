import React, { Component } from "react";
import "./item_bar.css";
import BackendUrl from "../urls";
class ItemSellBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductName: "",
      ProductId: "",
      sold: null,
      Buyer: "",
      isLoaded: true,
    };
  }
  async componentDidMount() {
    var currentuser = sessionStorage.getItem("username");
    if (currentuser != null) {
      var userdata = {
        Id: this.props.item.ProductId,
      };

      var url = BackendUrl + "/backend/findProduct";
      try {
        this.setState({
          isLoaded: false,
        });
        const response = await fetch(url, {
          method: "post",
          body: JSON.stringify({ userdata }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        this.setState({
          ProductName: data.item.product_name,
          ProductId: data.item._id,
          Buyer: data.item.buyer,
          isLoaded: true,
        });
        if (data.item.sold === false) {
          this.setState({ sold: "Not Sold" });
        } else {
          this.setState({
            sold: "Sold",
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  render() {
    var time = this.props.item.Time.substring(0, 24);
    if (this.state.isLoaded == true) {
      return (
        <div className="itembar">
          <div className="itemcompo">{this.state.ProductId}</div>
          <div className="itemcompo" style={{ width: "120px" }}>
            {this.state.ProductName}
          </div>
          <div className="itemcompo">{this.state.sold}</div>
          <div className="itemcompo">
            {this.state.Buyer === "" ? "null" : this.state.Buyer}
          </div>
          <div className="itemcompo">{time}</div>
        </div>
      );
    } else {
      return <p class="text-center"> loading...</p>;
    }
  }
}

export default ItemSellBar;
