import { SavedCharactersContext } from "../contexts/SavedCharactersContext";
import { removeSavedCharacter, saveCharacter } from "../utilities/utilities";
import { useContext } from "react";

export default function SavedCharacters() {
    
    const [ savedCharacters, setSavedCharacters ] = useContext(SavedCharactersContext)
    console.log(savedCharacters)
    const printCharacters = ()=> {
        savedCharacters.forEach(()=>{

        })
    }

    return (
        <div id="saved-characters">
            <h2>Saved Characters</h2>
        </div>
    )

}