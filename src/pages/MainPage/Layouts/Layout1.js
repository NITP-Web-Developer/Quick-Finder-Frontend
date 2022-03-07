import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import Box1 from "./Boxes/Box1";
import Box2 from "./Boxes/Box2";
import Box3 from "./Boxes/Box3";
import Box4 from "./Boxes/Box4";
import Box5 from "./Boxes/Box5";
import Box6 from "./Boxes/Box6";
import { Link } from "react-router-dom";
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';

const Layout1  = (props) =>{
  const [showShow, setShowShow] = useState(false);
  const toggleShow = () => setShowShow(!showShow);
  // const [showShow, setShowShow] = useState(false);
  const [getting, setgetting] = useState(props.getting);
  const [search_input, setsearch_input] = useState("");
  const [i, seti] = useState(props.layout_num);
  useEffect(() => {seti(props.layout_num); }, [props.layout_num]);  
  useEffect(() => {setgetting(props.getting); }, [props.getting]);  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     getting: [],
  //     search_input: "",
  //     i: 0,
  //   };
  // }
  // static getDerivedStateFromProps(props, state) {
  //   return {
  //     getting: props.getting,
  //     i: props.layout_num,
  //   };
  // }
  // render() {
    return (
      <>
        {search_input}
        <h4 style={{ textAlign: "center", marginTop: "30px" }}>
          {" "}
          Buy Vehicle And Full fill Your Dreams
        </h4>
        <div class="container-fluid" style={{ width: "100%" }}>
          <div class="row">
            <div class="col-lg-4 col-md-7 col-sm-7">
              <Box1
                search_input={search_input}
                product_name={
                  getting[i]
                    ? getting[i].product_name
                    : ""
                }
                product_images={
                  getting[i]
                    ? getting[i].product_images
                    : ""
                }
                product_type={
                  getting[i]
                    ? getting[i].product_type
                    : ""
                }
                status={
                  getting[i]
                    ? getting[i].status
                    : ""
                }
                price={
                  getting[i]
                    ? getting[i].price
                    : ""
                }
                product_id={
                  getting[i]
                    ? getting[i].product_id
                    : ""
                }
                seller_id={
                  getting[i]
                    ? getting[i].seller_id
                    : ""
                }
              />

              <Box1
                search_input={search_input}
                product_name={
                  getting[i + 1]
                    ? getting[i + 1].product_name
                    : ""
                }
                product_images={
                  getting[i + 1]
                    ? getting[i + 1].product_images
                    : ""
                }
                product_type={
                  getting[i + 1]
                    ? getting[i + 1].product_type
                    : ""
                }
                status={
                  getting[i + 1]
                    ? getting[i + 1].status
                    : ""
                }
                price={
                  getting[i + 1]
                    ? getting[i + 1].price
                    : ""
                }
                product_id={
                  getting[i + 1]
                    ? getting[i + 1].product_id
                    : ""
                }
                seller_id={
                  getting[i + 1]
                    ? getting[i + 1].seller_id
                    : ""
                }
              />
            </div>
            <div class="col-lg-4 col-md-5 col-sm-5">
              <Box2
                search_input={search_input}
                product_name={
                  getting[i + 2]
                    ? getting[i + 2].product_name
                    : ""
                }
                product_images={
                  getting[i + 2]
                    ? getting[i + 2].product_images
                    : ""
                }
                product_type={
                  getting[i + 2]
                    ? getting[i + 2].product_type
                    : ""
                }
                status={
                  getting[i + 2]
                    ? getting[i + 2].status
                    : ""
                }
                price={
                  getting[i + 2]
                    ? getting[i + 2].price
                    : "."
                }
                product_id={
                  getting[i + 2]
                    ? getting[i + 2].product_id
                    : ""
                }
                description={
                  getting[i + 2]
                    ? getting[i + 2].description
                    : ""
                }
                seller_id={
                  getting[i + 2]
                    ? getting[i + 2].seller_id
                    : ""
                }
              />
            </div>
            <div class="col-lg-4 col-md-7 col-sm-7">
              <Box1
                search_input={search_input}
                product_name={
                  getting[i]
                    ? getting[i].product_name
                    : ""
                }
                product_images={
                  getting[i]
                    ? getting[i].product_images
                    : ""
                }
                product_type={
                  getting[i]
                    ? getting[i].product_type
                    : ""
                }
                status={
                  getting[i]
                    ? getting[i].status
                    : ""
                }
                price={
                  getting[i]
                    ? getting[i].price
                    : ""
                }
                product_id={
                  getting[i]
                    ? getting[i].product_id
                    : ""
                }
                seller_id={
                  getting[i]
                    ? getting[i].seller_id
                    : ""
                }
              />

              <Box1
                search_input={search_input}
                product_name={
                  getting[i + 1]
                    ? getting[i + 1].product_name
                    : ""
                }
                product_images={
                  getting[i + 1]
                    ? getting[i + 1].product_images
                    : ""
                }
                product_type={
                  getting[i + 1]
                    ? getting[i + 1].product_type
                    : ""
                }
                status={
                  getting[i + 1]
                    ? getting[i + 1].status
                    : ""
                }
                price={
                  getting[i + 1]
                    ? getting[i + 1].price
                    : ""
                }
                product_id={
                  getting[i + 1]
                    ? getting[i + 1].product_id
                    : ""
                }
                seller_id={
                  getting[i + 1]
                    ? getting[i + 1].seller_id
                    : ""
                }
              />
            </div>
            
          </div>
        </div>
        <div class="container mt-3">
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
                  onClick={toggleShow}
                >
                  More...
                </button>
              </td>
            </tr>
          </table>
          <MDBCollapse show={showShow}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
        keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </MDBCollapse>

        </div>
      </>
    );
  
}
export default Layout1;
