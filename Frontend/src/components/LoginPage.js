import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission for sign-in or sign-up here
    if (isSignUp) {
      console.log('Signing up with', username, password);
      // Add your sign-up logic here
    } else {
      console.log('Signing in with', username, password);
      // Add your sign-in logic here
    }

    // After successful login/sign-up, redirect to home page
    navigate('/');
  };

  const handleGoogleLogin = (response) => {
    // Handle Google login response
    console.log(response);
    // You can store the response or handle the login state here
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg space-y-6">
        {/* Title Section */}
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </h2>

        {/* Google Sign-In Button Section */}
        <div className="w-full flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => console.log('Login Failed')}
            useOneTap
            className="w-full max-w-xs"
          />
        </div>
        
        <div className="my-4 text-center text-gray-600">OR</div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username Input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="username" className="text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </div>

          {/* Toggle between Sign In / Sign Up */}
          <div className="mt-4 text-center text-sm text-gray-600">
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-blue-600 hover:text-blue-700"
            >
              {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
