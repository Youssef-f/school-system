import React, { createContext, useState, useContext, useEffect } from 'react';
import resultsData from './Data/results.json';

// Create context for results
const ResultsContext = createContext();

// Provider component for managing results data
export const ResultsProvider = ({ children }) => {
  const [results, setResults] = useState([]);

  // Function to fetch results data from JSON file
  const fetchResultsData = () => {
    try {
      // Set the fetched results data directly from the imported JSON file
      setResults(resultsData);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch results data on component mount
  useEffect(() => {
    fetchResultsData();
  }, []);

  // Function to calculate the number of results
  const calculateResultsNumber = () => {
    return results.length;
  };

  return (
    <ResultsContext.Provider value={{ results, calculateResultsNumber }}>
      {children}
    </ResultsContext.Provider>
  );
};

// Custom hook to access results context
export const useResults = () => useContext(ResultsContext);
