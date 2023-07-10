import React from "react";

const footer = () => {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-center">
            <span className="text-sm text-center text-gray-500 sm:text-center dark:text-gray-400">
              © COPYRIGHT 2023
              <a href="https://flowbite.com/" className="hover:underline"></a>
              .website_usd.com
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default footer;
