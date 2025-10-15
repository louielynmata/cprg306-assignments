"use client";
import { useState } from "react";
import { whiteContainer, button } from "../styles";

export default function NewItem() {
  // Use states
  const [quantity, setQuantity] = useState(1);

  function increment() {
    setQuantity(quantity < 20 ? quantity + 1 : quantity);
  }

  function decrement() {
    setQuantity(quantity > 1 ? quantity - 1 : quantity);
  }

  return (
    <section className={whiteContainer}>
      <h2 className="text-xl">
        <span className="text-gray-700">Quantity: </span>
        <span className="font-bold text-blue-800">{quantity}</span>
      </h2>

      <div className="my-4 flex w-full flex-row justify-items-start gap-4">
        <button
          onClick={decrement}
          className={`${button} bg-blue-300 text-gray-900 hover:bg-blue-400 disabled:bg-gray-200 disabled:text-gray-400`}
          disabled={quantity <= 1}
        >
          -
        </button>

        <button
          onClick={increment}
          className={`${button} bg-blue-700 hover:bg-blue-500 disabled:bg-blue-200 disabled:text-blue-400`}
          disabled={quantity >= 20}
        >
          +
        </button>
      </div>
      <p className="text-sm text-gray-500">Allowed Range: 1-20</p>
    </section>
  );
}
