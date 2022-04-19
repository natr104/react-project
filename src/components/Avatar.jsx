import React from "react"
import { capitalizeFirstLetter } from "../utilities/utilities";

export default function Avatar({characterDetails}) {
    
    const faction = capitalizeFirstLetter(characterDetails.faction);

    return (
        <>
            <img src={characterDetails.thumbnail_url} alt={characterDetails.name} />
            <h2>
                <a href={`https://worldofwarcraft.com/en-us/character/us/${characterDetails.realm}/${characterDetails.name}`}>{characterDetails.name}</a> - {characterDetails.realm}
            </h2>
            <h3>
                {`<`}{characterDetails.guild.name}{`>`} - {characterDetails.guild.realm}
            </h3>
            <h4>
                {characterDetails.race} {characterDetails.active_spec_name} {characterDetails.class} ({faction})
            </h4>
        </>
    )
}