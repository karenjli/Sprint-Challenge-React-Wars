import React, {useState, useEffect} from 'react';
import axios from "axios"
import './App.css';
import CharacterCard from "./components/CharacterCard"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
    // const [name, setName] = useState ([]);
    // const [height, setHeight] = useState ([]);
    // const [mass, setMass] = useState ([]);
    // const [haircolor, setHaircolor] = useState ([]);
    // const [skincolor, setSkincolor] = useState ([]);
    // const [eyecolor, setEyecolor] = useState ([]);
    // const [birthyear, setBirthyear] = useState ([]);
    // const [gender, setGender] = useState ([]);
    const [page, setPage] = useState (1);
    const [results, setResults] = useState ([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
    useEffect (() => {
      axios.get (`https://swapi.co/api/people/?page${page}`)
        .then(response => {
          console.log(response);
          setResults(response.data.results);
          
        })
        .catch (err => {
          console.log(err)
        });
    }, [])
  

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {results.map (char => <CharacterCard name={char.name} height = {char.height} mass = {char.mass} hair={char.hair_color} skin={char.skin_color} eye={char.eye_color} birth={char.birth_year} gender={char.gender} />)}
    </div>
     
    
  );
}

export default App;
