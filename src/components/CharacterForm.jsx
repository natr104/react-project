import React from "react";
import { handleSubmit } from "../utilities/utilities";
import { TextField, Button } from "@mui/material";

export default function CharacterForm({
  character,
  setCharacter,
  handleCharacterChange,
  characterDetails,
  setCharacterDetails,
}) {
  const clearDetails = () => {
    setCharacterDetails(null);
    setCharacter({
      characterName: "",
      realm: "",
    });
  };



  return (
    <form
      onSubmit={(event) => {
        console.log(setCharacterDetails)
        handleSubmit(event, character, setCharacterDetails)
      }
      }
    >
      <TextField
        label="Character"
        name="characterName"
        onChange={handleCharacterChange}
        value={character.characterName}
        size="small"
      />

      <TextField
        label="Realm"
        name="realm"
        onChange={handleCharacterChange}
        value={character.realm}
        size="small"
      />

      <Button type="submit" variant="contained">
        Search
      </Button>
      {characterDetails ? (
        <Button variant="outlined" onClick={() => clearDetails()}>
          Clear
        </Button>
      ) : null}
    </form>
  );
}
