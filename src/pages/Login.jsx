import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    console.log('Login submitted:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-8 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-green-600 mb-8">Login</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6"
      >
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter your password"
          />
        </div>

        {error && (
          <p className="text-red-600 text-sm font-medium">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
