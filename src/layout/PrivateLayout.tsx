// src/layouts/PrivateLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PrivateLayout;
