import React, { createContext, useState, useContext, useEffect } from 'react';
import modulesData from './Data/modules.json';

// Create context for modules
const ModulesContext = createContext();

// Provider component for managing modules data
export const ModulesProvider = ({ children }) => {
  const [modules, setModules] = useState([]);

  // Function to fetch modules data from JSON file
  const fetchModulesData = () => {
    try {
      // Set the fetched modules data directly from the imported JSON file
      setModules(modulesData);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch modules data on component mount
  useEffect(() => {
    fetchModulesData();
  }, []);

  // Function to calculate the number of modules
  const calculateModulesNumber = () => {
    return modules.length;
  };

  return (
    <ModulesContext.Provider value={{ modules, calculateModulesNumber }}>
      {children}
    </ModulesContext.Provider>
  );
};

// Custom hook to access modules context
export const useModules = () => useContext(ModulesContext);