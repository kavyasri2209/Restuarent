import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const savedCurrentUser = JSON.parse(localStorage.getItem("currentUser"));
    setUsers(savedUsers);
    setCurrentUser(savedCurrentUser);
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  const login = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser({ id: user.id, name: user.name, email: user.email });
      return true;
    }
    return false;
  };

  const signup = (data) => {
    if (users.find(u => u.email === data.email)) return false;
    const newUser = { ...data, id: Date.now() };
    setUsers([...users, newUser]);
    setCurrentUser({ id: newUser.id, name: newUser.name, email: newUser.email });
    return true;
  };

  const logout = () => setCurrentUser(null);

  return (
    <AuthContext.Provider value={{ currentUser, users, login, signup, logout, isAuthenticated: !!currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
