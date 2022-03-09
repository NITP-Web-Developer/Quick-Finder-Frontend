import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import BackendUrl from "../../urls";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from 'mdb-react-ui-kit';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      password: "",
      mobile: "",
      email: "",
      address: "",
    };
    this.getAddress = this.getAddress.bind(this);
    this.showPosition = this.showPosition.bind(this);
  }

  validate = (e) => {
    console.log("validating " + e);
    if (e !== undefined && this.state[e] !== "") {
      this.setState({ [e]: this.state[e].trim() });
      return true;
    } else {
      return false;
    }
  };

  submitHandler = async (e) => {
    var keys = ["fname", "lname", "password", "mobile", "email"];
    e.preventDefault();
    var validated = true;
    keys.map((item) => {
      // console.log(item);
      if (!this.validate(item)) {
        validated = false;
      }
    });
    if (this.state.mobile.length !== 10) {
      validated = false;
    }

    if (this.state.password.length < 6) {
      validated = false;
    }
    if (validated) {
      var signupDetails = {
        fname: this.state.fname,
        lname: this.state.lname,
        password: this.state.password,
        mobile: this.state.mobile,
        email: this.state.email,
        address: this.state.address,
      };

      var result = await fetch(`${BackendUrl}/signup`, {
        method: "post",
        body: JSON.stringify({
          signupDetails,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log(result);
      //
      //
      //
      // var Details = {
      // fname: this.state.fname,
      // lname: this.state.lname,
      // mobile: this.state.mobile,
      // email: this.state.email,
      // address: this.state.address,
      // };
      //
      // fetch(`${BackendUrl}/userDetails`, {
      // method: "post",
      // body: JSON.stringify({
      // Details,
      // }),
      // headers: {
      // Accept: "application/json",
      // "Content-Type": "application/json",
      // },
      // }).then((res) => res.json());
      //
      // .catch((error) => {
      // console.error(error);
      // });
    } else {
      console.log("Empty Fields");
    }
  };

  handleChange = (e) => {
    var item = e.target.name;
    this.setState({ [e.target.name]: e.target.value });
  };

  getAddress() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }
    return;
  }
  showPosition(position) {
    var apikey = "03b41a44bab543d7b74919c8e70bb48f";
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var api_url = "https://api.opencagedata.com/geocode/v1/json";
    var request_url =
      api_url +
      "?" +
      "key=" +
      apikey +
      "&q=" +
      encodeURIComponent(latitude + "," + longitude) +
      "&pretty=1" +
      "&no_annotations=1";
    var request = new XMLHttpRequest();
    request.open("GET", request_url, true);

    request.onload = function () {
      // see full list of possible response codes:
      // https://opencagedata.com/api#codes

      if (request.status === 200) {
        // Success!
        var data = JSON.parse(request.responseText);
        this.setState({ address: data.results[0].formatted }); // print the location
      } else if (request.status <= 500) {
        // We reached our target server, but it returned an error

        console.log("unable to geocode! Response code: " + request.status);
        var data = JSON.parse(request.responseText);
        console.log("error msg: " + data.status.message);
      } else {
        console.log("server error");
      }
    }.bind(this);
    request.onerror = function () {
      // There was a connection error of some sort
      console.log("unable to connect to server");
    };

    request.send(); // make the request
  }

  render() {
    return (
      <>
        <div className="d-flex flex-wrap flex-row  justify-content-center mb-5 mt-4" >
              <form>
            <MDBRow className='mb-4'>
              <MDBCol>
                First Name
                <MDBInput class="form-control" id="mobile" name="fname" onChange={this.handleChange} />
              </MDBCol>
              <MDBCol>
                Second Name
                <MDBInput class="form-control" id="mobile" name="lname" onChange={this.handleChange}/>
              </MDBCol>
            </MDBRow>
            Password
            <MDBInput class="form-control" id="mobile" name="password" onChange={this.handleChange}/>
            Phone Number
            <MDBInput class="form-control" id="mobile" name="mobile" onChange={this.handleChange}/>
            Email
            <MDBInput class="form-control" id="mobile" name="email" onChange={this.handleChange}/>
            <button name="address" onClick={this.getAddress} type="button" class="btn btn-secondary btn-sm mt-2 mb-2">Get Your Address</button>
            {this.state.address}
            <button type="submit" class="btn btn-primary btn-lg btn-block p-1 mt-2 mb-2 " style={{fontSize:'16px'}}>
                  Sign Up
            </button>


          </form>
        </div>
      </>
    );
  }
}
export default Signup;
