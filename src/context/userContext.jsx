import React, { createContext, useContext, useState } from "react";

const UserContext = createContext({
  role: "user",
});

export const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [role, setRole] = useState(localStorage.getItem("role") || "user");
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("isLoggedIn") || false
  );

  const updateRole = (newRole) => {
    localStorage.setItem("role", newRole);
    setRole(newRole);
  };

  const updateIsLoggedIn = (newIsLoggedIn) => {
    localStorage.setItem("isLoggedIn", newIsLoggedIn);
    setIsLoggedIn(newIsLoggedIn);
  };

  return (
    <UserContext.Provider
      value={{
        role,
        setRole: updateRole,
        isLoggedIn,
        setIsLoggedIn: updateIsLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
