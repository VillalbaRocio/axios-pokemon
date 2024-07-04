import { useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [listaPokemon, setlistaPokemon] = useState([]);

      const cargarPokemon = async () => {
        const URL = "https://pokeapi.co/api/v2/pokemon/?limit=807";
  
        try{
          const respuesta = await axios.get(URL);
          setlistaPokemon(respuesta.data.results);
        }
        catch(error){
          console.log("Ocurrió un error", error);
        }
      }
  
  return (
    <div className="App">
      <div className="contenedor-pokemon">
        <button className="btn" onClick={cargarPokemon}>Fetch Pokemon</button>
        <ul>
          {listaPokemon.map((pokemon, index) => (
            <li key={index}>{pokemon.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
