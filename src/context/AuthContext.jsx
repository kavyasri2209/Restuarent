import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // Load from localStorage on start
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    setUsers(savedUsers);
    setCurrentUser(savedUser);
  }, []);

  // Save users list
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Save logged-in user
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  // Login
  const login = (email, password) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      setCurrentUser({ id: user.id, name: user.name, email: user.email });
      return true;
    }
    return false;
  };

  // Signup
  const signup = (data) => {
    if (users.find((u) => u.email === data.email)) return false;
    const newUser = { ...data, id: Date.now() };
    setUsers((prev) => [...prev, newUser]);
    setCurrentUser({ id: newUser.id, name: newUser.name, email: newUser.email });
    return true;
  };

  // Logout
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthenticated: !!currentUser,
        users,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom hook for easy usage
export const useAuth = () => useContext(AuthContext);
