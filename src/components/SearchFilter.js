import React, { useState } from "react";

const SearchFilter = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-filter">
      <input type="text" placeholder="Search profiles..." value={query} onChange={handleChange} />
    </div>
  );
};

export default SearchFilter;
