import { SavedCharactersContext } from "../contexts/SavedCharactersContext";
import { useContext } from "react";
import CharacterDetails from "./CharacterDetails";
import { Container, Grid } from "@mui/material";

export default function SavedCharacters() {
  const [savedCharacters, setSavedCharacters] = useContext(
    SavedCharactersContext
  );

  console.log(savedCharacters);

  return (
    <div id="saved-characters">
      <h2>Saved Characters</h2>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {savedCharacters.map((savedCharacters) => (
            <Grid item>
            <CharacterDetails
              characterDetails={savedCharacters}
              setCharacterDetails={setSavedCharacters}
            />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}