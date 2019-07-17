import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";

function App() {
  const [search, saveSearch] = useState("");

  useEffect(() => {
    const consumeApi = async () => {
      if (search === "") return;

      const imagesPerPage = 30;
      const key = "10453811-93830909066c7c8114dfa250a";
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}`;

      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
    };
    consumeApi();
  }, [search]);

  return (
    <div className="app">
      <div className="jumbotron bg-dark text-white">
        <h1 className="display-3">Pinterhooks</h1>
        <p className="lead">Find any picture</p>
        <hr className="my-2" />
        <SearchForm saveSearch={saveSearch} />
      </div>
    </div>
  );
}

export default App;
