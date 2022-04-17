import React from "react"
import CharacterForm from "./CharacterForm"
import { useState } from "react";

export default function Character() {
    
    // const [characterName, setCharacterName] = useState("Kirasta");
    // const [realm, setRealm] = useState("Saurfang");
    const [ character, setCharacter ] = useState({
        characterName: "Kirasta",
        realm: "Saurfang"
    })
    //const [character, setCharacter] = useState([]);

    function handleCharacterChange(event) {
        setCharacter({
            ...character,
            [event.target.name]: event.target.value
        })
    }
    


    return (
        <div>
            <h2>Character</h2>
            <CharacterForm 
                character={character}
                handleCharacterChange={handleCharacterChange}
            />
        </div>
    )
}