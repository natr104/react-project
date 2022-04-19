import { createContext, useState, useEffect } from "react";

export const SavedCharactersContext = createContext();

export const SavedCharactersContextProvider = ({children})=> {
    const [savedCharacters, setSavedCharacters] = useState([]);

    useEffect(()=> {
        fetch("http://localhost:3001/savedCharacters")
        .then(res=>res.json())
        .then(data => {
            setSavedCharacters(data)
        })
    }, [])

    return (
        <SavedCharactersContext.Provider value={[savedCharacters, setSavedCharacters]}>
            {children}
        </SavedCharactersContext.Provider>
    )
}