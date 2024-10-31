// src/layouts/PrivateLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <div>
      <header>
        <h1>Private Header</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Private Footer</p>
      </footer>
    </div>
  );
};

export default PrivateLayout;
