"use client";
import { useState } from "react";
import { buttonStyling, labelText, inputStyling, formField } from "../styles";

/**
 * NewItem component for adding a new item.
 */
export default function NewItem({ onAddItem }) {
  // Constants
  const PLACEHOLDER_TEXT = "eg. milk, 4 L 🥛";

  // Use States
  const id = Math.floor(Math.random() * 1000); // Random ID for each item
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  //handleSubmit functions
  function handleSubmit(event) {
    event.preventDefault(); //Stop page reload
    //Create an item object with the current values of name, quantity, and category.
    const normalizedName = name.toLocaleLowerCase();
    const normalizedCategory = category.toLowerCase();
    const item = {
      id,
      name: normalizedName,
      quantity,
      category: normalizedCategory,
    };
    console.log("Item created:", item);
    // Send data to parent component
    onAddItem(item);
    // Reset state values
    resetStates();
  }

  // Reset states
  function resetStates() {
    setName("");
    setQuantity(1);
    setCategory("Produce");
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
    <form onSubmit={handleSubmit}>
      {/* Name Field */}
      <div className={`${formField} mt-2`}>
        <label className={labelText} htmlFor="name">
          Item Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder={PLACEHOLDER_TEXT}
          className={inputStyling}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>

      {/* Quantity Field */}
      <div className={formField}>
        <div className="flex items-center">
          <label className={labelText} htmlFor="item-quantity">
            Quantity:{" "}
          </label>
          <span className="font-bold text-sky-800">{quantity}</span>
        </div>
        <div className="my-4 flex w-full flex-row justify-items-start gap-4">
          <button
            type="button"
            onClick={decrement}
            className={`${buttonStyling} text-2xl text-gray-900 hover:bg-sky-400 disabled:bg-gray-200 disabled:text-gray-400 dark:bg-sky-300`}
            disabled={quantity <= 1}
          >
            -
          </button>
          <button
            type="button"
            onClick={increment}
            className={`${buttonStyling} bg-sky-700 text-sky-50 hover:bg-sky-500 disabled:bg-blue-200 disabled:text-blue-400`}
            disabled={quantity >= 20}
          >
            +
          </button>
        </div>
        <p className="text-sm text-gray-500">Allowed Range: 1-20 only</p>
      </div>

      {/* Category Field */}
      <div className={formField}>
        <label htmlFor="category" className={labelText}>
          Category
        </label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className={inputStyling}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <input
        type="submit"
        className={`${buttonStyling} mt-2 mb-5 cursor-pointer bg-violet-700 text-xl text-violet-50 hover:bg-violet-500`}
        value="Add Item"
      />
    </form>
  );
}
