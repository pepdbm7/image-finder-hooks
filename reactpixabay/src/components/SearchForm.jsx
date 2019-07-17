import React, { useState } from "react";

const SearchForm = () => {
  const [query, saveQuery] = useState("");
  const [error, saveError] = useState(false);

  const searchImage = e => {
    e.preventDefault();

    if (!query.trim()) {
      saveError(true);
      return;
    }

    saveError(false);
  };

  return (
    <form onSubmit={searchImage}>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="searchInput"
          placeholder="Write something..."
          onChange={e => saveQuery(e.target.value)}
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
