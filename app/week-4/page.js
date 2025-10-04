/*
Louielyn Mata - CRPG 306-B WEBDEV2
Assignment no. 3
*/
"use client";
import { useState } from "react";
import { pageContainerMed, h1Styling, whiteContainer, Button } from "../styles";
import NewItem from "./new-item";

export default function Page() {
  // Use states
  const [quantity, setQuantity] = useState(1);

  function increment() {
    setQuantity(quantity < 20 ? quantity + 1 : quantity);
    // Add conditional button "disabled" state
  }

  function decrement() {
    setQuantity(quantity > 1 ? quantity - 1 : quantity);
    // Add conditional button "disabled" state
  }

  return (
    <main className={pageContainerMed}>
      <header>
        <h1 className={`${h1Styling} w-full`}>Add New Item</h1>
      </header>

      <section className={whiteContainer}>
        <h2 className="text-xl">
          <span className="text-gray-700">Quantity: </span>
          <span className="font-bold text-blue-800">{quantity}</span>
        </h2>

        <div className="flex flex-row gap-4 my-4 w-full justify-items-start">
          <button
            onClick={decrement}
            className={`${Button} text-gray-900 bg-gray-300 hover:bg-gray-400`}
          >
            -
          </button>

          <button
            onClick={increment}
            className={`${Button} bg-blue-700  hover:bg-blue-500`}
          >
            +
          </button>
        </div>
        <p className="text-gray-500 text-sm">Allowed Range: 1-20</p>
      </section>
    </main>
  );
}
