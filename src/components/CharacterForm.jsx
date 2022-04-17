import React, { useState } from "react"
import { handleSubmit } from "../utilities/utilities"


export default function CharacterForm({character, handleCharacterChange}) {

    // const [characterName, setCharacterName] = useState("Kirasta");
    // const [realm, setRealm] = useState("Saurfang");

    // function handleCharacterNameChange(event) {
    //     setCharacterName(event.target.value);
    // }
    
    // function handleRealmChange(event) {
    //     setRealm(event.target.value);
    // }

    return(
        <form onSubmit={(event)=>handleSubmit(event, character)}>
            <label>
                Character:
                <input type="text" name="characterName" onChange={handleCharacterChange} value={character.characterName} />
            </label>
            <label>
                Realm:
                <input type="text" name="realm" onChange={handleCharacterChange} value={character.realm} />
            </label>
            <input type="submit" value="Search" />

        </form>
    )
}