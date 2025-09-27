import PropTypes from "prop-types";

/**
 * Function to make variable into Pascal Case.
 * @param {*} str - Any string data type
 * @returns Pascal Case of string First letter uppercase.
 */
function toPascalCase(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

/**
 * Item component displays an item's name, quantity, and category.
 * @param {Object} param0 - Props for the component.
 * @param {string} param0.name - Name of the item.
 * @param {number} param0.quantity - Quantity of the item.
 * @param {string} param0.category - Category of the item.
 * @returns {JSX.Element} Rendered item component of each item List block.
 */
export default function Item({
  name = "Item Name",
  quantity = 0,
  category = "Uncategorized",
}) {
  // Constants for Page
  const itemListStyle = "border w-full border-white p-5 rounded-md gap-2";
  return (
    <ul className={itemListStyle}>
      <li>{name}</li>
      <li>Quantity: {quantity}</li>
      <li>Category: {toPascalCase(category)}</li>
    </ul>
  );
}

// Prop Types for Linter requirement
Item.propTypes = {
  name: PropTypes.string,
  quantity: PropTypes.number,
  category: PropTypes.string,
};
