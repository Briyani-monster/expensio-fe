// src/App.jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "../layout/PublicLayout";

// const Home = lazy(() => import("./pages/Home"));
// const Login = lazy(() => import("./pages/Login"));
// const Dashboard = lazy(() => import("./pages/Dashboard"));

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Route> */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={() => <div>Hello page</div>} />
          </Route>
          {/* <Route element={<PrivateLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route> */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
