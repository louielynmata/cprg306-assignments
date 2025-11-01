import PropTypes from "prop-types";
import { itemListStyle, itemListStyleButton } from "../styles";

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
  onSelect,
}) {
  // Render JSX return (
  return (
    <li
      className={`${itemListStyle} ${onSelect ? `cursor-pointer ${itemListStyleButton}` : ""}`}
      onClick={onSelect ? () => onSelect() : null}
    >
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
  onSelect: PropTypes.func,
};
