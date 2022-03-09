import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Loader from "../../../Loader/Loader"
import { MDBCollapse, MDBBtn,MDBCardImage,MDBCardBody,MDBCardText,MDBCard } from 'mdb-react-ui-kit';
const Box1  = (props) =>{
  const [showShow, setShowShow] = useState(false);
  const toggleShow = () => setShowShow(!showShow);
  const [product_name,setProduct_name]= useState(props.product_name)
  const [product_images,setProduct_images]= useState(props.product_images)
  const [product_type,setProduct_type]= useState(props.product_type)
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
  useEffect(() => {setProduct_type(props.product_type); }, [props.product_type]);  
  // useEffect(() => {setstatus(props.status); }, [props.status]);

  if (product_name == "") {
      return (      
        <MDBCard style={{ width: '14rem',height:'220px' }}>            
          <Loader/>
        </MDBCard>
      );
    } else {
  
      return (
        <>
          <Link to={{ pathname: "/Boxopen1/?"+"id="+product_id,}}>
            <MDBCard style={{ width: '14.5rem', }} >
             <MDBCardImage style={{height:'180px'}} src={product_images} alt='...' position='top' />
              <MDBCardBody>
                <MDBCardText style={{fontWeight:'500',textAlign:'center'}}>
                  {product_name}  
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>

    </Link>

        </>
      );
  
  }
}
export default Box1;
