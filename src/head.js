import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./head.css";

class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn:false,
    };
    this.isLoggedIn();
    this.isLoggedIn = this.isLoggedIn.bind(this);
  }
  isLoggedIn(){
    if(sessionStorage.username){
      this.setState({isLoggedIn:true});
    }else
    {
      this.setState({isLoggedIn:false});
    } 
  }
  
  render() {
    if(this.isLoggedIn){
      return (<><div id="title">Quick Finder</div>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <Link class="nav-link" to="/QUICK_FINDER/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/QUICK_FINDER/Sell">Sell</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Setting</a>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/QUICK_FINDER/usersells">Sell History</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/QUICK_FINDER/userbuys">Buy History</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/QUICK_FINDER/profile">Profile</Link>
        </li>
  
      
      </ul>
              </>);
         }else{
      return (<><div id="title">Quick Finder</div>
<ul class="nav justify-content-center">
  <li class="nav-item">
    <Link class="nav-link" to="/QUICK_FINDER/">Home</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/QUICK_FINDER/Sell">Sell</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/QUICK_FINDER/About">About Us</Link>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Setting</a>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/QUICK_FINDER/login">Account</Link>
  </li>

</ul>
        </>
      );
    }
    }
  }
export default Head;
