import type {Places} from "../types/interfacesLocationModel"
const url="https://rickandmortyapi.com/api/location";


export const getPlaces = async ():Promise <Places[] | string> =>{
    try{
        let response= await fetch(url);
        let responseJson=await response.json();
        return responseJson.results as Places[]
    }catch(e:any){
        return `Error al obtener los lugares de la base de datos, contacte con el administrador e indiquele el siguiente mensaje: ${e.Message}`
    }
}

