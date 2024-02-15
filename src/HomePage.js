// import React, { useState } from 'react';
// import AdminDashboard from './AdminDashboard';
// import UserDashboard from './UserDashboard';
// //import wallpaperImage from './wallpapers.jpg';

// const HomePage = () => {
//   const [userLoggedIn, setUserLoggedIn] = useState(false);
//   const [adminLoggedIn, setAdminLoggedIn] = useState(false);

//   const handleUserLogin = () => {
//     setUserLoggedIn(true);
//     setAdminLoggedIn(false); // Ensure admin is not logged in
//   };

//   const handleAdminLogin = () => {
//     setAdminLoggedIn(true);
//     setUserLoggedIn(false); // Ensure user is not logged in
//   };

//   return (
//     <div className="homepage-container">
//       <h1>Welcome to the Homepage!</h1>
//       <div className="button-container">
//         {userLoggedIn ? (
//           <p>You are logged in as a user.</p>
//         ) : (
//           <button className="login-button" onClick={handleUserLogin}>
//             Login as User
//           </button>
//         )}
//         {adminLoggedIn ? (
//           <p>You are logged in as an admin.</p>
//         ) : (
//           <button className="login-button" onClick={handleAdminLogin}>
//             Login as Admin
//           </button>
//         )}
//       </div>
//       {adminLoggedIn && <AdminDashboard />} {/* Render AdminDashboard if admin is logged in */}
//   {/* <img src={wallpaperImage}  alt="Alt" className="homepage-image" /> */}
//     </div>
//   );
// };

// export default HomePage;



import React, { useState, useEffect } from 'react';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import { Link } from 'react-router-dom';
const HomePage = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [travelPlans, setTravelPlans] = useState([]);

  const handleUserLogin = () => {
    setUserLoggedIn(true);
    setAdminLoggedIn(false); // Ensure admin is not logged in
  };

  const handleAdminLogin = () => {
    setAdminLoggedIn(true);
    setUserLoggedIn(false); // Ensure user is not logged in
  };

  useEffect(() => {
    // Fetch travel plans from API
    
  }, []);

  return (
    <div className="homepage-container">
      <h1>Welcome to Our Travels!</h1>
      <div className="button-container">
        
      <p><Link to="/register"><button>Register</button></Link></p>
      <p><Link to="/login"><button>Login</button></Link></p>
        {/* {userLoggedIn ? (
          <p>You are logged in as a user.</p>
        ) : (
          <p><Link to="/login"><button>Login</button></Link></p>
        )}
        {adminLoggedIn ? (
          <p>You are logged in as an admin.</p>
        ) : (
          <button className="login-button" onClick={handleAdminLogin}>
            Login as Admin
          </button>
        )} */}
      </div>
      {adminLoggedIn && <AdminDashboard />} {/* Render AdminDashboard if admin is logged in */}
      {userLoggedIn && <UserDashboard travelPlans={travelPlans} />}
{/* Render UserDashboard if user is logged in */}
    </div>
  );
};

export default HomePage;

