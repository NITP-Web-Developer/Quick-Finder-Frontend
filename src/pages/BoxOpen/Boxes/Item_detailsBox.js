
import React,{useState,useEffect,Component} from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple,MDBIcon } from 'mdb-react-ui-kit';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { MDBContainer } from 'mdb-react-ui-kit';

import "bootstrap/dist/css/bootstrap.min.css";
import Layout1 from "../../MainPage/Layouts/Layout1";
import { ObjectId } from "mongodb";
import ChatButton from "./ChatButton";
import { Link, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import BackendUrl from "../../../urls";
const DetailsBox=(props)=>
{
  const [product_name,setProduct_name]= useState(" Walking Shoes For Men  (Black)")
  const [product_images,setProduct_images]= useState(" fghjk")
  const [product_type,setProduct_type]= useState(" Black shoes")
  const [status,setstatus]= useState("For Sell")
  const [price,setProduct_price]= useState("700")
  const [seller_name,setseller_name]= useState(" Parveen Kumar")
  const [product_id,setProduct_id]= useState("poiuy")
  const [seller_id,setseller_id]= useState("hjkllnhin")
  const [seller_address,setseller_address]=useState(" hjlnklhdds  hksasaskals oaslajsjas asasoaisaksnmakjsa sajoaiosa ")
  const [description,setdescription]=useState(" very nice black shoes,comfortable, just awesome like..very light weight and quality also very good")
  console.log(props.product_image)
  const [verticalActive, setVerticalActive] = useState('tab1');

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };
    return (
      <div>
  <div className="d-flex flex-wrap flex-row mb-3">
        <div className="" style={{width:"400px"}}>
        <MDBRow>
        <MDBCol size='3'>
          <MDBTabs className='flex-column text-center ' fill>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
              <img src="https://rukminim2.flixcart.com/image/580/696/kxrvi4w0/shoe/p/5/8/8-m7-22506-grey-t-blue-m7-by-metronaut-grey-t-blue-original-imaga5kfsjb8gram.jpeg?q=50"  style={{width:'100%',height:'100%',maxHeight:'470px'}}/>
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
              <img src="https://rukminim2.flixcart.com/image/880/1056/kxrvi4w0/shoe/e/b/e/8-m7-22506-grey-t-blue-m7-by-metronaut-grey-t-blue-original-imaga5kfgdy8ypws.jpeg?q=50"  style={{width:'100%',height:'100%',maxHeight:'470px'}}/>
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'}>
              <img src="https://rukminim2.flixcart.com/image/880/1056/kxrvi4w0/shoe/8/f/f/8-m7-22506-grey-t-blue-m7-by-metronaut-grey-t-blue-original-imaga5kfzqxyf3kh.jpeg?q=50"  style={{width:'100%',height:'100%',maxHeight:'470px'}}/>

              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
        </MDBCol>
        <MDBCol size='9'>
          <MDBTabsContent>
            <MDBTabsPane show={verticalActive === 'tab1'}><img src="https://rukminim2.flixcart.com/image/580/696/kxrvi4w0/shoe/p/5/8/8-m7-22506-grey-t-blue-m7-by-metronaut-grey-t-blue-original-imaga5kfsjb8gram.jpeg?q=50"  style={{width:'100%',height:'250px'}}/></MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab2'}><img src="https://rukminim2.flixcart.com/image/880/1056/kxrvi4w0/shoe/e/b/e/8-m7-22506-grey-t-blue-m7-by-metronaut-grey-t-blue-original-imaga5kfgdy8ypws.jpeg?q=50"  style={{width:'100%',height:'250px'}}/></MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab3'}><img src="https://rukminim2.flixcart.com/image/880/1056/kxrvi4w0/shoe/8/f/f/8-m7-22506-grey-t-blue-m7-by-metronaut-grey-t-blue-original-imaga5kfzqxyf3kh.jpeg?q=50"  style={{width:'100%',height:'250px'}}/></MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
        </div>
        <div className="p-2" >
         <p style={{fontSize:"28px",fontWeight:"600"}}>{product_name}</p>
         <p style={{fontSize:"18px",fontWeight:"500"}}>{product_type}</p>
         <p style={{fontSize:"24px",fontWeight:"600"}}>${price}</p>
         <p><MDBIcon style={{color:"rgb(50,50,50)"}} className='ms-1' size=" fa-lg" fa icon="tag" />{description}</p>
         
        <p><MDBIcon className='ms-1' size=" fa-lg" fa icon="tag" /> Put on sell by <Link to="https://codeforces.com/profile/Devrath27">{seller_name}</Link></p>
        
        
        <button type="button" class="btn btn-dark"  >Add to cart <MDBIcon className='ms-1' size=" fa-lg" fa icon="cart-plus" /></button>
       <button type="button" class="btn btn-dark ml-4" ><MDBIcon className='ms-1' size=" fa-lg" fa icon="tag" /> Buy now</button>
        </div>
       
      </div>
   
    {/* <MDBRow className='mb-3' style={{marginLeft:0}}>
      <MDBCol sm='6' md='5' lg='6' className='col-example'>
      
      <MDBBtn style={{marginLeft:100}}>Add to cart</MDBBtn>
      <MDBBtn  style={{marginLeft:100}}>Buy now</MDBBtn>
      </MDBCol>

      <MDBCol sm='6' md='5' lg='6' offsetMd='2' offsetLg='0' className='col-example'>
      <h1>{product_name}</h1>
        <h2>price:${price}</h2>
        <p>{description}</p>
        <p>Seller name: {seller_name}</p>
        <p>Seller address: {seller_address}</p>
       
      </MDBCol>
    </MDBRow>
  
  */}

</div>
  
    );
    
}

