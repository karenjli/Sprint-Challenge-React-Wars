import React from 'react';

export default function CharacterCard (props) {
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <div className="qualities">
                <p id="height">Height: {props.height}</p>
                <p id="mass">Mass: {props.mass}</p>
                <p id="hair">Hair Color: {props.hair}</p>
                <p id="skin">Skin Color: {props.skin}</p>
                <p id="eye">Eye Color: {props.eye}</p>    
                <p id="birth">Birth Year: {props.birth}</p>
                <p id="gender">Gender: {props.gender}</p>
            </div>
        </div>
    )
}