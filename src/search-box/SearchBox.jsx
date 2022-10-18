import React from "react";

const SearchBox = (props) => {
  return (
    <div>
      <input
        className="search-box"
        type="search"
        placeholder={`Rechercher ${props.placeHolder}`}
        onChange={props.onSearchBoxChange}
      />
    </div>
  );
};

export default SearchBox;
