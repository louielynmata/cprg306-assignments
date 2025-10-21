import PropTypes from "prop-types";

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
  // Render JSX
  return (
    <li className={itemListStyle}>
      <p>{name}</p>
      <p>Quantity: {quantity}</p>
      <p className="capitalize">Category: {category}</p>
    </li>
  );
}

// Prop Types for Linter requirement
Item.propTypes = {
  name: PropTypes.string,
  quantity: PropTypes.number,
  category: PropTypes.string,
};
