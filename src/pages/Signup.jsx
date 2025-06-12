import React, { useState } from "react";

const SignupForm = ({ onSuccess }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const API_BASE_URL = 'http://localhost:8000/api';

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      localStorage.setItem('token', data.token);
      setSuccess("Registration successful!");
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      if (onSuccess) onSuccess(data);
    } catch (err) {
      let msg = err.message.includes("fetch")
        ? "Server unreachable. Please ensure it's running."
        : err.message;
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignup} className="space-y-6">
      {error && <div className="text-red-600">{error}</div>}
      {success && <div className="text-green-600">{success}</div>}

      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required className="w-full border p-2 rounded" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full border p-2 rounded" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full border p-2 rounded" />
      </div>
      <div>
        <label>Confirm Password</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="w-full border p-2 rounded" />
      </div>
      <button type="submit" disabled={isLoading} className="w-full bg-blue-500 text-white p-2 rounded">
        {isLoading ? "Signing up..." : "Sign Up"}
      </button>
    </form>
  );
};

export default SignupForm;
