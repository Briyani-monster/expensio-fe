// src/layouts/PrivateLayout.jsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SliderDrawer from "../Components/core/SliderDrawer";

const PrivateLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1">
        <button onClick={() => setIsOpen((prev) => !prev)}>open</button>
        <Outlet />
      </main>
      <SliderDrawer show={isOpen} close={() => setIsOpen(false)}>
        hey
      </SliderDrawer>
    </div>
  );
};

export default PrivateLayout;
