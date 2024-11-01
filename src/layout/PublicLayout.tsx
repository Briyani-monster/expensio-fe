// src/layouts/PublicLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import "./public-style.scss";
import Icon from "../Components/core/Icon";
const PublicLayout = () => {
  return (
    <div className="public-background relative">
      <div className="absolute w-full h-screen   z-10 bg-black opacity-60"></div>
      <div className="absolute flex gap-2 w-4/5 h-4/5 z-20 top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className=" w-2/3 flex overflow-hidden flex-col gap-10 px-10 justify-center h-full left-glasmorphic rounded-tl-lg rounded-bl-lg">
          {/* grid */}
          <div className="absolute  inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="flex items-center gap-2 z-10">
            <Icon name="Logo" className="h-14" />
            <p className="text-black font-bold text-6xl">EXPENSE</p>
          </div>
          <div className="z-10">
            <p className="text-slate-500 font-normal text-5xl ">
              Smart budgeting for the savvy spender—track, save, and invest with
              confidence.
            </p>
          </div>
        </div>
        <main className=" w-1/3 h-full right-glassmorphic rounded-tr-lg rounded-br-lg ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PublicLayout;
