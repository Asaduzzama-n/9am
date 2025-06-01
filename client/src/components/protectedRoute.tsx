import { useState, useEffect, type JSX } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import type { User } from '../types';


interface ProtectedRouteProps {
  element: JSX.Element;
}

function ProtectedRoute({ element }: ProtectedRouteProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await axios.get<{ user: User }>(`${import.meta.env.VITE_API_URL}/api/auth/verify`, {
          withCredentials: true,
        });
        setUser(res.data.user);
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    verifyToken();
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#36d7b7" size={50} />
      </div>
    );
  }

  return isAuthenticated ? element : <Navigate to="/signin" />;
}

export default ProtectedRoute;