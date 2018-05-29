import React from 'react';

const SearchBox = ({ searchChange }) => (
  <div className="pa2">
    <input 
      className="pa3 ba b--green bg-lightest-blue" 
      type='search' 
      placeholder='search pokemon' 
      onChange={searchChange}
    />
    <select className="pa3 ba ba--green bg-blue">
      <option value="name">Pokemon Name</option>
      <option value="type">Pokemon Type</option>
    </select>
  </div>
);

export default SearchBox;