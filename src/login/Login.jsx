import React, { useState ,useEffect} from 'react';
import axios from '../axiosConfig';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import './LoginForm.css';
import { fontWeight, textAlign } from '@mui/system';
import axiosinstance from '../axiosConfig';


const LoginForm = (onLogin) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(localStorage.getItem('access_token'))

    try {
      const response = await axiosinstance
      .post('/login/'+role, {
        email:username,
        password:password
      })
      .then((res) => {
        console.log(res.data.message)
        console.log(res.data.token.access)
        localStorage.setItem('access_token',res.data.token.access);
        console.log(localStorage.getItem('access_token'))
        localStorage.setItem('refresh_token',res.data.token.refresh);
        axiosinstance.defaults.headers['Authorization']='JWT '+ localStorage.getItem('access_token');
        console.log(axiosinstance.defaults.headers['Authorization'])
        //onLogin=(token);
      });
      
     
      handleLoginSuccess(role);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
const handleLoginSuccess = (role) => {
    // Here you can store the token in localStorage or handle any other logic
    // Redirect to another page
    setLoggedIn(true)
    setRole(role)
}; 
useEffect(() => {
    // Redirect the user based on their role after successful login
    if (loggedIn) {
      if (role === 'admin') {
        navigate('/AdminDashboard');
      } else {
        navigate('/AdminDashboard');
      }
    }
  }, [loggedIn,role, navigate]);

  return (
    <>
    <br/>
    <br/>
    <form className="login-form" onSubmit={handleSubmit}>
        <div className='subheader'>Login</div>
        <label htmlFor="userID">User ID:</label><br />
    <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br/>
      <br/>
      <label htmlFor="password">Password:</label><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="role">Role:</label><br />
        <select id='role' value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <br />
        <br />
      <button type="submit">Login</button>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </form>
    </>
  );
};

export default LoginForm;
