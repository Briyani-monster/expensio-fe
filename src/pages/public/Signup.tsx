import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
function Signup() {
  return (
    <div className="text-white flex flex-col gap-12 items-center justify-center h-full text-center">
      <div>
        <p>Welcome! 👋</p>
        <p>We’re excited to have you join us!</p>
        <p>Let’s get you started on your financial journey.</p>
      </div>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          className="input-style-glass "
          placeholder="Full name"
        />
        <input type="text" className="input-style-glass " placeholder="Email" />
        <input
          type="text"
          placeholder="Password"
          className="input-style-glass "
        />
        <input
          type="text"
          placeholder="Confirm password"
          className="input-style-glass "
        />
        <button className="bg-black rounded-sm mt-3 py-2 px-10">Sign up</button>
        <div className="flex gap-1">
          <p>Already have an account?</p>
          <Link to="/login" className="underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
