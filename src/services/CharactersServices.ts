import type {Character} from "../types/interfaceCharacterModel"
const url="https://rickandmortyapi.com/api/character";

export const getCharacters=async (): Promise<Character[] | string>  =>{
    try{
        let response= await fetch(url);
        let responseJson=await response.json();
        return responseJson.results as Character[];
    }catch(e:any){
        return `Error al obtener los personajes de la base de datos, contacte con el administrador e indiquele el siguiente mensaje: ${e.Message}`
    }
    
    
}

