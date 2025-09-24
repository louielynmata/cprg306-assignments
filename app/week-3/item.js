import PropTypes from "prop-types";

export default function Item({
  name = "Item Name",
  quantity = 0,
  category = "Uncategorized",
}) {
  return (
    <ul>
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
