export const fetchCharacter = async (characterName, realm) => {
    const charURL = `https://raider.io/api/v1/characters/profile?region=us&realm=${realm}&name=${characterName}&fields=guild%2Ccovenant`;
    console.log(characterName, realm);
    try {
        const response = await fetch(charURL);
        const character = await response.json();
        console.log(character)
        return character;
    } catch(error) {
        console.error(error);
    }
}

export const handleSubmit = (event, characterName, realm)=> {
    event.preventDefault();
    const character = fetchCharacter(characterName, realm);
    return character;
}

