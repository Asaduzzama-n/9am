import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import type { User } from '../types';


function ShopDashboard() {
  const { shopName } = useParams<{ shopName: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await axios.get<{ user: User }>(`${import.meta.env.VITE_API_URL}/api/auth/verify`, {
          withCredentials: true,
        });
        setUser(res.data.user);
        setLoading(false);
      } catch (error) {
        window.location.href = '/signin';
      }
    };
    verifyToken();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#36d7b7" size={50} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {user && shopName && user.shops.includes(shopName) ? (
          <h1 className="text-2xl font-bold text-gray-900">This is {shopName} shop</h1>
        ) : (
          <h1 className="text-2xl font-bold text-red-600">Shop not found</h1>
        )}
      </div>
    </div>
  );
}

export default ShopDashboard;