import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import BackendUrl from "../urls";
import { Row, Col, Button, Form, Modal, InputGroup } from "react-bootstrap";
import { AiOutlinePercentage } from "react-icons/ai";
function loadrazorpay(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

function Checkout(props) {
  const promocodeRef = useRef();
  const [cashOrder, setcashOrder] = useState(false);
  const [totalPrice, settotalPrice] = useState(0);
  //for Hide and show Modal on click pay

  //RAZORPAY CALL
  async function displayRazorpay() {
    const totalPrice = props.location.state.totalprice;
    const sellerId = props.location.state.sellerId;
    const productId = props.location.state.productId;
    const res = await loadrazorpay(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const payment = await axios
      .post(
        `${BackendUrl}/payment/razorpay`,
        {
          type: 1,
          buyerId: sessionStorage.username,
          price: totalPrice,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        console.log(res);

        const options = {
          key: process.env.REACT_APP_RAZORPAY_API_KEY,
          currency: res.data.currency,
          amount: res.data.amount.toString(),
          order_id: res.data.id,
          name: "Quick Finder",
          description: "Thank you for nothing. Please give us some money",
          handler: async function (response) {
            const newdate = new Date();

            const id = "user" + response.razorpay_order_id;
            await axios
              .post(
                `${BackendUrl}/payment/order`,
                {
                  buyerId: sessionStorage.username,
                  sellerId: sellerId,
                  productId: productId,
                  billing: {
                    baseprice: res.data.amount,
                    discount: 0,
                    deliveryCharge: 0,
                    finalAmount: res.data.amount,
                    promocode: "",
                    orderTime: {
                      timestamp: newdate.getTime(),
                    },
                    paymentMethod: "ONLINE",
                  },
                  paymentId: response.razorpay_payment_id,
                  razorpay_orderId: response.razorpay_order_id,
                  RazorpaySignature: response.razorpay_signature,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((t) => {
                console.log(t.data.insertid);
                var buyDetails = {
                  ProductId: productId,
                  orderId: t.data.insertid,
                  buyerID: sessionStorage.username,
                  sellerID: sellerId,
                  razorpay_orderId: response.razorpay_order_id,
                };
                fetch(`${BackendUrl}/backend/buy`, {
                  method: "post",
                  body: JSON.stringify({
                    buyDetails,
                  }),
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                })
                  .then((res) => res.json())
                  .then((json) => {
                    axios
                      .post(
                        `${BackendUrl}/backend/SellStatus`,
                        {
                          ProductId: productId,
                          BuyerId: sessionStorage.username,
                        },

                        {
                          headers: {
                            "Content-Type": "application/json",
                          },
                        }
                      )
                      .then((res) => {
                        console.log(json.mes);
                        console.log("successful payment done");
                      });

                    //    history.push("./thanks");
                  })
                  .catch((error) => {
                    console.error(error);
                  });
              })
              .catch((err) => {
                //   history.push("./failed");
                console.log(err.response);
              });
          },

          prefill: {
            userId: sessionStorage.username,
          },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();

        paymentObject.on("payment.failed", function (response) {
          console.log("you failed to pay");
          //   history.push("./failed");
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  /*
  //For Cash Payment
async function cashPay() {  
    try {
      const resdata = await axios.post(
        "http://localhost:4000/payment/razorpay",
        {
          type: 0,
          id: "123",
          price: totalPrice,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(resdata.data);
    } catch (err) {
      console.log(err);
    }
  }
*/

  const cashorder = () => {
    setcashOrder(true);
  };
  const cancelcashOrder = () => {
    setcashOrder(false);
  };

  return (
    <>
      {" "}
      <Row className="">
        <Col lg={3} md={5} sm={6} className="bg-dark mx-auto my-3 pb-4">
          <div className="paymentcheck">
            <div className="px-3">
              {" "}
              <h5 className="text-center p-1 my-4 pt-3 text-white">
                Quick Finder
              </h5>
              <InputGroup className="input-group-sm mb-2 ">
                <Form.Control
                  className=""
                  type="text"
                  placeholder="Enter promo code"
                  ref={promocodeRef}
                />
                <InputGroup.Append>
                  <Button variant="primary" type="button">
                    <AiOutlinePercentage /> APPLY
                  </Button>
                </InputGroup.Append>
              </InputGroup>
              {/* <p className="text-white">{promoMessage}</p>
              
             */}
              <div className="bg-light px-3 py-1">
                <p className="float-right">
                  {" "}
                  {props.location.state.itemNumber}
                </p>
                <p>No. of Item</p>
                <p className="float-right">
                  Rs {props.location.state.totalprice}{" "}
                </p>
                <p>Price</p>
                <p className="float-right">Rs 0</p>
                <p>discount </p>
              </div>
            </div>

            <div className=" container text-center">
              <Button
                className="btn btn-danger mt-3 mb-2 d-block mx-auto"
                style={{ width: "80%" }}
                onClick={displayRazorpay}
              >
                Pay Now
              </Button>
              {/*    <Button
                className="btn btn-warning mb-2"
                style={{ width: "80%" }}
                onClick={cashorder}
              >
                Cash On Delivery
              </Button>
           */}
            </div>
          </div>

          <Modal
            id="cashModal"
            show={cashOrder}
            onHide={cancelcashOrder}
            style={{ margin: "220px auto 0px auto", borderRadius: "30px" }}
          >
            <Modal.Header className="py-2" closeButton>
              <h4 style={{ marginLeft: "20%" }}> Please Confirm your Order </h4>
            </Modal.Header>
            <Modal.Body class="my-2 text-center">
              <h4 class="mt-3 mb-2">Cash On Delivery ₹{totalPrice}</h4>
              <button class="btn btn-success  p-3 m-4 rounded-pill">
                Confirm Order
              </button>
              <button
                class="btn btn-danger p-3 m-4 rounded-pill"
                onClick={cancelcashOrder}
              >
                Cancel Order
              </button>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </>
  );
}

export default Checkout;
