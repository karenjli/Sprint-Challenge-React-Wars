import React, {useState, useEffect} from 'react';
import axios from "axios"
import './App.css';
import CharacterCard from "./components/CharacterCard"
import styled from "styled-components"

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

    const CardBox = styled.div`
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      padding: 10px;
      border-radius: 1px solid grey;
    `;

    const Header = styled.h1`
      font-family: "Codystar", cursive;
      color: black;
      font-size: 26px;
    `;

    const Subheading = styled.h3`
      font-family: "Press Start 2P", cursive;
      font-size: 16px;
      color: black;
    `;

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
      <Header>React Wars</Header>
      <Subheading>Pick your characters wisely!</Subheading>
      <CardBox>
          {results.map (char => <CharacterCard name={char.name} height = {char.height} mass = {char.mass} hair={char.hair_color} skin={char.skin_color} eye={char.eye_color} birth={char.birth_year} gender={char.gender} />)}
      </CardBox>
    </div>
     
    
  );
}

export default App;
