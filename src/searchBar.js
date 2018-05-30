import React from 'react';

const SearchBar = ({ products, filterText, inStockOnly }) => (
  <form>
    <input
      type="text"
      placeholder="Search..."
      value={filterText}
    />
    <p>
      <input
        type="checkbox"
        checked={inStockOnly}
      />
      {' '}
      Only show products in stock
    </p>
  </form>
);

export default SearchBar;