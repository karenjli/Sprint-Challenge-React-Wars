// import React, {useState, useEffect} from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// import CharacterCard from "./CharacterCard"

// export default function Nextbutton (props) {
//     const [newpage,setNewpage] = ([]);
//     const [page, setPage] = (page);

//     useEffect(() => {
//         axios.get (`https://swapi.co/api/people/?page${page+1}`)
//     .then (response => {
//         console.log(response);
//         setNewpage (response.data.results);

//     })
//     .catch (err => {
//         console.log(err);
//     })
// },[]);
//     return(
//         <div>
//             <a href ="https://swapi.co/api/people/?page${page+1}"><button onClick="
//                 {newPage.map(char => <CharacterCard name={char.name} height = {char.height} mass = {char.mass} hair={char.hair_color} skin={char.skin_color} eye={char.eye_color} birth={char.birth_year} gender={char.gender} />)}
//             ">Next</button></a>
//         </div>
//     );
// };