export default DetailsBox;
// class DetailsBox extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       getting:[],
//       price: "",
//       product_id: "",
//       product_name: "",
//       product_type: "",
//       seller_address: "",
//       seller_id: "",
//       seller_name: "",
//       status: "",
//       product_image: "",
//       description: "",
//     };

   
  
//   }



  // componentDidUpdate() {}

  // componentDidMount() {
  //   if (this.props.property !== undefined) {
  //     this.setState({
  //       price: this.props.property.price,
  //       product_id: this.props.property.product_id,
  //       product_name: this.props.property.product_name,
  //       product_type: this.props.property.product_type,
  //       seller_address: this.props.property.seller_address,
  //       // seller_id: this.props.property.seller_id,
  //       seller_name: this.props.property.seller_name,
  //       status: this.props.property.status,
  //       description: this.props.property.description,
  //       product_image: this.props.property.product_images,
  //     });

      // this.setState({
      //   "price": "50000",
      //   "product_id": "5655df4sf45sdf475ds4f5s4df",
      //   "product_name": "RealMe5",
      //   "product_type": "Mobile phone",
      //   "seller_address": "Jalandhar, - 144701, Punjab, India",
      //   "seller_id": "d54sf5d4f5s4d5f4s5d4f54",
      //   "seller_name":"Ankit kumar",
      //   "status":"2years",
      //   "product_image":"cam.jpg_1611433836065.jpg",
      // })
  //   }
  // }
//   static getDerivedStateFromProps(props, state) {
//     return {
//               price: props.property.price,
//         product_id: props.property.product_id,
//         product_name: props.property.product_name,
//         product_type: props.property.product_type,
//         seller_address: props.property.seller_address,
//         // seller_id: props.property.seller_id,
//         seller_name: props.property.seller_name,
//         status: props.property.status,
//         description: props.property.description,
//         product_image: props.property.product_images,

//     };
//   }
  
