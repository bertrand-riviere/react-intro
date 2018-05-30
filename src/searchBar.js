import React from 'react';

const FilterableProductTable = ({ products }) => (
  <form>
    <input type="text" placeholder="Search..." />
    <p>
      <input type="checkbox" />
      {' '}
      Only show products in stock
    </p>
  </form>
);

export default FilterableProductTable;