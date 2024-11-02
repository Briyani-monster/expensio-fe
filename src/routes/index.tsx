// src/App.jsx
import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import PublicLayout from "../layout/PublicLayout";
import { ROUTES } from "../utils/routes";
import AppLoader from "../Components/core/Loaders/AppLoader";
import RouteChecker from "./RouteChecker";
import PrivateLayout from "../layout/PrivateLayout";

const Login = lazy(() => import("../pages/public/LoginPage"));
const Signup = lazy(() => import("../pages/public/Signup"));
const IncomePage = lazy(() => import("../pages/Private/IncomePage"));
// const Login = lazy(() => import("./pages/Login"));
// const Dashboard = lazy(() => import("./pages/Dashboard"));

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<AppLoader />}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path={ROUTES.login} element={<Login />} />
            <Route path={ROUTES.signup} element={<Signup />} />
          </Route>
          <Route element={<PrivateLayout />}>
            <Route path={ROUTES.dashboard} element={<div>Dashboard</div>} />
            <Route path={ROUTES.income} element={<IncomePage />} />
            <Route path={ROUTES.expense} element={<div>Expense</div>} />
            <Route path={ROUTES.investement} element={<div>Investment</div>} />
            <Route
              path={ROUTES.subscription}
              element={<div>Subscription</div>}
            />
            <Route path={ROUTES.settings} element={<div>Settings</div>} />
          </Route>
          <Route path="*" element={<RouteChecker />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
