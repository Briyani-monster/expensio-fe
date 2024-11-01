import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
function LoginPage() {
  return (
    <div className="text-white flex flex-col gap-12 items-center justify-center h-full text-center">
      <div>
        <p>Hello! 👋</p>
        <p>we are happy to see you again!</p>
      </div>
      <div className="flex flex-col gap-5">
        <input type="text" className="input-style-glass " placeholder="Email" />
        <div className="flex flex-col gap-1">
          <input
            type="text"
            placeholder="Password"
            className="input-style-glass "
          />

          <Link to="/forgot-password" className="underline text-right">
            forgot password?
          </Link>
        </div>
        <button className="bg-black rounded-sm mt-3 py-2 px-10">Login</button>
        <div className="flex gap-1">
          <p>want an account?</p>
          <Link to="/signup" className="underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
