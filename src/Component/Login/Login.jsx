import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from './logo.png';
import { useState } from "react";
import Modal from "./Modal";
import Third_step from './Third_step'

function Login() {
    const [isthirdstepOpen, setThirdstepOpen] = useState(false);
  return (
    <>
    <div className="p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg" >
        <div className=" flex justify-center items-center  border-2 bg-black ">
        <div><img src= {logo} className=" w-full h-10" /></div>
        <div className="text-2xl text-white font-bold  align-middle">Welcome Back</div>
        </div>
        
      <p className="text-black text-base mb-6">
        People across the globe are joining us to upgrade their career with our Robust AI.
      </p>
      <form>
        <div className="mb-4">
          <label className="block text-black">Email ID</label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your email ID"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black">Password</label>
          <input
            type="password"
            name="password"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your password"
          />
        </div>
        <Link to="/signup">
          <p className="text-blue-300 hover:text-yellow-300 text-center py-2">
            New User? Create Account
          </p>
        </Link>
        <div className="text-center py-2">
          <label className="text-black">Forgot Password?</label>
        </div>
        <button type="submit" className="w-full bg-yellow-500 text-black px-4 py-2 rounded-md">
          Login
        </button>

        <button
          className="bg-yellow-500 text-white px-4 m-3 py-2 rounded-md"
          onClick={() => setThirdstepOpen(true)}
        >
         Complete Your Profile
        </button>
      </form>
    </div>
    <Modal isOpen={isthirdstepOpen} onClose={() => setThirdstepOpen(false)}>
        <Third_step />
      </Modal>
    </>
  );
}

export default Login;
