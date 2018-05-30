import React from 'react';

const FilterableProductTable = ({ category }) => (
  <tr>
    <th colSpan="2">
      {category}
    </th>
  </tr>
);

export default FilterableProductTable;