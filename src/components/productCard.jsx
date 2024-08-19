import React, { useState } from "react";

const ProductCard = () => {
  const [cart, setCart] = useState({});

  const addCartHandler = (index) => {
    setCart((prevCart) => ({
      ...prevCart,
      [index]: prevCart[index] ? prevCart[index] + 1 : 1,
    }));
  };

  const incrementHandler = (index) => {
    setCart((prevCart) => ({
      ...prevCart,
      [index]: prevCart[index] + 1,
    }));
  };

  const decrementHandler = (index) => {
    setCart((prevCart) => ({
      ...prevCart,
      [index]: prevCart[index] > 1 ? prevCart[index] - 1 : 1,
    }));
  };

  const products = [
    {
      id: 0,
      imageSrc: "/image.png",
      title: "Sara Vedi Super 2500 - Red",
      price: 449,
      oldPrice: 699,
      rating: 5,
      discount: "39% OFF",
    },
    {
      id: 1,
      imageSrc: "/image.png",
      title: "Sara Vedi Super 2000 - Blue",
      price: 399,
      oldPrice: 599,
      rating: 3,
      discount: "20% OFF",
    },
    {
      id: 2,
      imageSrc: "/image.png",
      title: "Sara Vedi Super 1500 - Green",
      price: 299,
      oldPrice: 499,
      rating: 4,
      discount: "15% OFF",
    },
    {
      id: 3,
      imageSrc: "/image.png",
      title: "Sara Vedi Super 1500 - Green",
      price: 299,
      oldPrice: 499,
      rating: 2,
      discount: "15% OFF",
    },
  ];

  return (
    <div className="grid gap-6 px-6 py-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {products.map((product, index) => (
        <div
          key={index}
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
            />
            {product.discount && (
              <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                {product.discount}
              </span>
            )}
          </a>
          <div className="mt-4 px-5 pb-5">
            <a href="#">
              <h5 className="text-xl tracking-tight text-slate-900">
                {product.title}
              </h5>
            </a>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900">
                  ${product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-sm text-slate-900 line-through">
                    ${product.oldPrice}
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
            {cart[index] ? (
              <div className="flex items-center justify-center space-x-2">
                <button
                  onClick={() => decrementHandler(index)}
                  className="px-3 py-2 bg-slate-900 text-white rounded-md hover:bg-gray-700"
                >
                  -
                </button>
                <input
                  type="text"
                  readOnly
                  value={cart[index]}
                  className="w-12 text-center border rounded-md"
                />
                <button
                  onClick={() => incrementHandler(index)}
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
                  addCartHandler(index);
                }}
                className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <img src="/cart.png" className="mr-2 h-6 w-6" />
                Add to cart
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
