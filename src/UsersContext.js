import React, { createContext, useState, useContext, useEffect } from 'react';
import userData from './Data/users.json';

// Create context for users
const UsersContext = createContext();

// Provider component for managing users data
export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

    // Function to fetch users data from JSON file
    const fetchUsersData = () => {
        try {
        // Set the fetched user data directly from the imported JSON file
        setUsers(userData);
        } catch (error) {
        console.error(error);
        }
    };

  // Fetch users data on component mount
  useEffect(() => {
    fetchUsersData();
  }, []);

  // Function to add a new user
  const addUser = (newUser) => {
    setUsers([...users.users, newUser]);
  };

  // Function to update an existing user
  const updateUser = (userId, updatedUser) => {
    setUsers(users.users.map(user => (user.id === userId ? updatedUser : user)));
  };

  // Function to delete a user
  const deleteUser = (userId) => {
    setUsers(users.users.filter(user => user.id !== userId));
  };

  return (
    <UsersContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {children}
    </UsersContext.Provider>
  );
};

// Custom hook to access users context
export const useUsers = () => useContext(UsersContext);
