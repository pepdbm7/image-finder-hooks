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
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="searchInput"
          placeholder="Write something..."
          onChange={e => saveQuery(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Search
      </button>
      {error ? <Error message="Add query to search" /> : null}
    </form>
  );
};

export default SearchForm;
