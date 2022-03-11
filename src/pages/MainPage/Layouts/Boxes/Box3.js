import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Loader from "../../../Loader/Loader"
import { MDBCollapse, MDBBtn,MDBCardImage,MDBCardBody,MDBCardText,MDBCard } from 'mdb-react-ui-kit';
const Box3  = (props) =>{
  const [catName,setCatName]= useState(props.catName)
  const [catImg,setCatImg]= useState(props.catImg)
  useEffect(() => {setCatName(props.catName); }, [props.catName]);  
  useEffect(() => {setCatImg(props.catImg); }, [props.catImg]);  
  // useEffect(() => {setstatus(props.status); }, [props.status]);

      return (
        <>
          <Link 
          // to={{ pathname: "/Boxopen1/?"+"id="+product_id,}}
          >
            <MDBCard style={{ width: '14.5rem',heigth:'200px' }} >
             <MDBCardImage style={{height:'180px'}} src={catImg} alt='...' position='top' />
              <MDBCardBody>
                <MDBCardText style={{fontWeight:'500',textAlign:'center'}}>
                  {catName}  
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>

    </Link>

        </>)
  
}
export default Box3;
