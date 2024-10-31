// src/layouts/PublicLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div>
      <header>
        <h1>Public Header</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Public Footer</p>
      </footer>
    </div>
  );
};

export default PublicLayout;
