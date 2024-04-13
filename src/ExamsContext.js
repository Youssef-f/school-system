import React, { createContext, useState, useContext, useEffect } from 'react';
import examsData from './Data/exams.json';

// Create context for exams
const ExamsContext = createContext();

// Provider component for managing exams data
export const ExamsProvider = ({ children }) => {
  const [exams, setExams] = useState([]);

  // Function to fetch exams data from JSON file
  const fetchExamsData = () => {
    try {
      // Set the fetched exams data directly from the imported JSON file
      setExams(examsData);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch exams data on component mount
  useEffect(() => {
    fetchExamsData();
  }, []);

  // Function to calculate the number of exams
  const calculateExamsNumber = () => {
    return exams.length;
  };

  return (
    <ExamsContext.Provider value={{ exams, calculateExamsNumber }}>
      {children}
    </ExamsContext.Provider>
  );
};

// Custom hook to access exams context
export const useExams = () => useContext(ExamsContext);
