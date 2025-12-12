import type {Places} from "../models/locationsModels/interfaces"
const url="https://rickandmortyapi.com/api/location";


const getPlaces = async ():Promise <Places []> =>{
    let response= await fetch(url);
    let responseJson=await response.json();
    return responseJson.result as Places[]
}

getPlaces();