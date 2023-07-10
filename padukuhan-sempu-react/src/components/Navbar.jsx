import React, { useState } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Budaya", to: "/budaya" },
  { name: "Gallery Foto", to: "/gallery/images" },
  { name: "Kontak", to: "/kontak" },
];

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleLinkHover = (index) => {
    setHoveredLink(index);
  };

  const handleLinkLeave = () => {
    setHoveredLink(null);
  };

  return (
    <nav className="navbar flex justify-between items-center h-14 opacity-80 px-24 bg-[#577865] fixed top-0 left-0 right-0 z-50">
      <div className="logo text-white font-bold text-2xl">SEMPU I</div>
      <div className="flex flex-row gap-3">
        <div className="flex justify-center items-center">
          {navigation.map((item, index) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={`${
                hoveredLink === index ? "text-white" : "text-gray-300"
              } hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-colors duration-500`}
              onMouseEnter={() => handleLinkHover(index)}
              onMouseLeave={handleLinkLeave}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <UserIcon className="h-5 w-5 text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
