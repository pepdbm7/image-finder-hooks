import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import ImagesList from "./components/ImagesList";

function App() {
  //state:
  const [search, saveSearch] = useState("");
  const [images, saveImages] = useState([]);
  const [currentPage, saveCurrentPage] = useState(1);
  const [totalPages, saveTotalPages] = useState(1);

  //lifeCycle:
  useEffect(() => {
    const consumeApi = async () => {
      if (search === "") return;

      const imagesPerPage = 30;
      const key = "10453811-93830909066c7c8114dfa250a";
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}&page=${currentPage}`;

      const response = await fetch(url);
      const result = await response.json();

      saveImages(result.hits);

      //calculate the total number of pages and save it into our kinda "local state":
      const totalPages = Math.ceil(result.totalHits / imagesPerPage);
      saveTotalPages(totalPages);

      //move to top of page:
      const form = document.querySelector("form");
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    consumeApi();
  }, [currentPage, search]);

  //pagination:
  const previousPage = () => {
    let newPreviousPage = currentPage - 1;

    saveCurrentPage(newPreviousPage);
  };

  const nextPage = () => {
    let newPreviousPage = currentPage + 1;

    saveCurrentPage(newPreviousPage);
  };

  return (
    <div className="app">
      <div className="jumbotron">
        <h1 className="title mx-auto">Pinterhooks</h1>
      </div>
      <SearchForm saveSearch={saveSearch} />

      <div className="galery row justify-content-center">
        <ImagesList images={images} />

        {currentPage === 1 ? null : (
          <button
            onClick={previousPage}
            type="button"
            className="btn btn-info mr-1 my-3"
          >
            &laquo; Previous
          </button>
        )}
        {currentPage === totalPages ? null : (
          <button
            onClick={nextPage}
            type="button"
            className="btn btn-info mr-1 my-3"
          >
            Next &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
