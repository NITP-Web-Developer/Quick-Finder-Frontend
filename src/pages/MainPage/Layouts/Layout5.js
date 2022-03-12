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
    return (
      <>
              {search_input}
        <div style={{backgroundColor:"rgb(230,230,230)",paddingTop:"10px",marginTop:"15px"}}>
        <div className="d-flex flex-wrap flex-row mb-3 justify-content-center " style={{backgroundColor:'rgb(230,230,230)'}}>
        <div className="p-2">
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
        </div>
        
        <div className="p-2">              <Box1
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
        <div className="p-2">                            <Box1
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
          <div className="p-2">
          <Box1
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
            <div className="p-2">
            <Box1
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
              <div className="p-2">
            <Box1
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

      </div>
      </div>

      
      </>
    );
  
}
export default Layout5;
