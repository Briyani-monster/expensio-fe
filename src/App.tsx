import { useEffect } from "react";
import "./App.scss";
import AppRoutes from "./routes";
import { useNavigate } from "react-router-dom";

function App() {
  useEffect(() => {
    document.documentElement.classList.toggle("dark", false);
  }, []);
  return <AppRoutes />;
}

export default App;
