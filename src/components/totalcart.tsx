import React, { useEffect, useState } from "react";
import { itemCard } from "../data/items";
import { useShoppingCart } from "./cartContext";

interface CartItem {
  id: string;
  imageSrc: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

const TotalCartCheckout: React.FC = () => {
  const [getCart, setGetCart] = useState<CartItem[]>([]);

  const { getItemQuantity } = useShoppingCart();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart") as string) || [];
    setGetCart(items);
  }, []);

  const subtotal = getCart.reduce((total, item) => {
    //@ts-ignore
    const product = itemCard.find((p) => p.id === item.id);
    return total + (product?.price || 0) * item.quantity;
  }, 0);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Subtotal</h3>
        <p className="text-gray-600">₹{subtotal}</p>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Shipping</h3>
        <p className="text-gray-600">₹5.00</p>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium text-red-500">Total</h3>
        <p className=" text-red-500 text-xl">₹{subtotal + 5}</p>
      </div>
    </div>
  );
};

export default TotalCartCheckout;
