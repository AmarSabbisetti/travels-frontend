import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard/packages";
import Login from "./login/Login";
import Register from "./register/Register";
import Header from "./components/header";
//import Packages from "./components/packages";
import Logout from "./logout"
import AddPackage from "./AdminDashboard/addPackage"
import DetailViewData from "./AdminDashboard/packageDetail";


const App = () => {

  

  return (
    <>
    <Header/>
    <Router>
      <Routes>
        
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/Addpackage" element={<AddPackage />} />
        <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
        <Route path="/Packages/{id}" element={<DetailViewData />}/>
        
        {/* <Route path="/admin-login" element={<AdminDashboard />} /> */}
      </Routes>
    </Router>
    </>
  );
};

export default App;
