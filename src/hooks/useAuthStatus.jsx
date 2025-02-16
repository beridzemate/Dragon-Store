import { useEffect, useState } from "react";
import { auth } from "../services/firebase/config";

export const useAuthStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return { isLoggedIn, loading };
};