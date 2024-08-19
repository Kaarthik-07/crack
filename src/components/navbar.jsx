import React, { useState } from "react";

const Nav = () => {
  const [openProfile, setOpenProfile] = useState(false);

  const toggleProfile = () => {
    setOpenProfile(!openProfile);
  };

  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-8 flex items-center justify-between">
        {/* Hidden on small screens */}
        <div className="hidden md:block"></div>

        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-3xl">LOGO</h1>
        </div>

        <div className="flex-grow mx-4 flex justify-center">
          <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md flex items-center">
            <input
              className="flex-grow p-4 border-l border-gray-300 bg-transparent font-semibold text-sm pl-4"
              type="text"
              placeholder="I'm searching for ..."
            />
            <img
              src="/search.png"
              className="mr-2 w-[30px] h-[30px] cursor-pointer"
            />
          </div>
        </div>

        {/* Buttons - Hidden on small screens */}
        <nav className="hidden lg:flex-shrink-0 lg:block">
          <ul className="flex items-center">
            <li className="ml-4">
              <a href="/">
                <img
                  src="/heart.png"
                  className="w-[25px] h-[25px]"
                  alt="heart"
                />
              </a>
            </li>

            <li className="relative ml-4">
              <img
                src="/cart_black.png"
                className="w-[25px] h-[25px]"
                alt="cart"
              />
              <span className="absolute top-5 right-3 bg-red-500 text-white text-sm w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </li>
          </ul>
        </nav>

        {/* Profile Icon - visible on all screens */}
        <div className="relative">
          <button onClick={toggleProfile}>
            <img
              src="/profile-user.png"
              className="w-[25px] h-[25px] ml-4 mt-2 text-gray-500"
            />
          </button>

          {openProfile && (
            <ul className="absolute right-0 mt-4 w-48 bg-white rounded-md shadow-lg py-2 z-20 border border-black/5">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  My Orders
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  My Cart
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Notifications
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Logout
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Nav;
