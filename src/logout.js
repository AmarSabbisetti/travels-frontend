import React, { useEffect } from 'react';
import axiosinstance from './axiosConfig';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from './context/userContext';

export default function SignUp() {
	const navigate = useNavigate();
	const {setIsLoggedIn}=useUserContext()
	useEffect(() => {
		axiosinstance.post('logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token'),
		});
		localStorage.removeItem('access_token');
		localStorage.removeItem('isLoggedIn');
		setIsLoggedIn(false);
		localStorage.removeItem('refresh_token');
		axiosinstance.defaults.headers['Authorization'] = null;
		navigate('/login');
	});
	return <div>Logout</div>;
}