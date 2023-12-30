'use client'
import { useState, useContext, createContext, useEffect } from "react";

const LoadingContex = createContext();
const LoadingProvider = ({ children }) => {
  
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContex.Provider value={[loading, setLoading]}>
      {children}
    </LoadingContex.Provider>
  );
};

// custom hook
const useLoading = () => useContext(LoadingContex);

export { useLoading , LoadingProvider };