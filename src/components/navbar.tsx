import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../components/cartContext";
import SideCart from "../components/sideCart";

const Nav: React.FC = () => {
  const { cartQuantity } = useShoppingCart(); // Access cartQuantity from context
  const [openProfile, setOpenProfile] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [localCartQuantity, setLocalCartQuantity] = useState(cartQuantity); // Local state for cart quantity

  // Logout function
  const Logout = async () => {
    try {
      const response = await fetch("http://localhost:6969/user/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("userToken")}`, // Ensure the token key matches
        },
      });

      if (response.ok) {
        localStorage.removeItem("userToken"); // Remove token from local storage
        window.location.href = "/"; // Redirect to home page
      } else {
        console.error("Failed to log out");
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Toggle cart visibility
  const handleShowCart = () => {
    setShowCart((prevState) => !prevState);
  };

  // Toggle profile dropdown visibility
  const toggleProfile = () => {
    setOpenProfile((prevState) => !prevState);
  };

  // Update local cart quantity from local storage
  useEffect(() => {
    const updateCartQuantity = () => {
      const cartItems =
        JSON.parse(localStorage.getItem("cart") as string) || [];
      const totalQuantity = cartItems.reduce(
        (quantity: number, item: { quantity: number }) =>
          quantity + item.quantity,
        0
      );
      setLocalCartQuantity(totalQuantity);
    };

    // Initial load
    updateCartQuantity();

    // Add event listener for storage changes
    window.addEventListener("storage", updateCartQuantity);

    return () => {
      window.removeEventListener("storage", updateCartQuantity);
    };
  }, []);

  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-8 flex items-center justify-between">
        {/* Hidden on small screens */}
        <div className="hidden md:block"></div>

        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/">
            <h1 className="text-3xl cursor-pointer">LOGO</h1>
          </a>
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
              alt="search"
            />
          </div>
        </div>

        {/* Buttons - Hidden on small screens */}
        <nav className="hidden lg:flex-shrink-0 lg:block">
          <div className="flex items-center">
            <div className="ml-4">
              <a href="/">
                <img
                  src="/heart.png"
                  className="w-[25px] h-[25px]"
                  alt="heart"
                />
              </a>
            </div>

            <button className="relative ml-4" onClick={handleShowCart}>
              <img
                src="/cart_black.png"
                className="w-[25px] h-[25px]"
                alt="cart"
              />
              <h1 className="absolute top-5 right-3 bg-red-500 text-white text-sm w-5 h-5 flex items-center justify-center rounded-full">
                {localCartQuantity}
              </h1>
            </button>
          </div>
        </nav>

        {/* Profile Icon - visible on all screens */}
        <div className="relative">
          <button onClick={toggleProfile}>
            <img
              src="/profile-user.png"
              className="w-[25px] h-[25px] ml-4 mt-2 text-gray-500"
              alt="profile"
            />
          </button>

          {showCart && <SideCart />}

          {openProfile && (
            <div className="absolute right-0 mt-4 w-48 bg-white rounded-md shadow-lg py-2 z-20 border border-black/5">
              <div>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  My Orders
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  My Cart
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Notifications
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  onClick={Logout}
                >
                  Logout
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Nav;
