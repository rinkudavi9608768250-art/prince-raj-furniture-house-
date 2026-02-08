import React from "react";

const SearchFilterBar = ({ searchTerm, onSearchChange, filterValue, onFilterChange, filterOptions }) => (
  <div className="search-filter">
    <input
      type="text"
      placeholder="Search destinations or packages"
      value={searchTerm}
      onChange={(event) => onSearchChange(event.target.value)}
    />
    <select value={filterValue} onChange={(event) => onFilterChange(event.target.value)}>
      {filterOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default SearchFilterBar;
