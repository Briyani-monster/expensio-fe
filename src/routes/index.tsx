// src/App.jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "../layout/PublicLayout";
import { ROUTES } from "../utils/routes";

const Login = lazy(() => import("../pages/public/LoginPage"));
const Signup = lazy(() => import("../pages/public/SignUp"));
// const Login = lazy(() => import("./pages/Login"));
// const Dashboard = lazy(() => import("./pages/Dashboard"));

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path={ROUTES.login} element={<Login />} />
            <Route path={ROUTES.signup} element={<Signup />} />
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
