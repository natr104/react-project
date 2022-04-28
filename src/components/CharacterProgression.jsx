import React from "react";

export default function CharcterProgression({characterDetails}) {

  return (
    <>
      <p>
        Covenant: {characterDetails.covenant.name} (Renown{" "}
        {characterDetails.covenant.renown_level})
      </p>
      <p>Equipped Item Level: {characterDetails.gear.item_level_equipped}</p>
      <p>Shadowlands Raid Progression:</p>
      <ul>
        <li>
          Sepulcher of the First Ones:{" "}
          {`${characterDetails["raid_progression"]["sepulcher-of-the-first-ones"].summary}`}
        </li>
        <li>
          Sanctum of Domination:{" "}
          {`${characterDetails["raid_progression"]["sanctum-of-domination"].summary}`}
        </li>
        <li>
          Castle Nathria:{" "}
          {`${characterDetails["raid_progression"]["castle-nathria"].summary}`}
        </li>
      </ul>
      <p>
        Current Season Mythic+ Score:{" "}
        {characterDetails["mythic_plus_scores_by_season"][0]["scores"]["all"]}
      </p>
    </>
  );
}
