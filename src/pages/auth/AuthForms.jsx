import React, { useState } from "react";
import LoginForm from "../login";
import SignupForm from "../Signup";

const AuthForms = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSuccess = (data) => {
    console.log("Auth success:", data);
    // Add redirect or user state handling here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center space-x-4 mb-6">
          <button onClick={() => setIsLogin(true)} className={`${isLogin ? 'font-bold border-b-2 border-blue-500' : 'text-gray-500'}`}>Log In</button>
          <button onClick={() => setIsLogin(false)} className={`${!isLogin ? 'font-bold border-b-2 border-blue-500' : 'text-gray-500'}`}>Sign Up</button>
        </div>

        {isLogin ? <LoginForm onSuccess={handleSuccess} /> : <SignupForm onSuccess={handleSuccess} />}

        <div className="text-center mt-4 text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={() => setIsLogin(!isLogin)} className="text-blue-500 underline">
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForms;
