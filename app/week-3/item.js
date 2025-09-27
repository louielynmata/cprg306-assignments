import PropTypes from "prop-types";

export default function Item({
  name = "Item Name",
  quantity = 0,
  category = "Uncategorized",
}) {
  // Constants for Page
  const itemListStyle = "border w-full border-white p-5 rounded-md gap-2";
  return (
    <ul className={itemListStyle}>
      <li>name: {name}</li>
      <li>quantity: {quantity}</li>
      <li>category: {category}</li>
    </ul>
  );
}

// Linter requirement
Item.propTypes = {
  name: PropTypes.string,
  quantity: PropTypes.number,
  category: PropTypes.string,
};
