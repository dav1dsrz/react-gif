import PropTypes from "prop-types";
import { useState } from "react";

export const GifCategory = ({ setCategory, setLimit }) => {
  const [search_value, setSearchValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const category = search_value.trim();
    if (category.length > 0) {
      setCategory(category);
      setSearchValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar..."
        value={search_value}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <select onChange={(e) => setLimit(parseInt(e.target.value))}>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </form>
  );
};

GifCategory.propTypes = {
  setCategory: PropTypes.func.isRequired,
};
