import React from "react";
import { Link, Outlet } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="mt-16">
      <header className="">
        <div className="flex justify-between text-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-[#424242]">
            GALLERY FOTO
          </h1>
          <Link
            to="/gallery/add-image"
            className="hover:bg-gray-50 text-gray-900 font-semibold shadow rounded px-4 py-2 my-auto text-center"
          >
            add image
          </Link>
        </div>
      </header>
      <main className="min-h-screen">
        <div className="flex justify-center items-center mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Gallery;
