import Item from "./item.js";
/**
 * Renders a list of grocery items using the Item component.
 * Each item has a list. The list are stored in the array, and they are rendered through a map to the array.
 * @returns {JSX.Element} An article element containing a list of Item components, each representing a grocery item.
 */
export default function ItemList({ items, sortBy }) {
  const boxContainer = "flex flex-col gap-3 w-full";

  return (
    <ul className={boxContainer}>
      {/* Render the sorted items */}
      {items
        .sort((a, b) => {
          if (sortBy === "name") {
            return a.name.localeCompare(b.name);
          }
          if (sortBy === "category") {
            return a.category.localeCompare(b.category);
          } else {
            return a.quantity - b.quantity;
          }
        })
        .map((item) => (
          <Item key={item.name} {...item} />
        ))}
    </ul>
  );
}
