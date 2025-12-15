import type { Character } from "../models/charactersModels/interfaces";
import {getCharacters} from '../services/CharactersServices';
import { CardCharacter } from "../components/CardCharacter";
import { useEffect } from "react";

export function renderAllCharacter(){
    useEffect(()=>{
        allCharacter();
    },[])
}

async function allCharacter(){
    let characters = await getCharacters();

    characters.map((c :Character) => (
        CardCharacter(c)
    ))
    
    return 
}