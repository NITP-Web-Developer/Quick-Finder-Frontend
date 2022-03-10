import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn,MDBCheckbox,MDBRange } from 'mdb-react-ui-kit';
const Filter  = (props) =>{
    const [range, setRange] = useState(100);

    const onChange = (e) => {
      setRange(e.target.value);
    }
return (<>
        <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBCardBody>
        <MDBCardTitle style={{fontSize:'14px'}}>Category</MDBCardTitle>
        <div>
        <select className="browser-default custom-select">
          <option>Choose Your Category</option>
          <option value="1">Fashion</option>
          <option value="2">Electronics</option>
          <option value="3">Vehicles</option>
          <option value="4">Furniture</option>
        </select>
      </div>    

      <br/> 
      Price Range  
      <MDBRange style={{width:'100%'}} value={range} min='0' max='100000' step='1000' onChange={onChange}/>
      </MDBCardBody>
      
    </MDBCard>

        </>);
}
export default Filter;