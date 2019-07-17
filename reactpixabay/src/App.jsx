import React from "react";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="app">
      <div className="jumbotron">
        <h1 className="display-3">Pinterhooks</h1>
        <p className="lead">Find any picture</p>
        <hr className="my-2" />
        <SearchForm />
      </div>
    </div>
  );
}

export default App;
