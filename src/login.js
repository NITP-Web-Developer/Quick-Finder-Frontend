import React from "react";
import "./login.css";
import Profile from "./Profile";
import BackendUrl from "./urls";
import { Link, Redirect } from "react-router-dom";
import NotRegistered from "./Alerts/notRegistered";
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
      return <Redirect to="/Quick_Finder/" />;
    } else {
      if (!sessionStorage.username) {
        return (
          <>
            <div
              class="container"
              style={{
                padding: "0px",
                width: "80%",
                height: "500px",
                marginLeft: "10%",
                boxShadow: "0 5px 10px rgb(0,0,0,0.16)",
                backgroundColor: "white",
              }}
            >
              <div class="row">
                <div class="col-lg-8">
                  <img
                    src={require("./loginpic.jpg")}
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      height: "500px",
                      objectPosition: "25% 10%",
                    }}
                  />
                </div>
                <div class="col-lg-4">
                  <div
                    class="container"
                    style={{ height: "400px", marginTop: "50px" }}
                  >
                    <div
                      style={{
                        fontFamily: "arial",
                        fontWeight: "600",
                        fontSize: "20px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "arial",
                          color: "#6A6666",
                          fontWeight: "700",
                        }}
                      >
                        Welcome to
                      </span>{" "}
                      Quick Finder
                    </div>
                    <div style={{ fontFamily: "arial", color: "#8E8E8E" }}>
                      We make easy to buy in low cost.
                    </div>

                    <form
                      style={{ marginTop: "30px" }}
                      onSubmit={this.submitHandler}
                    >
                      <div class="form-group">
                        <label for="username">Username</label>
                        <input
                          type="text"
                          class="form-control"
                          name="username"
                          value={this.state.username}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div class="form-group">
                        <label for="pwd">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          name="password"
                          value={this.state.password}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div class="row">
                        <div class="col-lg-6">
                          <input
                            type="submit"
                            class="btn btn-default"
                            value="Login"
                            id="login"
                          />
                        </div>
                        <div class="col-lg-6">
                          <Link
                            to="/QUICK_FINDER/signup"
                            class="btn btn-default"
                            id="signup"
                          >
                            Create Profile
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
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
