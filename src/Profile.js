import React from "react";
import BackendUrl from "./urls";
import "./Signup.css";
import { Link } from "react-router-dom";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      sname: "",
      mobile: "",
      email: "",
      address: "",
    };
    // this.getUserData();
    // this.getUserData = this.getUserData.bind(this);
  }

  async componentDidMount() {
    var obj = {};
    obj.username = sessionStorage.username;
    console.log(obj.search_input);
    fetch(`${BackendUrl}/backend/accountDetails`, {
      method: "post",
      body: JSON.stringify({ obj }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json.user);
        //  console.log(json.mes.length);
        //  var meslen = json.mes.length;
        // this.setState({getting:json.mes});
        this.setState({
          fname: json.user.name,
          sname: json.user.sname,
          mobile: json.user.mobile,
          email: json.user.email,
          address: json.user.address,
        });
      });
    return;
  }

  logout = () => {
    console.log("logout");
    window.sessionStorage.setItem("username", "");
    window.location.replace("/QUICK_FINDER/");
  };

  render() {
    return (
      <>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <Link class="nav-link" to="/QUICK_FINDER/usersells">
              Yours Sell
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/QUICK_FINDER/userbuys">
              Yours Buy
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" onClick={() => this.logout()}>
              Logout
            </Link>
          </li>
        </ul>
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
                  <label for="first">First Name : </label>
                  {"  "}
                  <label for="first">{this.state.fname}</label>
                </td>
              </tr>
              <tr>
                <td>
                  <label for="mobile">Mobile : </label>{" "}
                  <label for="mobile">{this.state.mobile}</label>
                </td>
              </tr>

              <tr>
                <td>
                  <label for="email">Email : </label>
                  {"  "}
                  {"    "}
                  <label for="email">{this.state.email}</label>
                </td>
              </tr>
            </table>
            <table style={{ width: "40%", float: "right" }}>
              <tr>
                <td>
                  <label for="last">Second Name : </label>
                  {"  "}
                  {"  "}
                  <label for="last">{this.state.sname}</label>
                </td>
              </tr>
              <tr>
                <td>
                  <label for="address">Address : </label> {"  "}
                  <label for="address">{this.state.address}</label>
                </td>
              </tr>

              <tr>
                <td>
                  <label for="password">Password : </label>
                </td>
              </tr>
              <tr>
                <td>
                  <label for="password">***********</label>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </>
    );
  }
}
export default Profile;
