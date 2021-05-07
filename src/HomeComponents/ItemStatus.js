import React from "react";

function ItemStatus(props) {
  var item = props.location.state.ProductDetails.item;
  var details = props.location.state.userProductDetails;

  return (
    <>
      <div
        class="container mt-2 pt-3 mx-auto"
        style={{
          width: "80%",
          height: "500px",

          boxShadow: "0 5px 10px rgb(0,0,0,0.16)",
          backgroundColor: "white",
        }}
      >
        <div class="float-left" style={{ fontSize: "20px" }}>
          <p>
            <strong>Name of product </strong>: {item.product_name}
          </p>
          <p>
            <strong>Product Type</strong> : {item.product_type}
          </p>
          <p>
            <strong>Product Id </strong> : {item._id}
          </p>
          <p>
            <strong>Status </strong> : {item.sold ? "Sold" : "Not Sold"}
          </p>
          <p>
            <strong>Buyer </strong> :
            {props.location.state.type == "buy" ? "You" : item.buyer}
          </p>
          <p>
            <strong>Seller </strong> :
            {props.location.state.type == "sell" ? "You" : item.buyer}
          </p>
          <p>
            <strong>Price</strong> : {item.price}
          </p>
          <p>
            <strong>Description </strong> : {item.description}
          </p>
          <p>
            <strong>Time </strong> :{details.Time}
          </p>
          {props.location.state.type == "sell" ? (
            <p></p>
          ) : (
            <>
              <p>
                {" "}
                <strong>Payment Id </strong>: {details.razorpay_orderId}
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ItemStatus;
