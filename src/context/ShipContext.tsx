
import type { Character } from "../models/charactersModels/interfaces";
import type { spaceShift } from "../models/spaceShiftModels/interfaces";
import type { RetournedValuesContext, ShipContentProps } from "./interfaces";
import { useContext, createContext, useState } from "react";
import type { Places } from "../models/locationsModels/interfaces";
import { getCharacters } from "../services/CharactersServices";
import { getPlaces } from "../services/LocationsServices";
import { useEffect } from "react";


const ShipSpaceContext = createContext<RetournedValuesContext | null>(null);

/**
 * This function allow use the context if id doesn't have any error
 * 
 */
export const useShip = () => {
  const context = useContext(ShipSpaceContext);
  if (!context) throw new Error('useShip debe usarse dentro de ShipContext');
  return context;
};

/**
 * This is the component that cover all the components that we would like to provide infomation
 * @param {ShipContentProps} children 
 * 
 */
export default function ShipProvider({children}:ShipContentProps){

    const [ship, setShip] = useState<spaceShift>({
        credits:1000,
        fuelLevel:100,
        crew:[]
    });


    const [characters, setCharacter] = useState<Character[]>([]);
    const [locations, setLocations] = useState<Places[]>([]);
   

    useEffect(() =>{
        getAllCharactersAndLocations();
    }, [])

     async function getAllCharactersAndLocations(){
        const dataCharacters = await getCharacters();
        const dataPlaces = await getPlaces();
        if(typeof(dataPlaces)!="string"){
            setLocations(dataPlaces);
        }else{
            alert(dataPlaces);
        }
        if(typeof(dataCharacters)!="string"){
            setCharacter(dataCharacters);
        }else{
            alert(dataCharacters);
        }
    }


    function hireCharacter(newCrewMember:Character){
            if(ship.credits>=200 && ship.crew.length <=3 && newCrewMember.status=="Alive" && !ship.crew.includes(newCrewMember)){
                spendMoney();
                addCrewMember(newCrewMember);
            }
    }

    function fireCharacter(firedCharacter:Character){
         setShip(prevShip => ({
                ...prevShip,
                crew: prevShip.crew.filter(character => character.id !== firedCharacter.id)
                }));
    }

    function beginMission(){
        spendFuel();
        earnRandomMoney();
    }

    function spendMoney(){
            setShip(prevShip => ({
            ...prevShip,
            credits: prevShip.credits - 200
            }));
    }

    function earnRandomMoney(){
       setShip(prevShip => ({
            ...prevShip,
            credits: prevShip.credits +Math.random()*100
            }));
    }

    function spendFuel(){
        setShip(prevShip => ({
            ...prevShip,
            fuelLevel: prevShip.fuelLevel - 25
            }));
    }

    function addCrewMember(newCrewMember:Character){
                setShip(prevShip => ({
                ...prevShip,
                crew: [...prevShip.crew, newCrewMember]
                }));

    }
    const retournedValues : RetournedValuesContext = {
        ship,
        hireCharacter,
        beginMission,
        characters,
        locations,
        fireCharacter
    }

    return(
        <ShipSpaceContext.Provider value={retournedValues}>
            {children}
        </ShipSpaceContext.Provider>
    );

}