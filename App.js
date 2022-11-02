import './App.css';
import {useState} from 'react';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([])

  // Vanilla JS Fetch --

  // const vanillaJSFetchPokemon = () => {
  //   fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
  //     .then((serverResponseObj) => {
  //       return serverResponseObj.json();
  //     })
  //     .then((actualServerResponseObj) => {
  //       // console.log(actualServerResponseObj.results);
  //       setPokemon(actualServerResponseObj.results)
  //     })
  //     .catch((serverErrorObj) => {
  //       console.log("*ERROR*", serverErrorObj);
  //     })
  // }

  
  // Axios GET --

  const axiosPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
    .then((responseFromServer) => {
      // Axios has its own storage for 'data', Pokemon API has its own storage for 'results'
      // Hence, "$$$.data.results" in Line 34
      // console.log(responseFromServer.data.results)
      setPokemon(responseFromServer.data.results)
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="container">
      <div className="App">
        <h1>Pokemon API</h1>
        {/* <button className="button" onClick={vanillaJSFetchPokemon}>Gotta Catch'Em All!</button> */}
        <button className="button" onClick={axiosPokemon}>--Gotta Catch'Em All!--</button>
        <hr className="hr" />
        {
          pokemon.map((pokemon, i) => {
            return (
              <div className="h4">
                <h4 key={i}>{pokemon.name}</h4>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
