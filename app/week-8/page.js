/**
Louielyn Mata - CRPG 306-B WEBDEV2
Assignment Week 8
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
  function handleItemSelect(item) {
    if (!item) {
      setSelectedItemName("");
      return;
    }
    // 1-Clean selected item name
    const withoutComma = item.name.split(",")[0];

    // 2- remove extra spaces
    const trimmed = withoutComma.trim();

    // 3 - remove emoji characters
    const cleaned = trimmed.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ""
    );
    // 4 - final trim and clean + lowercase for MealDB
    setSelectedItemName(cleaned.trim().toLowerCase());
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

      <div className="mx-10 grid grid-cols-1 items-start gap-5 md:grid-cols-[320px_minmax(640px,1fr)_320px]">
        <section
          className={`${whiteContainer} sticky top-0 mt-5 max-h-screen overflow-y-auto text-slate-600 md:col-span-1 md:w-full dark:text-slate-300`}
        >
          <NewItem onAddItem={handleAddItem} />
        </section>

        <section className={`${darkContainer} mt-5 min-w-0`}>
          {/* Render the ItemList component with itemsArray as props */}
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </section>

        <section
          className={`${darkContainer} mt-5 md:col-span-1 md:w-full md:max-w-max`}
        >
          <MealIdeas ingredient={selectedItemName} />
        </section>
      </div>
    </main>
  );
}
