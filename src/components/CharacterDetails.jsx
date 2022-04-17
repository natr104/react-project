import React from "react";

export default function CharacterDetails({characterDetails, setCharacterDetails, character, setCharacter}) {
    
    const clearDetails = ()=> {
        setCharacterDetails(null)
    }
    
    console.log(characterDetails);
    const capitalizeFirstLetter = ([ first, ...rest ], locale = navigator.language) => first.toLocaleUpperCase(locale) + rest.join('');
    const faction = capitalizeFirstLetter(characterDetails.faction);

    return (
        <div id={characterDetails.name}>
            <img src={characterDetails.thumbnail_url} alt={characterDetails.name} />
            <h2>
                <a href={`https://worldofwarcraft.com/en-us/character/us/${characterDetails.realm}/${characterDetails.name}`}>{characterDetails.name}</a> - {characterDetails.realm}
            </h2>
            <h3>
                {`<`}{characterDetails.guild.name}{`>`} - {characterDetails.guild.realm}
            </h3>
            <h4>
                {characterDetails.race} {characterDetails.active_spec_name} {characterDetails.class} - {faction}
            </h4>
            <p>
                Covenant: {characterDetails.covenant.name} (Renown {characterDetails.covenant.renown_level})
            </p>
            <p>
                Equipped Item Level: {characterDetails.gear.item_level_equipped}
            </p>
            <p>
                Raid Progression:
            </p>
            <ul>
                <li>Sepulcher of the First Ones: {`${characterDetails['raid_progression']['sepulcher-of-the-first-ones'].summary}`}</li>
                <li>Sanctum of Domination: {`${characterDetails['raid_progression']['sanctum-of-domination'].summary}`}</li>
                <li>Castle Nathria: {`${characterDetails['raid_progression']['castle-nathria'].summary}`}</li>
            </ul>
            
            <p>
                Mythic+ Score: 
            </p>
            <button onClick={()=>clearDetails()}>Clear</button>
        </div>
    )
}

