import React, { createContext, useState, useEffect, useContext } from "react";

// Create context
export const AuthContext = createContext();

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // Load data from localStorage when app starts
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const savedCurrentUser = JSON.parse(localStorage.getItem("currentUser"));
    setUsers(savedUsers);
    setCurrentUser(savedCurrentUser);
  }, []);

  // Save users when list changes
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Save current user when it changes
  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  // Login user
  const login = (email, password) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      setCurrentUser({ id: user.id, name: user.name, email: user.email });
      return true;
    }
    return false;
  };

  // Signup user
  const signup = (data) => {
    if (users.find((u) => u.email === data.email)) return false;
    const newUser = { ...data, id: Date.now() };
    setUsers([...users, newUser]);
    setCurrentUser({ id: newUser.id, name: newUser.name, email: newUser.email });
    return true;
  };

  // Logout user
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        users,
        login,
        signup,
        logout,
        isAuthenticated: !!currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Add this custom hook for easy use
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
