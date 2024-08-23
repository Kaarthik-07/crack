import React, { useEffect } from "react";
import { useShoppingCart } from "../components/cartContext";
import { itemCard } from "../data/items";

interface Product {
  id: number;
  imageSrc: string;
  title: string;
  price: number;
  oldPrice?: number;
  rating: number;
  discount?: string;
}

const ProductCard: React.FC = () => {
  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    getItemQuantity,
    cartItems,
  } = useShoppingCart();

  // Update localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    console.log("Cart updated:", cartItems);
  }, [cartItems]);

  return (
    <div className="grid gap-6 px-6 py-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {itemCard.map((product) => (
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
            <a href="#">
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
  );
};

export default ProductCard;
