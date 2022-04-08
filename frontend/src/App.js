import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//importing the components
import TrainList from "./components/TrainList";
import HomeSlider from "./components/HomeSlider";
import TicketBooking from "./components/TicketBooking";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import PaymentMethod from "./components/PaymentMethod";
import PaytmPG from "./components/PaytmPG";
import SBIBankPG from "./components/SBIBankPG";
import ThankYouMessage from "./components/ThankYouMessage";
import adminSignIn from './components/adminSignIn';
import createTrain from './components/createTrain';
import deleteTrain from "./components/deleteTrain";
import Loginform from "./components/Loginform"
//importing the images


function App() {
  return (
    <Router>
      
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link" style={{ color: "white" }}>
                Home
              </Link>
            </li>
          </ul>



          
       

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link
                to="/Login"
                className="nav-link"
                style={{ color: "white" }}
              >
               Login
              </Link>
            </li>
          </ul>
        </div>


          
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link
                to="/trainlist"
                className="nav-link"
                style={{ color: "white" }}
              > 
             Trains
              </Link>
            </li>
          </ul>
        </div>


        
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link
                to="/booking"
                className="nav-link"
                style={{ color: "white" }}
              >
              Booking
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link
                to="/payment"
                className="nav-link"
                style={{ color: "white" }}
              >
             
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link
                to="/adminSignIn"
                className="nav-link"
                style={{ color: "white" }}
              >
             Admin
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      

      {/* Switching between components */}
      <Switch>
        <Route path="/" exact component={HomeSlider} />
        <Route path="/trainlist" exact component={TrainList} />
        <Route path="/booking" exact component={TicketBooking} />
        <Route path="/signUp" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
        <Route path="/payment" exact component={PaymentMethod} />
        <Route path="/submitPaymentDetail" exact component={PaytmPG} />
        <Route path="/thankyou" exact component={ThankYouMessage} />
        <Route path="/sbipg" exact component={SBIBankPG} />
        <Route path="/adminSignIn" exact component={adminSignIn} />
        <Route path="/addTrain" exact component={createTrain} />
        <Route path="/delTrain" exact component={deleteTrain} />

        
       
      </Switch>
      
    </Router>
  );
}

export default App;
