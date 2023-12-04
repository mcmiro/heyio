import MobileMenu from "./MobileMenu";
import React, { useState } from "react";

export default function NavigationDark() {
  // State
  const [mobileMenu, setMobileMenu] = useState(false);

  const openMenu = () => {
    setMobileMenu(true);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <nav className="w-full flex justify-between items-center py-4 container mx-auto">
      {/* logo START */}
      <a href="/" className="text-5xl font-extrabold flex justify-start text-white">
        hey<span className="text-3xl">io</span>
        {/* heyio */}
      </a>
      {/* logo END */}
      {/* menu START */}
      <button
        onClick={openMenu}
        className="flex flex-col justify-between h-10 py-2.5 md:hover:py-3 transition-h ease-in-out duration-200"
      >
        <span className="w-14 h-1 rounded bg-white block"></span>
        <span className="w-14 h-1 rounded bg-white block"></span>
      </button>
      {/* menu END */}
      {/* mobile menu START */}
      <MobileMenu
        closeMenu={() => {
          closeMenu();
        }}
        openMobile={mobileMenu}
      />
      {/* mobile menu END */}
    </nav>
  );
}
