import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { app } from '../api/firebase';
import { useNavigate } from 'react-router-dom';

const AdminSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const auth = getAuth(app);
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Replace with your sign-in logic
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      navigate('/admin/dashboard');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">Admin Sign-In</h2>
        <form onSubmit={handleSignIn} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          {/* <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-500"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-700">Remember me</label>
            </div>
            <a href="#" className="text-sm text-blue-500 hover:text-blue-700">Forgot password?</a>
          </div> */}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full p-3 bg-blue-600 text-white rounded-md font-bold ${loading ? 'opacity-50' : ''} hover:bg-blue-700 focus:outline-none`}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminSignIn;
