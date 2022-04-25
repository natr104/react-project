import React from "react"
import { handleSubmit } from "../utilities/utilities"
import { TextField, Button } from "@mui/material"


export default function CharacterForm({character, setCharacter, handleCharacterChange, characterDetails, setCharacterDetails}) {


    const clearDetails = ()=> {
        setCharacterDetails(null)
        setCharacter({
            characterName: "",
            realm: ""
        })
    }

    return(
        <form onSubmit={(event)=>handleSubmit(event, character, characterDetails, setCharacterDetails)}>
                {/* <input type="text" name="characterName" onChange={handleCharacterChange} value={character.characterName} /> */}
                <TextField label="Character" name="characterName" onChange={handleCharacterChange} value={character.characterName}/>
            {/* <label>
                Realm:{' '}
                <input type="text" name="realm" onChange={handleCharacterChange} value={character.realm} />
            </label> */}
            <TextField label="Realm" name="realm" onChange={handleCharacterChange} value={character.realm}/>
            {/* <input type="submit" value="Search" /> */}
            <Button type="submit" variant="contained">Search</Button>
            {
                characterDetails ? 
                <Button variant="outlined" onClick={()=>clearDetails()}>Clear</Button> : null
            }
        </form>
    )
}