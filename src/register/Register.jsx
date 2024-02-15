import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import axiosinstance from '../axiosConfig';


function Register() {
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const [registered,setRegistered]=useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        // Send the registration data to the backend
        try {
            
            const response = await axiosinstance.post("/register", {
                email: userID,
                password: password
              });
              if (response.status >= 200 && response.status < 300) {
                // Registration successful
                console.log("You are registered");
                setRegistered(true);
          
                // Navigate to the register success page
                navigate("/login");
              } else {
                // Handle non-successful registration
                throw new Error("Registration failed");
              }
            } catch (error) {
              // Handle registration error
              console.error("Registration error:", error);
              alert("Registration failed");
            }
    };

    useEffect(() => {
        // Redirect the user based on their role after successful login
        if (registered) {
            navigate('/login');
        }
      }, [registered,navigate]);

    return (
        <div>
            <br />
            <br />
            <form className="login-form" onSubmit={handleRegister}>
               <div className='subheader'>Register</div>
                <label htmlFor="userID">User ID:</label><br />
                <input
                    type="text"
                    id="Username"
                    value={userID}
                    onChange={(e) => setUserID(e.target.value)}
                /><br />
                <label htmlFor="password">Password:</label><br />
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br />
                <button type="submit">Register</button>
                <p>Have an account? <Link to="/login">Login here</Link></p>
            </form>
        </div>
    );
}

export default Register;
