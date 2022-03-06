import React from "react";
import BackendUrl from "../../urls";
import "../SignupPage/Signup.css";
import { Link } from "react-router-dom";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData:{}
    };
    this.getUserData();
    this.getUserData = this.getUserData.bind(this);
  }
  getUserData() {
    var obj = {};
    obj.username = sessionStorage.username;
    console.log(obj.username);
    fetch(`${BackendUrl}/getUserData`, {
      method: "post",
      body: JSON.stringify({ obj }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json.mes);
        // console.log(json.mes.length);
        // var meslen = json.mes.length;

        // this.setState({getting:json.mes});
        this.setState({ userData: json.mes });
      });
    return;
  }
  render() {
    // console.log(this.state.getting);
    if(!this.state.userData){
      return (
        <>
        Loading...
        </>
      );
    }else
    {
    return (
      <>
        <div
          class="container pt-3"
          style={{
            width: "80%",
            height: "500px",
            marginLeft: "10%",
            boxShadow: "0px 0px 72px rgb(0,0,0,0.16)",
            backgroundColor: "white",
          }}
        >
          <form style={{ marginTop: "30px" }}>
            <table style={{ width: "40%", float: "left" }}>
              <tr>
                <td>
                  <div
                    style={{
                      fontFamily: "arial",
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    Personal Information
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label for="mobile">First Name</label>
                </td>
              </tr>
              <tr>
                <td>
                  <label for="mobile">{this.state.userData.name}.</label>
                </td>
              </tr>
              <tr>
                <td>
                  <label for="mobile">Mobile</label>
                </td>
              </tr>
              <tr>
                <td>
                <label for="mobile">{this.state.userData.mobile}</label>
                </td>
              </tr>
              <tr>
                <td>
                  <label for="mobile">Email</label>
                </td>
              </tr>
              <tr>
                <td>
                <label for="mobile">{this.state.userData.email}</label>
                </td>
              </tr>
            </table>
            <table style={{ width: "40%", float: "right" }}>
              <tr>
                <td>
                  <label for="mobile">Second Name</label>
                </td>
              </tr>
              <tr>
                <td>
                <label for="mobile">{this.state.userData.sname}</label>
                </td>
              </tr>
              <tr>
                <td>
                  <label for="mobile">Address</label>
                </td>
              </tr>
              <tr>
                <td>
                <label for="mobile">{this.state.userData.address}</label>
                </td>
              </tr>
              <tr>
                <td>
                  <label for="mobile">Password</label>
                </td>
              </tr>
              <tr>
                <td>
                  <label for="mobile">***********</label>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </>
    );
                  }
  }
}
export default Profile;
