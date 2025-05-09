import logo from './logo.svg';
import './App.css';
import { React, useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch]=useState("");
  const makeSearch = (e) => {
    e.preventDefault();
    alert(`You searched for: ${search}`);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          PokeDex
        </p>
        <form onSubmit={makeSearch}>
          <input
            type="text"
            placeholder="Search Pokémon..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: "0.5rem", fontSize: "1rem", borderRadius: "5px" }}
          />
          <button
            type="submit"
            style={{
            marginLeft: "10px",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            borderRadius: "5px",
            cursor: "pointer"
            }}
          >
            Search
          </button>
        </form>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World
        </a>
      </header>
      </div>
      );
}

export default App;

