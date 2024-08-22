import { useShoppingCart } from "./cartContext";
// import { proudctsCard } from "../data/items";
import { itemCard } from "../data/items";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function SideCartItems({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = itemCard.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={item.imageSrc}
          alt={item.title}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">{item.title}</a>
            </h3>
            <p className="ml-4">${item.price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{item.discount}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {quantity}</p>
          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
