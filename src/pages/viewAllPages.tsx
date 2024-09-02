import React, { useState, useEffect } from "react";
import { useShoppingCart } from "../components/cartContext";
import { itemCard } from "../data/items";

const ViewAllPages: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const { increaseCartQuantity, decreaseCartQuantity, getItemQuantity, cartItems } = useShoppingCart();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    console.log("Cart updated:", cartItems);
  }, [cartItems]);

  const handleFilterChange = (filter: string) => {
    setSelectedFilters((prevFilters) =>
      //@ts-ignore
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  const filteredItems = itemCard.filter((product) =>
    //@ts-ignore
    selectedFilters.length === 0 ? true : selectedFilters.includes(product.category)
  );

  return (
    <div className="flex flex-col mt-10 ml-10 md:flex-row">
      {/* Filter Section */}
      <div className="w-full md:w-1/4 h-64 p-6 bg-white border-b md:border-r md:border-b-0 border-gray-300 md:sticky md:top-0">
        <h3 className="text-xl font-bold mb-4">Filters</h3>
        <div className="flex flex-col gap-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              value="day cracker"
              onChange={() => handleFilterChange("day cracker")}
              className="mr-2"
            />
            Day Crackers
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="night cracker"
              onChange={() => handleFilterChange("night cracker")}
              className="mr-2"
            />
            Night Crackers
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="gift box"
              onChange={() => handleFilterChange("gift box")}
              className="mr-2"
            />
            Gift Boxes
          </label>
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="w-full md:w-3/4 p-6 overflow-y-auto h-[calc(100vh-64px)]">
        <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {filteredItems.map((product) => (
            <div
              key={product.id}
              className="relative flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
            >
              <a
                className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                href="#"
              >
                <img
                  className="object-cover"
                  src={product.imageSrc}
                  alt="product image"
                  width="353px"
                  height="240"
                />
                {product.discount && (
                  <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    {product.discount}
                  </span>
                )}
              </a>
              <div className="mt-4 px-5 pb-5">
                <a href="/">
                  <h5 className="text-xl tracking-tight text-slate-900">
                    {product.title}
                    <span className="text-red-500 ml-2">
                      ({product.packCount})pcs/bag
                    </span>
                  </h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span className="text-3xl font-bold text-slate-900">
                      ₹ {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-slate-900 line-through">
                        ₹ {product.oldPrice}
                      </span>
                    )}
                  </p>
                  <div className="flex items-center">
                    {Array.from({ length: product.rating }, (_, index) => (
                      <img src="/star.png" className="h-4 w-4" key={index} />
                    ))}
                    <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                      {product.rating}.0
                    </span>
                  </div>
                </div>
                {getItemQuantity(product.id) > 0 ? (
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      onClick={() => {
                        decreaseCartQuantity(product.id);
                        console.log(`Decreased quantity of product ${product.id}`);
                      }}
                      className="px-3 py-2 bg-slate-900 text-white rounded-md hover:bg-gray-700"
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
                      onClick={() => {
                        increaseCartQuantity(product.id);
                        console.log(`Increased quantity of product ${product.id}`);
                      }}
                      className="px-3 py-2 bg-slate-900 text-white rounded-md hover:bg-gray-700"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      increaseCartQuantity(product.id);
                      console.log(`Added product ${product.id} to cart`);
                    }}
                    className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <img src="/cart.png" className="mr-2 h-6 w-6" alt="cart" />
                    Add to cart
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewAllPages;
