import React, { useState } from "react";
import Error from "./Error";

const SearchForm = ({ saveSearch }) => {
  const [query, saveQuery] = useState("");
  const [error, saveError] = useState(false);

  const searchImage = e => {
    e.preventDefault();

    if (query === "") {
      saveError(true);
      return;
    }

    saveError(false);
    saveSearch(query);
  };

  return (
    <form onSubmit={searchImage}>
      <div className="container">
        <input
          type="text"
          className="form-control my-3"
          id="searchInput"
          placeholder="Write here which pictures you want..."
          onChange={e => saveQuery(e.target.value)}
        />

        <button type="submit" className="btn searchButton text-white">
          Search
        </button>

        {error ? <Error message="Add query to search" /> : null}
      </div>
    </form>
  );
};

export default SearchForm;
