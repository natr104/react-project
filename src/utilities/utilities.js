export const fetchCharacter = async ({characterName, realm}) => {
    const charURL = `https://raider.io/api/v1/characters/profile?region=us&realm=${realm}&name=${characterName}&fields=guild%2Ccovenant%2Cgear%2Craid_progression%2Cmythic_plus_scores_by_season:current`;
    console.log(characterName, realm);
    try {
        const response = await fetch(charURL);
        const character = await response.json();
        if (character.statusCode===400) {
            alert(`${character.message}`)
            return null;
        } else {
            console.log(character)
            return character;
        }
        
    } catch(error) {
        console.error(error);
    }
}

export const handleSubmit = async (event, character, characterDetails, setCharacterDetails)=> {
    event.preventDefault();
    const returnedCharacter = await fetchCharacter(character);
    return setCharacterDetails(returnedCharacter);
}

export const capitalizeFirstLetter = ([ first, ...rest ], locale = navigator.language) => first.toLocaleUpperCase(locale) + rest.join('');

export const saveCharacter = (characterDetails, savedCharacters, setSavedCharacters) => {
    const id = characterDetails.name+characterDetails.realm;

    const character = {
        ...characterDetails,
        id: id
    }

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(character)
    }

    fetch("http://localhost:3001/savedCharacters", configObj)
        .then(res => res.json())
        .then(data => {
            
            setSavedCharacters(
                [
                    ...savedCharacters,
                    data
                ]
            )
            // alert(`You have added ${data.name} to your saved characters.`)
        })

}

export const removeSavedCharacter = ( characterDetails, savedCharacters, setSavedCharacters ) => {
    
    
    const configObj = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }
    
    fetch(`http://localhost:3001/savedCharacters/${characterDetails.name}`, configObj)
        .then(res => res.json())
        .then(data => setSavedCharacters([
            ...savedCharacters.filter(c=>c.name!==characterDetails.name)
        ]))
}