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
import Layout5 from './Layout5'
const Layout3  = (props) =>{
  const [showShow, setShowShow] = useState(false);
    return (
      <>
        <div style={{backgroundColor:"rgb(230,230,230)",paddingTop:"10px",marginTop:"15px"}}>
        <h5 style={{ marginLeft:'35px'}}>
          {" "}
          Category
        </h5>
        <hr style={{margin:'5px'}}></hr>

        <div className="d-flex flex-wrap flex-row mb-3 justify-content-center " style={{backgroundColor:'rgb(230,230,230)'}}>
        <div className="p-2">
          <Box3 catName="Baby Toys" catImg="https://www.todaysparent.com/wp-content/uploads/2019/10/toys-for-babies-and-toddlers-hungry-hippos-1280x960.jpg" />
        </div>
        <div className="p-2">
          <Box3 catName="Books"  catImg="https://imageio.forbes.com/specials-images/imageserve/5f85be4ed0acaafe77436710/0x0.jpg?format=jpg&width=1200&fit=bounds"/>          
        </div>
        <div className="p-2">
          <Box3 catName="Furniture" catImg="https://www.khaticraft.com/wp-content/uploads/2020/01/Fatta-Chairs-Dining-Set_Khaticraft_3.jpg"/>          
        </div>
        <div className="p-2">
          <Box3 catName="Mobile" catImg="https://cdn-www.mediatek.com/page/Mobile-2_2021-10-20-155734_vspa.png"/>          
        </div>
        <div className="p-2">
          <Box3 catName="Home Accessories" catImg="https://www.gemindia.in/wp-content/uploads/2021/02/Artboard-4-4.png"/>          
        </div>
        <div className="p-2">
          <Box3 catName="Vehicles" catImg="https://cdn.autoportal.com/img/new-cars-gallery/hyundai/grand-i10-prime/colors/de63fd0677e4f726dbaa300a3ebe385e.jpg"/>          
        </div>        
            

      </div>
      </div>


      
      </>
    );
  
}
export default Layout3;
