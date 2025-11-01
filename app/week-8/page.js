/**
Louielyn Mata - CRPG 306-B WEBDEV2
Assignment Week 7
*/
"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "../components/NewItem";
import MealIdeas from "./MealIdeas";
import {
  pageContainer,
  h1Styling,
  darkContainer,
  whiteContainer,
} from "../styles";
import itemsData from "./items.json";

/**
 * Renders the main page for the shopping list application.
 * Displays a styled header and a section containing the ItemList component.
 *
 * @returns {JSX.Element} The main page component.
 */
export default function Page() {
  // Prepare items array from imported JSON data
  const itemsArray = itemsData;
  // State with data from itemsData JSON file
  const [items, setItems] = useState(itemsArray);
  // State for selected items
  const [selectedItemName, setSelectedItemName] = useState(null);

  // Function to add new item to the list
  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  // Function to handle item selection
  function handleItemSelect(itemName) {
    setSelectedItemName(itemName);
  }

  // Render JSX
  return (
    <main className={pageContainer}>
      <header>
        <h1
          className={`${h1Styling} align-start w-full text-sky-900 sm:p-2 dark:text-sky-200`}
        >
          Shopping List - Week 7
        </h1>
      </header>

      <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-4">
        <section
          className={`${whiteContainer} sticky top-0 mt-5 max-h-screen overflow-y-auto text-slate-600 md:col-span-1 md:w-full dark:text-slate-300`}
        >
          <NewItem onAddItem={handleAddItem} />
        </section>

        <section className={`${darkContainer} mt-5 md:col-span-2 md:w-full`}>
          {/* Render the ItemList component with itemsArray as props */}
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </section>

        <section>
          <MealIdeas ingredient={selectedItemName} />
        </section>
      </div>
    </main>
  );
}
