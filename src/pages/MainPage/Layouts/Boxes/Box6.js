import React from "react";
import ReactDOM from "react-dom";
import { browserHistory, Link, Redirect } from "react-router-dom";
class Box6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: "",
      product_images: "",
      product_type: "",
      status: "",
      price: "",
      seller_name: "",
      seller_address: "",
      product_id: "",
      seller_id: "",
      description: "",
      search_input: "",
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      product_name: props.product_name,
      description: props.description,
      product_images: props.product_images,
      product_type: props.product_type,
      status: props.status,
      price: props.price,
      product_id: props.product_id,
      seller_name: props.seller_name,
      seller_address: props.seller_address,
      seller_id: props.seller_id,
      search_input: props.search_input,
    };
  }

  render() {
    if (this.state.product_name == "") {
      return (
        <div
          class="container m-2 p-3"
          style={{
            boxShadow: "0 5px 10px rgb(0,0,0,0.16)",
            height: "400px",
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
              marginTop: "20%",
            }}
          ></div>
        </div>
      );
    } else {
      return (
        <>
          <div
            class="container m-2 p-3"
            style={{
              boxShadow: "0 5px 10px rgb(0,0,0,0.16)",
              height: "400px",
              padding: "0px",
              backgroundColor: "white",
            }}
          >
            <div class="row">
              <div class="col-lg-12">
                <img
                  style={{
                    objectFit: "cover",
                    height: "140px",
                    objectPosition: "25% 10%",
                    width: "60%",
                    marginLeft: "20%",
                  }}
                  src={this.state.product_images}
                ></img>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <table style={{ textAlign: "center", margin: "auto" }}>
                  <tr>
                    <td
                      colspan="2"
                      style={{
                        fontWeight: "700",
                        color: "#707070",
                        fontSize: "20px",
                      }}
                    >
                      {this.state.product_name}
                    </td>
                  </tr>
                  <tr>
                    <td
                      colspan="2"
                      style={{ fontWeight: "500", color: "#707070" }}
                    >
                      {this.state.product_type}
                    </td>
                  </tr>
                  <tr>
                    <td
                      colspan="2"
                      style={{ fontWeight: "400", color: "#707070" }}
                    >
                      {this.state.seller_id}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        fontWeight: "400",
                        color: "#928D3D",
                        fontWeight: "700",
                        fontSize: "17px",
                      }}
                    >
                      {this.state.price}
                    </td>
                    <td
                      style={{
                        fontWeight: "400",
                        color: "#2E7F8F",
                        fontWeight: "600",
                        fontSize: "17px",
                      }}
                    >
                      {this.state.status}
                    </td>
                  </tr>
                  <br />
                  <tr>
                    <td colspan="2">
                      <Link
                        to={{
                          pathname: "/QUICK_FINDER/Boxopen1/?"+"id="+this.state.product_id,
                          state: {
                            product_name: this.state.product_name,
                            product_type: this.state.product_type,
                            status: this.state.status,
                            price: this.state.price,
                            product_id: this.state.product_id,
                            seller_name: this.state.seller_name,
                            seller_address: this.state.seller_address,
                            seller_id: this.state.seller_id,
                            product_images: this.props.product_images,
                          },
                        }}
                        class="btn"
                        style={{
                          backgroundColor: "#1C1A1A",
                          color: "#FFF8F8",
                          fontWeight: "700",
                        }}
                      >
                        Explore
                      </Link>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}
export default Box6;
