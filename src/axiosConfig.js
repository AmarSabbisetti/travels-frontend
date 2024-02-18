import axios from "axios";
// const baseURL = process.env.REACT_APP_API_BASE_URL; // Replace with your base URL
const baseURL = "http://localhost/api";
const axiosinstance = axios.create({
  baseURL,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "JWT " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosinstance.interceptors.response.use(
	(response) => {
	  return response;
	},
	async function (error) {
	  if (error.response && error.response.status === 401) {
		// Unauthorized error, attempt to refresh token
		try {
		  const refreshToken = localStorage.getItem("refresh_token");
  
		  if (refreshToken) {
			const response = await axios.post(
			  "/login/token/refresh/",
			  { refresh: refreshToken }
			);
  
			localStorage.setItem("access_token", response.data.access);
			localStorage.setItem("refresh_token",response.data.refresh)
			axiosinstance.defaults.headers['Authorization'] =
								'JWT ' + response.data.access;
			error.config.headers.Authorization =
			  "JWT " + response.data.access;
			return axiosinstance(error.config);

		  } else {
			window.location.href = "/login/";
			return Promise.reject(error);
		  }
		} catch (refreshError) {
		  console.error("Error refreshing token:", refreshError);
		  window.location.href = "/login/";
		  return Promise.reject(error);
		}
	  }
  
	  return Promise.reject(error);
	}
  );


export default axiosinstance;
