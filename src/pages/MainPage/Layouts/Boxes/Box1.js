import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Loader from "../../../Loader/Loader"
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
const Box1  = (props) =>{
  const [showShow, setShowShow] = useState(false);
  const toggleShow = () => setShowShow(!showShow);
  const [product_name,setProduct_name]= useState(props.product_name)
  const [product_images,setProduct_images]= useState(props.product_images)
  const [product_type,setProduct_tproduct_type]= useState(props.product_type)
  const [status,setstatus]= useState(props.status)
  const [price,setProduct_price]= useState(props.product_price)
  const [seller_name,setseller_name]= useState(props.seller_name)
  const [product_id,setProduct_id]= useState(props.product_id)
  const [seller_id,setseller_id]= useState(props.seller_id)
  const [seller_address,setseller_address]=useState(props.seller_address)
  const [description,setdescription]=useState(props.description)
  const [search_input,setsearch_input]=useState("")
  const [redirect,setredirect]=useState(false)
  useEffect(() => {setProduct_name(props.product_name); }, [props.product_name]);  
  useEffect(() => {setProduct_images(props.product_images); }, [props.product_images]);  
  useEffect(() => {setProduct_id(props.product_id); }, [props.product_id]);  
  if (product_name == "") {
      return (
        <div
          class="container m-2 p-3"
          style={{
            boxShadow: "0 5px 10px rgb(0,0,0,0.05)",
            height: "250px",
            padding: "0px",
            backgroundColor: "white",
          }}
        >
        <Loader/>
{/* 
          <div
            class="spinner-border text-muted"
            style={{
              width: "3rem",
              height: "3rem",
              marginLeft: "45%",
              marginTop: "20%",
            }}
          >
            
            </div> */}
        </div>
      );
    } else {
  
      return (
        <>
          <div
            class="container m-2 p-3"
            style={{
              boxShadow: "0 5px 10px rgb(0,0,0,0.05)",
              height: "49%",
              padding: "0px",
              marginBottom:"13px",
              backgroundColor: "white",
            }}
          >
            <div class="row" style={{ height: "100%" }}>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={product_images}
                ></img>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 pt-3">
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
                      {product_name}
                    </td>
                  </tr>
                  <tr>
                    <td
                      colspan="2"
                      style={{ fontWeight: "500", color: "#707070" }}
                    >
                      {product_type}
                    </td>
                  </tr>
                  {/* <tr>
                    <td
                      colspan="2"
                      style={{ fontWeight: "400", color: "#707070" }}
                    >
                      {seller_id}
                    </td>
                  </tr> */}
                  <tr>
                    <td
                      style={{
                        fontWeight: "400",
                        color: "#928D3D",
                        fontWeight: "700",
                        fontSize: "17px",
                      }}
                    >
                      {price}
                    </td>
                    <td
                      style={{
                        fontWeight: "400",
                        color: "#2E7F8F",
                        fontWeight: "600",
                        fontSize: "17px",
                      }}
                    >
                      {status}
                    </td>
                  </tr>
                  <br />

                  <tr>
                    <td colspan="2">
                      <Link
                        to={{
                          pathname: "/QUICK_FINDER/Boxopen1/?"+"id="+product_id,
                          state: {
                            product_name: product_name,
                            product_type: product_type,
                            status: status,
                            price: price,
                            product_id: product_id,
                            seller_name: seller_name,
                            seller_address: seller_address,
                            seller_id: seller_id,
                            product_images: product_images,
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
export default Box1;
