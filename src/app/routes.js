import React from "react";
import { Route  } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import { Home } from "../Pages/home";
import {Offers} from "../Pages/offers";
import Login from "../Pages/logIn";
import Signup from "../Pages/SignUp";
import Booknow from "../Pages/Book Now";
import Services from "../Pages/Services";
import Events from "../Pages/events";
import Dinings from "../Pages/dinings";
import Rooms from "../Pages/rooms";


function AppRoutes() {
  const user = localStorage.getItem("token");
  return (
  
    <AnimatedSwitch
      atEnter={anim.atEnter}
      atLeave={anim.atLeave}
      atActive={anim.atActive}
      mapStyles={mapStyles}
      className="page"
    >
      
      <Route exact path="/home" component={Home} />
      <Route exact path="/offers" component={Offers} />
      {user && <Route path="/booknow" component={Booknow} />}
			<Route exact path="/signup" component={Signup} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/dining" component={Dinings} />
      <Route exact path="/services" component={Services} />
			<Route exact path="/login" component={Login} />
      <Route exact path="/rooms" component={Rooms} />
      
			
      <Route path="*" component={Home} />
     
    </AnimatedSwitch>
    
  );
}

function mapStyles(styles) {
  return {
    transition: `transform 100ms ease`,
    transform: `translateY(${styles.translateY}%)`,
  };
}

const anim = {
  atEnter: {
    translateY: 100,
  },
  atLeave: {
    translateY: -130,
  },
  atActive: {
    translateY: 0,
  },
};

export default AppRoutes;