//   getData() {
//     var obj = {};
//     obj.search_id = this.state.prduct_id;
//     console.log(obj.search_input);
//     fetch(`${BackendUrl}/getData`, {
//       method: "post",
//       body: JSON.stringify({ obj }),
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((json) => {
//         var meslen = json.mes.length;
//         // this.setState({getting:json.mes});
//         this.setState({ getting: json.mes });
//       });
//     return;
//   }


//   render() {
//     console.log(this.state.product_image)
//     if(!this.state.product_image){
//       return (
//         <div>
//         Loading....
//       </div>
//       );
//     }
//     else 
//     {
//       return (
//         <div>
//        <MDBContainer>
     
//       <MDBRow className='mb-3'>
//         <MDBCol sm='6' md='5' lg='6' className='col-example'>
       
//         <img style={{width:'100%',objectFit:'cover',height:'100%',maxHeight:'470px', objectPosition: "25% 10%"}}/>
//         <h1>{this.state.product_name}</h1>
//         </MDBCol>

//         <MDBCol sm='6' md='5' lg='6' offsetMd='2' offsetLg='0' className='col-example'>
         
//           <h2>price:${this.state.price}</h2>
//           <p>{this.state.description}</p>
//           <p>Seller name: {this.state.seller_name}</p>
//           <p>Seller address: {this.state.selle_address}</p>
//           <MDBBtn>Add to cart</MDBBtn>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
   

// </div>
        
      // <div className="DetailsBox" id={this.state.product_id}>
        
      //   <img
      //     className="Details_item"
      //     src={this.state.product_image[0]}
      //     alt="got"
      //   />
      //   <div className="Details_details">
      //     <div
      //       style={{
      //         fontFamily: "arial",
      //         fontSize: "27px",
      //         fontWeight: "700",
      //         color: "#454547",
      //       }}
      //     >
      //       {this.state.product_name}
      //     </div>
      //     <div
      //       style={{ fontFamily: "arial", fontSize: "15px", color: "#C7C9C7" }}
      //     >
      //       {this.state.seller_name}
      //     </div>
      //     <div
      //       style={{ fontFamily: "arial", fontSize: "15px", color: "#C7C9C7" }}
      //     >
      //       {this.state.seller_address}
      //     </div>
      //     <div
      //       style={{ fontFamily: "arial", fontSize: "11px", color: "#8D928D" }}
      //     >
      //       {this.state.description}
      //     </div>

      //     {/* <p className="Details_pro">{this.state.product_id}</p>
      //     <p className="Details_name">{this.state.product_name}</p>
      //     <p className="Details_location">location : {this.state.seller_address}</p>
      //     <p className="Details_disc">{this.state.status}</p> */}
      //     <div className="Details_pics">
      //       {/* <img className="Details_pic" src={process.env.PUBLIC_URL + "/realme7.jpeg"} alt="got" />
      //       <img className="Details_picl" src={process.env.PUBLIC_URL + "/realme7p.jpeg"} alt="got" /> */}
      //       <img
      //         className="Details_pic"
      //         src={this.state.product_image[0]}
      //         alt="got"
      //       />
      //       <img
      //         className="Details_pic"
      //         src={this.state.product_image[0]}
      //         alt="got"
      //       />
      //       <img
      //         className="Details_pic"
      //         src={this.state.product_image[0]}
      //         alt="got"
      //       />
      //     </div>
      //     <p className="Details_pr"> {this.state.price} Rs</p>
      //     <Link
      //       to={{
      //         pathname: "/QUICK_FINDER/checkout",
      //         state: {
      //           totalprice: this.state.price,
      //           itemNumber: 1,
      //           sellerId: this.state.seller_id,
      //           productId: this.state.product_id,
      //         },
      //       }}
      //       className="btn btn-dark btn-sm Details_purBtn"
      //     >
      //       PURCHASE
      //     </Link>
      //     <ChatButton
      //       toggleChat={this.props.toggleChat}
      //       sellerid={this.props.property.seller_id}
      //     />
      //   </div>
//       // </div>
//     );
//     }
//   }
// }


