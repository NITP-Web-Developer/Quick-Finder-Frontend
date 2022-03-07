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

const Layout5  = (props) =>{
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
        <div class="container-fluid" style={{ width: "100%" }}>
          <div class="row">
            <div class="col-lg-2 col-md-7 col-sm-7">
              <Box3
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

            </div>
            <div class="col-lg-2 col-md-7 col-sm-7">
              <Box3
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

            </div>

            <div class="col-lg-2 col-md-7 col-sm-7">
              <Box3
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

            </div>

            <div class="col-lg-2 col-md-7 col-sm-7">
              <Box3
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

            </div>

            <div class="col-lg-2 col-md-7 col-sm-7">
              <Box3
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

            </div>

            <div class="col-lg-2 col-md-7 col-sm-7">
              <Box3
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

            </div>



          </div>
        </div>
      </>
    );
  
}
export default Layout5;
