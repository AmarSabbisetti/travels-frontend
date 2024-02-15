import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard/packages";
import Login from "./login/Login";
import Register from "./register/Register";
import Header from "./components/header";
//import Packages from "./components/packages";
import Logout from "./logout";
import AddPackage from "./AdminDashboard/addPackage";
import PackageDetailsPage from "./AdminDashboard/packageDetail";
import UserProvider from "./context/userContext";

const App = () => {
  return (
    <UserProvider>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/Addpackage" element={<AddPackage />} />
          {/* <Route path="/AddPlace" element={<AddPlaceDataFormPage />} /> */}
          <Route path="/Dashboard" element={<AdminDashboard />} />
          {/* <Route path="/packages/:id" element={<PackageDetailsPage/>} /> */}
          <Route path="/packages/:id" element={<PackageDetailsPage />} />
          {/* <Route path="/admin-login" element={<AdminDashboard />} /> */}
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
