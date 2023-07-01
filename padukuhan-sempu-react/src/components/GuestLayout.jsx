import React from "react";
import { Outlet } from "react-router-dom";

const GuestLayout = () => {
  return (
    <div>
      <main className="flex items-center justify-center min-h-screen">
        <div className="card w-96 bg-base-100 shadow-2xl p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default GuestLayout;
