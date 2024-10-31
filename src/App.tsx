import { useEffect } from "react";
import "./App.scss";

function App() {
  useEffect(() => {
    document.documentElement.classList.toggle("dark", false);
  }, []);
  return <div className="">Hello</div>;
}

export default App;
