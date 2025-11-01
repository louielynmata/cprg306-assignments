"use client";
import { useState } from "react";
import Item from "./item.js";
import SortButtons from "../components/SortButtons.js";

/**
 * Renders a list of grocery items using the Item component.
 * Each item has a list. The list are stored in the array, and they are rendered through a map to the array.
 * @returns {JSX.Element} An article element containing a list of Item components, each representing a grocery item.
 */
export default function ItemList({ items, onItemSelect }) {
  const boxContainer = "flex flex-col gap-3 w-full ";

  // State for sorting
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "category" || sortBy === "group") {
      return a.category.localeCompare(b.category);
    } else {
      return a.quantity - b.quantity;
    }
  });

  // Group items by category if sortBy is "group"
  const groupedItems = sortedItems.reduce((groups, item) => {
    // If the category doesn't exist yet, create it
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    // Add item to the category group it belongs
    groups[item.category].push(item);
    return groups;
  }, {});

  // Get sorted categories
  const sortedCategories = Object.keys(groupedItems).sort();

  // Render JSX
  return (
    <section className="w-full">
      {/* Sort Buttons Component */}
      <SortButtons sortBy={sortBy} setSortBy={setSortBy} />

      {/* Section for Item List */}
      {sortBy === "group" ? (
        <div className={boxContainer}>
          {sortedCategories.map((category) => {
            // Get items in the current category
            const itemsInCategory = groupedItems[category]
              .slice() // Create a shallow copy to avoid mutating original array
              .sort((a, b) => a.name.localeCompare(b.name)); // Sort items by name

            // Render category section
            return (
              <div key={category}>
                <h2 className="mt-4 mb-2 text-lg font-semibold capitalize">
                  {category}
                </h2>
                <ul className={boxContainer}>
                  {itemsInCategory.map((item) => (
                    <Item
                      key={item.id}
                      {...item}
                      onSelect={() => onItemSelect(item)} // Pass item to onSelect
                    />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      ) : (
        // If not grouping, just render sorted items
        <ul className={boxContainer}>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              {...item}
              onSelect={() => onItemSelect(item)} // Pass item to onSelect
            />
          ))}
        </ul>
      )}
    </section>
  );
}
