import { SavedCharactersContext } from "../contexts/SavedCharactersContext";
import { removeSavedCharacter, saveCharacter } from "../utilities/utilities";
import { useContext } from "react";
import CharacterDetails from "./CharacterDetails";

export default function SavedCharacters({children}) {
    
    const [ savedCharacters, setSavedCharacters ] = useContext(SavedCharactersContext);
    
    console.log(savedCharacters)

    return (
        <div id="saved-characters">
            <h2>Saved Characters</h2>
            <div id="saved-character-list">
            {savedCharacters.map(savedCharacters => (
                <CharacterDetails 
                    characterDetails={savedCharacters}
                    setCharacterDetails={setSavedCharacters}
                />
            ))}
            </div>
        </div>
    )

}