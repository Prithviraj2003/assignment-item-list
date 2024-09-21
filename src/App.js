// src/App.js
import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ItemList from "./components/ItemList";
import AddItemForm from "./components/AddItemForm";

function App() {
  return (
    <div className="App container">
      <h1 className="my-4">Item List with Search</h1>
      <div className="my-4 d-flex flex-row text-center justify-content-evenly">
        <SearchBar />
        <AddItemForm />
      </div>
      <ItemList />
    </div>
  );
}

export default App;
