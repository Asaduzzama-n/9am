import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import type { SignupFormData } from '../types';


function Signup() {
  const [formData, setFormData] = useState<SignupFormData>({ username: '', password: '', shops: ['', '', ''] });
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleShopChange = (index: number, value: string) => {
    const newShops = [...formData.shops];
    newShops[index] = value;
    setFormData({ ...formData, shops: newShops });
  };

  const addShopField = () => {
    if (formData.shops.length < 4) {
      setFormData({ ...formData, shops: [...formData.shops, ''] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(formData.password)) {
      setError('Password must be 8+ characters with a number and special character');
      return;
    }
    if (formData.shops.filter((shop) => shop.trim() !== '').length < 3) {
      setError('At least 3 shop names are required');
      return;
    }
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/signup`, formData, {
        withCredentials: true,
      });
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {formData.shops.map((shop, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-700">Shop {index + 1}</label>
              <input
                type="text"
                value={shop}
                onChange={(e) => handleShopChange(index, e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          ))}
          {formData.shops.length < 4 && (
            <button
              type="button"
              onClick={addShopField}
              className="text-blue-600 hover:underline"
            >
              Add Another Shop
            </button>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Sign Up
          </button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
        <p className="mt-4 text-center">
          Already have an account? <a href="/signin" className="text-blue-600 hover:underline">Sign In</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;