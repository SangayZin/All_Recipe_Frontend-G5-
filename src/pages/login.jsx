import React, { useState } from "react";

const LoginForm = ({ onSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const API_BASE_URL = 'http://localhost:8000/api';

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      localStorage.setItem('token', data.token);
      setSuccess("Login successful! Welcome back.");
      setEmail("");
      setPassword("");

      if (onSuccess) onSuccess(data);
    } catch (err) {
      let msg = err.message.includes("fetch")
        ? "Unable to connect to server. Please ensure it's running."
        : err.message;
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-6">
      {error && <div className="text-red-600">{error}</div>}
      {success && <div className="text-green-600">{success}</div>}

      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full border p-2 rounded" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full border p-2 rounded" />
      </div>
      <button type="submit" disabled={isLoading} className="w-full bg-blue-500 text-white p-2 rounded">
        {isLoading ? "Logging in..." : "Log In"}
      </button>
    </form>
  );
};

export default LoginForm;
