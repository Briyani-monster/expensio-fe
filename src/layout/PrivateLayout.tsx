// src/layouts/PrivateLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const PrivateLayout = () => {
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default PrivateLayout;
