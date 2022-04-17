
export const fetchCharacter = async ({characterName, realm}) => {
    const charURL = `https://raider.io/api/v1/characters/profile?region=us&realm=${realm}&name=${characterName}&fields=guild%2Ccovenant%2Cgear%2Craid_progression%2Cmythic_plus_scores_by_season:current`;
    console.log(characterName, realm);
    try {
        const response = await fetch(charURL);
        const character = await response.json();
        console.log(character);
        if (character.statusCode===400) {
            alert(`${character.message}`)
            return null;
        } else {
            return character;
        }
        
    } catch(error) {
        console.error(error);
    }
}

export const handleSubmit = async (event, character, characterDetails, setCharacterDetails)=> {
    event.preventDefault();
    const returnedCharacter = await fetchCharacter(character);
    console.log(returnedCharacter);
    return setCharacterDetails(returnedCharacter);
}