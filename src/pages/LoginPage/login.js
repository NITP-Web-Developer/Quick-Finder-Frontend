import React from "react";
import "./login.css";
import Profile from "../ProfilePage/Profile";
import BackendUrl from "../../urls";
import { Link, Redirect } from "react-router-dom";
import NotRegistered from "../../Alerts/notRegistered";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLoggedIn: false,
      registered: true,
    };
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

  submitHandler = (e) => {
    e.preventDefault();
    var validated = true;
    var keys = ["username", "password"];
    keys.map((item) => {
      console.log(item);
      if (!this.validate(item)) {
        validated = false;
      }
    });
    if (validated) {
      console.log(this.state.username + " " + this.state.password);
      console.log("Submit handler");

      var loginDetails = {
        user_name: this.state.username,
        pass_word: this.state.password,
      };

      fetch(`${BackendUrl}/login`, {
        method: "post",
        body: JSON.stringify({
          loginDetails,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json.mes);
          if (json.mes === "Welcome") {
            console.log("Welcome");
            console.log(json.usern);
            sessionStorage.setItem("username", json.usern);
            this.setState({ isLoggedIn: true });
          }
        })
        .then((res) => res.json())
        .then((json) => {
          console.log(json.mes);
          var mes = json.mes;
          if (mes === "Welcome") {
            console.log("Welcome");
            console.log(json.usern);
            sessionStorage.setItem("username", json.usern);
            this.setState({ isLoggedIn: true });
          } else if (mes === "regIssue") {
            this.setState({
              registered: false,
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log("Empty Fields");
    }
  };

  handleChange = (e) => {
    var item = e.target.name;
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const usern = this.state.usern;
    if (isLoggedIn) {
      return <Redirect to="/" />;
    } else {
      if (!sessionStorage.username) {
        return (
          <>
                <div className="d-flex flex-wrap flex-row  justify-content-center mb-5 mt-4" >
                <MDBCard style={{ maxWidth: '22rem' ,width:'350px'}} >
                <MDBCardBody>
                <MDBCardTitle>Sign in</MDBCardTitle>
                <form onSubmit={this.submitHandler}>
                Email Address
                <MDBInput name="username" value={this.state.username} onChange={this.handleChange} className='mb-4' type='email' id='form2Example1' />
                Password
                <MDBInput className='mb-4' type='password' name="password" value={this.state.password} onChange={this.handleChange} id='form2Example2' />

                <MDBRow className='mb-4'>
                  <MDBCol className='d-flex justify-content-center'>
                    <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
                  </MDBCol>
                  <MDBCol>
                    <a href='#!'>Forgot password?</a>
                  </MDBCol>
                </MDBRow>
                <button type="submit" class="btn btn-primary btn-lg btn-block p-1">
                  Sign in
                </button>

                <div className='text-center'>
                  <p>
                    Not a member?  
                    <Link
                            to="/signup"
                          >
                            Register
                          </Link>
                  </p>
                  <p>or sign up with:</p>

                  <MDBBtn floating className='mx-1'>
                    <MDBIcon fa icon='facebook-f' />
                  </MDBBtn>

                  <MDBBtn floating className='mx-1'>
                    <MDBIcon fa icon='google' />
                  </MDBBtn>

                  <MDBBtn floating className='mx-1'>
                    <MDBIcon fa icon='twitter' />
                  </MDBBtn>

                  <MDBBtn floating className='mx-1'>
                    <MDBIcon fa icon='github' />
                  </MDBBtn>
                </div>
              </form>

                  </MDBCardBody>
              </MDBCard>
              {this.state.registered ? null : <NotRegistered />}
            </div>
          </>
        );
      } else {
        return (
          <div>
            <Profile />
          </div>
        );
      }
    }
  }
}
export default Login;
