import React, { useState } from "react"
import { fetchCharacter } from "../utilities/utilities";
import { handleSubmit } from "../utilities/utilities"

export default function CharacterForm() {

    const [characterName, setCharacterName] = useState("Kirasta");
    const [realm, setRealm] = useState("Saurfang");

    function handleCharacterNameChange(event) {
        setCharacterName(event.target.value);
    }
    
    function handleRealmChange(event) {
        setRealm(event.target.value);
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     fetchCharacter(characterName, realm);
    // }

    return(
        <form onSubmit={(event)=>handleSubmit(event, characterName, realm)}>
            <label>
                Character:
                <input type="text" onChange={handleCharacterNameChange} value={characterName} />
            </label>
            <label>
                Realm:
                <input type="text" onChange={handleRealmChange} value={realm} />
            </label>
            <input type="submit" value="Search" />

        </form>
    )
}