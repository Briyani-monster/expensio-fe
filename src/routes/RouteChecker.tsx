import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import AppLoader from "../Components/core/Loaders/AppLoader";

type Props = {};

const RouteChecker = (props: Props) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(ROUTES.dashboard);
  }, []);
  return <AppLoader />;
};

export default RouteChecker;
