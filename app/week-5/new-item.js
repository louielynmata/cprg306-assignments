"use client";
import { useState } from "react";
import { whiteContainer, Button } from "../styles";

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

      <div className="flex flex-row gap-4 my-4 w-full justify-items-start">
        <button
          onClick={decrement}
          className={`${Button} text-gray-900 bg-blue-300 hover:bg-blue-400 disabled:bg-gray-200 disabled:text-gray-400`}
          disabled={quantity <= 1}
        >
          -
        </button>

        <button
          onClick={increment}
          className={`${Button} bg-blue-700  hover:bg-blue-500 disabled:bg-blue-200 disabled:text-blue-400`}
          disabled={quantity >= 20}
        >
          +
        </button>
      </div>
      <p className="text-gray-500 text-sm">Allowed Range: 1-20</p>
    </section>
  );
}
