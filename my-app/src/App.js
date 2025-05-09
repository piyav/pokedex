import logo from './logo.svg';
import './App.css';
import { React, useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch]=useState("");
  const [ pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search) return;

    try{
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
      if (!res.ok) throw new Error("Pokemon not found");

      const data = await res.json();
      setPokemon(data);
      setError("");
    }
    catch(err){
      setPokemon(null);
      setError("Pokemon not found. Try again!");
    }
   };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          PokeDex
        </p>
        <form onSubmit={handleSearch}>
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
        {error && <p style={{ color: "red" }}>{error}</p>}
        {pokemon && (
          <div style = {{marginTop: "20px", backgroundColor: "#fff", padding: "20px", borderRadius: "10px", color: "#000" }}>
            <h2>{pokemon.name.toUpperCase()}</h2>
            <p>Type: {pokemon.types.map(t => t.type.name).join(', ')}</p>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            </div>
        )}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          pokedex
        </a>
      </header>
      </div>
      );
    }

export default App;

