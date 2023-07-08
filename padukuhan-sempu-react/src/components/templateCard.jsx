import React from "react";

const Card = ({ title, description, imagePath }) => {
  return (
    // <div className="flex w-1/3 flex-wrap">
    <div className="w-full p-1 md:p-2">
      <img
        alt={title}
        className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition-transform"
        src={`http://127.0.0.1:8000/storage/${imagePath}`}
      />
      {/* </div> */}
    </div>
  );
};

export default Card;
