// useRemoveScrollbar.js
import { useEffect } from 'react';

const useRemoveScrollbar = () => {
  useEffect(() => {
    // Remove scrollbar from the body
    document.body.style.overflow = 'hidden';
    // Cleanup function to restore scrollbar when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
};

export default useRemoveScrollbar