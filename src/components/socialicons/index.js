import React from "react";
import "./style.css";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  
} from "react-icons/fa";


export const Socialicons = (params) => {
  const socialprofils = {
    
    facebook: "https://www.facebook.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
    insta: "https://instargram.com",
  };
  return (
    
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.twitter && (
          <li>
            <a href={socialprofils.twitter}>
              <FaTwitter />
            </a>
          </li>
        )}
        {socialprofils.insta && (
          <li>
            <a href={socialprofils.insta}>
              <FaInstagram />
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofils.youtube && (
          <li>
            <a href={socialprofils.youtube}>
              <FaYoutube />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Us</p>
    </div>
    
  );
};
