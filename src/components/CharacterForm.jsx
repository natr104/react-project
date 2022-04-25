import React from "react"
import { handleSubmit } from "../utilities/utilities"
import { TextField } from "@mui/material"


export default function CharacterForm({character, handleCharacterChange, characterDetails, setCharacterDetails}) {

    return(
        <form onSubmit={(event)=>handleSubmit(event, character, characterDetails, setCharacterDetails)}>
                {/* <input type="text" name="characterName" onChange={handleCharacterChange} value={character.characterName} /> */}
                <TextField label="Character" name="characterName" onChange={handleCharacterChange}/>
            <label>
                Realm:{' '}
                <input type="text" name="realm" onChange={handleCharacterChange} value={character.realm} />
            </label>
            <input type="submit" value="Search" />

        </form>
    )
}