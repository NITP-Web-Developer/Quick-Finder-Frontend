import React from "react";
import ReactDOM from "react-dom";
import Box1 from "./Boxes/Box1";
import Box2 from "./Boxes/Box2";
import Box3 from "./Boxes/Box3";
import Box4 from "./Boxes/Box4";
import Box5 from "./Boxes/Box5";
import Box6 from "./Boxes/Box6";

class Layout4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getting: [],
      search_input: "",
      i: 0,
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {
      getting: props.getting,
      i: props.layout_num,
    };
  }
  render() {
    return (
      <>
        <h4 style={{ textAlign: "center", marginTop: "30px" }}>
          {" "}
          Buy Vehicle And Full fill Your Dreams
        </h4>
        <div class="container-fluid" style={{ width: "82%" }}>
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-4">
              <Box6
                search_input={this.state.search_input}
                product_name={
                  this.state.getting[this.state.i]
                    ? this.state.getting[this.state.i].product_name
                    : ""
                }
                product_images={
                  this.state.getting[this.state.i]
                    ? this.state.getting[this.state.i].product_images
                    : ""
                }
                product_type={
                  this.state.getting[this.state.i]
                    ? this.state.getting[this.state.i].product_type
                    : ""
                }
                status={
                  this.state.getting[this.state.i]
                    ? this.state.getting[this.state.i].status
                    : ""
                }
                price={
                  this.state.getting[this.state.i]
                    ? this.state.getting[this.state.i].price
                    : "."
                }
                product_id={
                  this.state.getting[this.state.i]
                    ? this.state.getting[this.state.i].product_id
                    : ""
                }
                seller_id={
                  this.state.getting[this.state.i]
                    ? this.state.getting[this.state.i].seller_id
                    : ""
                }
              />
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
              <Box6
                search_input={this.state.search_input}
                product_name={
                  this.state.getting[this.state.i + 1]
                    ? this.state.getting[this.state.i + 1].product_name
                    : ""
                }
                product_images={
                  this.state.getting[this.state.i + 1]
                    ? this.state.getting[this.state.i + 1].product_images
                    : ""
                }
                product_type={
                  this.state.getting[this.state.i + 1]
                    ? this.state.getting[this.state.i + 1].product_type
                    : ""
                }
                status={
                  this.state.getting[this.state.i + 1]
                    ? this.state.getting[this.state.i + 1].status
                    : ""
                }
                price={
                  this.state.getting[this.state.i + 1]
                    ? this.state.getting[this.state.i + 1].price
                    : "."
                }
                product_id={
                  this.state.getting[this.state.i + 1]
                    ? this.state.getting[this.state.i + 1].product_id
                    : ""
                }
                seller_id={
                  this.state.getting[this.state.i + 1]
                    ? this.state.getting[this.state.i + 1].seller_id
                    : ""
                }
              />
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
              <Box6
                search_input={this.state.search_input}
                product_name={
                  this.state.getting[this.state.i + 2]
                    ? this.state.getting[this.state.i + 2].product_name
                    : ""
                }
                product_images={
                  this.state.getting[this.state.i + 2]
                    ? this.state.getting[this.state.i + 2].product_images
                    : ""
                }
                product_type={
                  this.state.getting[this.state.i + 2]
                    ? this.state.getting[this.state.i + 2].product_type
                    : ""
                }
                status={
                  this.state.getting[this.state.i + 2]
                    ? this.state.getting[this.state.i + 2].status
                    : ""
                }
                price={
                  this.state.getting[this.state.i + 2]
                    ? this.state.getting[this.state.i + 2].price
                    : "."
                }
                product_id={
                  this.state.getting[this.state.i + 2]
                    ? this.state.getting[this.state.i + 2].product_id
                    : ""
                }
                product_id={
                  this.state.getting[this.state.i + 2]
                    ? this.state.getting[this.state.i + 2].product_id
                    : ""
                }
                description={
                  this.state.getting[this.state.i + 2]
                    ? this.state.getting[this.state.i + 2].description
                    : ""
                }
                seller_id={
                  this.state.getting[this.state.i + 2]
                    ? this.state.getting[this.state.i + 2].seller_id
                    : ""
                }
              />
            </div>
          </div>
        </div>
        <div class="container">
          <table style={{ width: "100%" }}>
            <tr>
              <td style={{ textAlign: "center" }}>
                <button
                  class="btn"
                  style={{
                    backgroundColor: "#1C1A1A",
                    color: "#FFF8F8",
                    fontWeight: "700",
                  }}
                >
                  See More
                </button>
              </td>
            </tr>
          </table>
        </div>
      </>
    );
  }
}
export default Layout4;
