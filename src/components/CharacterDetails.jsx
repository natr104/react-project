import React from "react";
import Avatar from "./Avatar";
import { removeSavedCharacter, saveCharacter } from "../utilities/utilities";
import { useContext } from "react";
import { SavedCharactersContext } from "../contexts/SavedCharactersContext";

export default function CharacterDetails({characterDetails, setCharacterDetails}) {
    
    const [ savedCharacters, setSavedCharacters ] = useContext(SavedCharactersContext)

    const clearDetails = ()=> {
        setCharacterDetails(null)
    }

    const isSaved = () => savedCharacters.some(c=>c.name === characterDetails.name)
    
    console.log(characterDetails);
    
    return (
        <div id={characterDetails.name}>
            <Avatar characterDetails={characterDetails}/>
            <p>
                Covenant: {characterDetails.covenant.name} (Renown {characterDetails.covenant.renown_level})
            </p>
            <p>
                Equipped Item Level: {characterDetails.gear.item_level_equipped}
            </p>
            <p>
                Shadowlands Raid Progression:
            </p>
            <ul>
                <li>Sepulcher of the First Ones: {`${characterDetails['raid_progression']['sepulcher-of-the-first-ones'].summary}`}</li>
                <li>Sanctum of Domination: {`${characterDetails['raid_progression']['sanctum-of-domination'].summary}`}</li>
                <li>Castle Nathria: {`${characterDetails['raid_progression']['castle-nathria'].summary}`}</li>
            </ul>
            <p>
                Current Season Mythic+ Score: {characterDetails['mythic_plus_scores_by_season'][0]['scores']['all']}
            </p>
            {
                isSaved() ?
                <button onClick={()=>removeSavedCharacter(characterDetails, savedCharacters,setSavedCharacters)}>Remove Saved Character</button> : 
                <button onClick={()=>saveCharacter(characterDetails, savedCharacters, setSavedCharacters)}>Save Character</button>
                
            }
            
            <button onClick={()=>clearDetails()}>Clear</button>
        </div>
    )
}
