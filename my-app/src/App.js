import logo from './logo.svg';
import pikachu from './pngimg.com - pokemon_PNG78.png';
import './App.css';
import { React, useState, useEffect } from "react";
import "./App.css";

function App() {
  const [search, setSearch]=useState("");
  const [ pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");
    const fetchRandomPokemon = async () => {
      const randId = Math.floor(Math.random() * 1000) + 1;
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randId}`);
        const data = await res.json();
        setPokemon(data);
        setError(""); 
      } catch (err) {
        console.error("Failed to get random Pokemon: ", err);
        setError("Could not fetch a random Pokémon. Try again!"); 
      }
    };
    useEffect(() => {
      fetchRandomPokemon(); 
    }, []);
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
        <img src={pikachu} className="rotating-pikachu" alt="Pikachu" />
        <p className="title">PokeDex</p>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search Pokemon..."
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
        <button
          onClick={fetchRandomPokemon}
          style={{
            marginTop: "10px",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Get Random Pokémon
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {pokemon && (
          <div style = {{marginTop: "20px", backgroundColor: "#fff", padding: "20px", borderRadius: "10px", color: "#000" }}>
            <h2>{pokemon.name.toUpperCase()}</h2>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              style={{ width: "150px", height: "150px" }}
             />
            <p>Type: {pokemon.types.map(t => t.type.name).join(', ')}</p>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            </div>
        )}
      </header>
      </div>
      );
    }

export default App;

