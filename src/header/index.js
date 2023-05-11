import React, { useState } from "react";
import "./style.css";
import {GrClose } from "react-icons/gr";
import{HiMenu} from "react-icons/hi"
import { Link } from "react-router-dom";
import  pheonix from "../Assets/pheonix1.png";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex justify-content-between">
          <Link  className="navbar-brand nav_ac" to="/">
          <img src={pheonix} alt="pheonix logo" />
          </Link>
          <div className="d-flex align-items-center justify-content-flex-end">
          
          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {!isActive ? <GrClose /> : <HiMenu/>}
            
          </button>
          
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                  <Link  onClick={handleToggle} to="/home" className="my-3">Home</Link>
                  </li>
                  <li className="menu_item">
                    <Link  onClick={handleToggle} to="/login" className="my-3"> Register</Link>
                  </li>
                  <li className="menu_item">
                    <Link  onClick={handleToggle} to="/services" className="my-3"> Services</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/offers" className="my-3">Offers</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/rooms" className="my-3">Rooms</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/dining" className="my-3"> Dinings</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/events" className="my-3"> Events</Link>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
      
    </>
  );
};

export default Headermain;
