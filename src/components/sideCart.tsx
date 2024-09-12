import React, { useEffect, useState } from "react";
import { itemCard } from "../data/items";
import { useShoppingCart } from "../components/cartContext";
import { useNavigate } from "react-router-dom";

export function SideCart() {
  const navigate = useNavigate();
  const { removeFromCart, closeCart } = useShoppingCart();
  //@ts-ignore
  const [getcart, setGetCart] = useState<CartItem[]>([]);
  const [closeSideCart, setCloseSideCart] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart") as string) || [];
    setGetCart(items);
  }, []);
  5656;

  // Calculate subtotal
  const subtotal = getcart.reduce((total, item) => {
    const product = itemCard.find((product) => product.id === item.id);
    return total + (product?.price || 0) * item.quantity;
  }, 0);

  const handleRemoveFromCart = (id: number) => {
    const newCart = getcart.filter((item) => item.id !== id);
    setGetCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    removeFromCart(id); // Update cart context
  };

  const handleCloseCart = () => {
    setCloseSideCart((prevState) => !prevState);
    if (closeSideCart) {
      closeCart(); // Assuming closeCart function is available from context
    }
  };
  const checkToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }

  return (
    <div
      className={`relative z-10 ${closeSideCart ? "hidden" : ""}`}
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-lg font-medium text-gray-900"
                      id="slide-over-title"
                    >
                      Shopping cart
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        onClick={handleCloseCart} // Call handleCloseCart to close the cart
                      >
                        <span className="sr-only">Close panel</span>
                        <img src="/close.png" alt="close" className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <ul role="list" className="divide-y divide-gray-200">
                    {getcart.map((item) => {
                      const product = itemCard.find((p) => p.id === item.id);
                      if (!product) return null;
                      return (
                        <li key={item.id} className="flex py-6">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src={product.imageSrc}
                              alt={product.title}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>

                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <a href="#">{product.title}</a>
                                </h3>
                                <p className="ml-4">₹ {product.price}</p>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">
                                {product.discount}
                              </p>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <p className="text-gray-500">
                                Qty {item.quantity}
                              </p>
                              <div className="flex">
                                <button
                                  type="button"
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                  onClick={() => handleRemoveFromCart(item.id)} // Call handleRemoveFromCart
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>₹{subtotal.toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <a
                      href="/checkout"
                      className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-2xl font-medium text-white shadow-sm hover:bg-indigo-700"
                      onClick={checkToken}
                    >
                      Checkout
                    </a>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{" "}
                      <button
                        type="button"
                        className="text-black hover:text-gray-900"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideCart;
