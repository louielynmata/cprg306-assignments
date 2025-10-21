import Item from "./item.js";
/**
 * Renders a list of grocery items using the Item component.
 * Each item has a list. The list are stored in the array, and they are rendered through a map to the array.
 * @returns {JSX.Element} An article element containing a list of Item components, each representing a grocery item.
 */
export default function ItemList({ items, sortBy }) {
  const boxContainer = "flex flex-col gap-3 w-full";

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

  const groupedItems = sortedItems.reduce((groups, item) => {
    // If the category doesn't exist yet, create it
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    // Add item to the category group it belongs
    groups[item.category].push(item);
    return groups;
  }, {});

  return sortBy === "group" ? (
    <div className={boxContainer}>
      {Object.entries(groupedItems).map(([category, itemsInCategory]) => (
        <div key={category}>
          <h2 className="mt-4 mb-2 text-lg font-semibold capitalize">
            {category}
          </h2>
          <ul className={boxContainer}>
            {/* Render the items in the current category */}
            {itemsInCategory.map((item) => (
              <Item key={item.name} {...item} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  ) : (
    <ul className={boxContainer}>
      {/* Render the items in the current category */}
      {sortedItems.map((item) => (
        <Item key={item.name} {...item} />
      ))}
    </ul>
  );
}
