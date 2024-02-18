import React from "react";
import "./header.css";
import { Link,useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import axiosinstance from "../axiosConfig";
const Header = () => {
  //const classes=useStyles();
  const { role } = useUserContext();
  
  return (
    <div className="header">
      <div className="head">
        Tour Travels
        <div className="right">{role}</div>
      </div>
    </div>
  );
};
export default Header;
