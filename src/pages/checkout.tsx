import React, { useEffect, useState } from "react";
import { itemCard } from "../data/items";
import { useShoppingCart } from "../components/cartContext";
import TotalCartCheckout from "../components/totalcart";

interface CartItem {
  id: string;
  imageSrc: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

const Checkout = () => {
  const [getCart, setGetCart] = useState<CartItem[]>([]);
  const { increaseCartQuantity, decreaseCartQuantity, getItemQuantity } =
    useShoppingCart();
  
  const [pincode, setPincode] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [district, setDistrict] = useState<string>("");

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart") as string) || [];
    setGetCart(items);
  }, []);

  const handlePincodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPincode(e.target.value);
  };

  const handlePincodeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (pincode.length === 6) {
        fetch(`https://api.postalpincode.in/pincode/${pincode}`)
          .then(response => response.json())
          .then(data => {
            if (data[0].Status === "Success") {
              const { State, District } = data[0].PostOffice[0];
              setState(State);
              setDistrict(District);
              console.log(state)
              console.log(district)
              // console.log(PostOffice)
            } else {
              setState("");
              setDistrict("");
            }
          })
          .catch(() => {
            setState("");
            setDistrict("");
          });
      } else {
        setState("");
        setDistrict("");
      }
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Checkout</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Details */}
          <div className="flex-1">
            {getCart.length > 0 ? (
              getCart.map((item) => {
                //@ts-ignore
                const product = itemCard.find((p) => p.id === item.id);
                if (!product) return null;

                return (
                  <li
                    key={item.id}
                    className="flex items-center justify-between border-b border-gray-200 py-4"
                  >
                    <div className="flex items-center">
                      <img
                        src={product.imageSrc}
                        alt={product.title}
                        className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium">{product.title}</h3>
                        <p className="text-gray-600">₹{product.price}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      {getItemQuantity(product.id) > 0 ? (
                        <div className="flex items-center">
                          <button
                            onClick={() => decreaseCartQuantity(product.id)}
                            className="px-3 py-2 mr-2 bg-slate-900 text-white rounded-md hover:bg-gray-700"
                          >
                            -
                          </button>
                          <input
                            type="text"
                            readOnly
                            value={getItemQuantity(product.id)}
                            className="w-12 text-center border rounded-md"
                          />
                          <button
                            onClick={() => increaseCartQuantity(product.id)}
                            className="flex gap-2 px-3 py-2 ml-2 bg-slate-900 text-white rounded-md hover:bg-gray-700"
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => increaseCartQuantity(product.id)}
                          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </li>
                );
              })
            ) : (
              <h1 className="text-2xl font-bold mb-6">No items in the cart</h1>
            )}
          </div>

          {/* Payment Details */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <TotalCartCheckout />
            </div>
            <br />
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-xl font-medium">Payment Details</p>
              <p className="text-gray-400">
                Complete your order by providing your payment details.
              </p>
              <label className="mt-4 mb-2 block text-sm font-medium">
                Contact Details
              </label>
              <div className="flex gap-4">
                <div className="relative w-7/12 flex-shrink-0">
                  <input
                    type="text"
                    id="email"
                    name="Email"
                    className="w-full rounded-md border border-gray-200 px-3 py-5 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="your_email@gmail.com"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      className="h-4 w-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                      <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                    </svg>
                  </div>
                </div>
                <input
                  type="text"
                  name="phone"
                  className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="+91 9545940578"
                />
              </div>

              <label className="mt-4 mb-2 block text-sm font-medium">
                Full Name
              </label>
              <div className="relative mb-4">
                <input
                  type="text"
                  id="card-holder"
                  name="card-holder"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your full name here"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                    />
                  </svg>
                </div>
              </div>

              <label className="mt-4 mb-2 block text-sm font-medium">
                Delivery Address
              </label>
              <textarea
                id="billing-address"
                name="billing-address"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Billing address"
                rows={3}
              />

              <label className="mt-4 mb-2 block text-sm font-medium">
                State, District, and Pincode
              </label>
              <div className="flex flex-row gap-4">
                <input
                  type="text"
                  name="state"
                  value={state}
                  className="w-1/3 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="State"
                  disabled={!pincode}
                />
                <input
                  type="text"
                  name="district"
                  value={district}
                  className="w-1/3 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="District"
                  disabled={!pincode}
                />
                <input
                  type="text"
                  name="pincode"
                  value={pincode}
                  onChange={handlePincodeChange}
                  onKeyDown={handlePincodeKeyDown}
                  className="w-1/3 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Pincode"
                />
              </div>
              <button className="mt-4 mb-8 w-full rounded-md bg-slate-900 px-6 py-3 font-medium text-white">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
