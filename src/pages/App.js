import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";
import Main from "./MainPage/Main";
import Login from "./LoginPage/login";
import Signup from "./SignupPage/Signup";
import About from "./AboutUsPage/About";
import Sell from "./SellPage/Sell";
import Boxopen1 from "./BoxOpen/Boxopen1";
import Profile from "./ProfilePage/Profile";
import ABCB from "./DashboardPage/SellHistory";
import ChatBox from "../Chat/ChatBox/Chatbox";
import ABCBB from "./DashboardPage/BuyHistory";
import Checkout from "../checkout/checkout";
import ItemStatus from "../HomeComponents/ItemStatus";
import SearchPage from "./SearchPage/SearchPage";
import DashBoard from "./DashboardPage/DashboardPage";
const App = () => {
  return (
    <>
      <Switch>
        {/* <Route exact path='/' component={Profile}/> */}
        {/* <Route exact path="/chat" component={ChatBox} /> */}
        <Route exact path="/" component={Main} />
        <Route exact path="/" component={Main} />

        <Route path="/dashboard" component={DashBoard} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/Boxopen1" component={Boxopen1} />
        <Route path="/Sell" component={Sell} />
        <Route path="/usersells" component={ABCB} />
        <Route path="/userbuys" component={ABCBB} />
        <Route path="/Signup" component={Signup} />
        <Route path="/About" component={About} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/itemStatus" component={ItemStatus} />
        <Route path="/search" component={SearchPage} />
        {/* <Route component={Error} /> */}
      </Switch>
    </>
  );
};
export default App;
