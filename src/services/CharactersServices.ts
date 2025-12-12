import type {Character} from "../models/charactersModels/interfaces"
const url="https://rickandmortyapi.com/api/character";

const getCharacters=async (): Promise<Character[]>=>{
    let response= await fetch(url);
    let responseJson=await response.json();
    return responseJson.results as Character[];
    
}

getCharacters();