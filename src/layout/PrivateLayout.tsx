import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import GlobalSlider from "../Components/GlobalSlider";

const PrivateLayout = () => {
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
      <GlobalSlider />
    </div>
  );
};

export default PrivateLayout;
