import React from "react";
import CharacterAvatar from "./CharacterAvatar";
import CharacterProgression from "./CharacterProgression";
import ContentRecommendations from "./ContentRecommendations";
import { Link } from 'react-router-dom';
import { removeSavedCharacter, saveCharacter } from "../utilities/utilities";
import { useContext } from "react";
import { SavedCharactersContext } from "../contexts/SavedCharactersContext";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";


export default function CharacterDetails({
  characterDetails,
  setCharacterDetails,
}) {
  const [savedCharacters, setSavedCharacters] = useContext(
    SavedCharactersContext
  );

  const isSaved = () =>
    savedCharacters.some((c) => c.name === characterDetails.name);
    

  return (
    <Card
      className="character-details"
      id={characterDetails.name + characterDetails.realm}
      elevation={4}
      sx={{
        maxWidth: 400,
      }}
    >
      <CharacterAvatar characterDetails={characterDetails} />
      <CharacterProgression characterDetails={characterDetails} />
      <Stack spacing={2}>
        <Button 
          variant="contained"
          color="primary"
          >
          Get Content Recommendations
        </Button>
        {isSaved() ? (
          <Button
            variant="contained"
            onClick={() =>
              removeSavedCharacter(
                characterDetails,
                savedCharacters,
                setSavedCharacters
              )
            }
          >
            Remove Saved Character
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() =>
              saveCharacter(
                characterDetails,
                savedCharacters,
                setSavedCharacters
              )
            }
          >
            Save Character
          </Button>
        )}
      </Stack>
    </Card>
  );
}
