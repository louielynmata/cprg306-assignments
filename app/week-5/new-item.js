"use client";
import { useState } from "react";
import { whiteContainer, Button } from "../styles";

export default function NewItem({ onDataSend }) {
  // Use States
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  //handleSubmit functions
  function handleSubmit(event) {
    event.preventDefault(); //Stop page reload
    //Create an item object with the current values of name, quantity, and category.
    const item = { name, quantity, category };
    console.log("Item created:", item);
    // Send data to parent component
    onDataSend(item);
    // Show alert with item details
    alertWithMessage(item);
    // Reset state values
    resetStates();
  }

  // Alert with messages
  function alertWithMessage(item) {
    alert(
      `Item name: ${item.name}, Quantity: ${item.quantity}, Category: ${item.category}`
    );
  }

  // Reset states
  function resetStates() {
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  // Quantity functions
  function increment() {
    setQuantity(quantity < 20 ? quantity + 1 : quantity);
  }

  function decrement() {
    setQuantity(quantity > 1 ? quantity - 1 : quantity);
  }

  // Returned and rendered JSX
  return (
    <section className={whiteContainer}>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <label htmlFor="item-name">Item Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          className="bg-amber-800"
          onChange={(event) => setName(event.target.value)}
          required
        />

        {/* Quantity Field */}
        <article>
          <label htmlFor="item-quantity" className="text-gray-700">
            Quantity:{" "}
          </label>
          <span className="font-bold text-blue-800">{quantity}</span>
          <div className="my-4 flex w-full flex-row justify-items-start gap-4">
            <button
              type="button"
              onClick={decrement}
              className={`${Button} bg-blue-300 text-gray-900 hover:bg-blue-400 disabled:bg-gray-200 disabled:text-gray-400`}
              disabled={quantity <= 1}
            >
              -
            </button>
            <button
              type="button"
              onClick={increment}
              className={`${Button} bg-blue-700 hover:bg-blue-500 disabled:bg-blue-200 disabled:text-blue-400`}
              disabled={quantity >= 20}
            >
              +
            </button>
          </div>
          <p className="text-sm text-gray-500">Allowed Range: 1-20</p>
        </article>

        {/* Category Field */}
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>

        <input type="submit" className="button" value="Add Item" />
      </form>
    </section>
  );
}
