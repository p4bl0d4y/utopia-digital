
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Adjust loading time as needed

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return isLoading;
};
