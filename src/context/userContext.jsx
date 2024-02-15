import React, { createContext, useContext, useState } from "react";

const UserContext = createContext({
  role: "user",
});

export const useUserContext = () => useContext(UserContext)

const UserProvider = ({ children }) => {
  const [role, setRole] = useState(localStorage.getItem("role") || "user");

  const updateRole = (newRole) => {
    localStorage.setItem("role", newRole)
    setRole(newRole)
  }

  return (
    <UserContext.Provider value={{ role, setRole: updateRole }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
