import React from "react"
import { capitalizeFirstLetter } from "../utilities/utilities";
import { Avatar, CardHeader, Typography } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function CharacterAvatar({ characterDetails }) {
  const faction = capitalizeFirstLetter(characterDetails.faction);

  return (
    <>
      <CardHeader
        avatar={
          <Avatar
            src={characterDetails.thumbnail_url}
            alt={characterDetails.name}
            sx={{
                width: 64,
                height: 64
            }}
          />
        }
        title={`${characterDetails.name} - ${characterDetails.realm}`}
        subheader={
          characterDetails.guild
            ? `<${characterDetails.guild.name}> - ${characterDetails.guild.realm}`
            : null
        }
      />
      <Typography variant="subtitle2" gutterBottom component="div">
        {characterDetails.race} {characterDetails.active_spec_name}{" "}
        {characterDetails.class} ({faction})
      </Typography>
    </>
  );
}
//<a href={`https://worldofwarcraft.com/en-us/character/us/${characterDetails.realm}/${characterDetails.name}`}></a>