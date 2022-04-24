import React from "react"
import { handleSubmit } from "../utilities/utilities"


export default function CharacterForm({character, handleCharacterChange, characterDetails, setCharacterDetails}) {

    return(
        <form onSubmit={(event)=>handleSubmit(event, character, characterDetails, setCharacterDetails)}>
            <label>
                Character:{' '}
                <input type="text" name="characterName" onChange={handleCharacterChange} value={character.characterName} />
            </label>
            <label>
                Realm:{' '}
                <input type="text" name="realm" onChange={handleCharacterChange} value={character.realm} />
            </label>
            <input type="submit" value="Search" />

        </form>
    )
}