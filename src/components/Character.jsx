import React from "react"
import CharacterForm from "./CharacterForm"
import CharacterDetails from "./CharacterDetails";
import { useState } from "react";

export default function Character() {
    
    const [ character, setCharacter ] = useState({
        characterName: "Kirasta",
        realm: "Saurfang"
    })
    const [characterDetails, setCharacterDetails] = useState(null);
    console.log(setCharacterDetails)

    function handleCharacterChange(event) {
        setCharacter({
            ...character,
            [event.target.name]: event.target.value
        })
    }
    


    return (
        <div>
            <h2>Character Search</h2>
            <CharacterForm 
                character={character}
                setCharacter={setCharacter}
                handleCharacterChange={handleCharacterChange}
                characterDetails={characterDetails}
                setCharacterDetails={setCharacterDetails}
            />
            {
                characterDetails ? 
                    <CharacterDetails 
                        characterDetails={characterDetails} 
                        setCharacterDetails={setCharacterDetails}
                    /> : null
            }
        </div>
    )
}