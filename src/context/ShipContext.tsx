
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
    const [locations, setLocations] = useState<Places[]>([])

    useEffect(() =>{
        getAllCharactersAndLocations();
    }, [])

     async function getAllCharactersAndLocations(){
        const dataCharacters = await getCharacters();
        const dataPlaces = await getPlaces();
        setLocations(dataPlaces);
        setCharacter(dataCharacters);
    }

    function hireCharacter(newCrewMember:Character){
            if(ship.credits>=200 && ship.crew.length <=3 && newCrewMember.status!="Dead"){
                spendMoney();
                addCrewMember(newCrewMember);
            }
    }

   

    function beginMission(){
        spendFuel();
        earnRandomMoney();
    }

    function spendMoney(){
        setShip({...ship, credits:ship.credits-200});
    }

    function earnRandomMoney(){
        setShip({...ship, credits:ship.credits+Math.random()*100});
    }

    function spendFuel(){
        setShip({...ship, fuelLevel:ship.fuelLevel-25});
    }

    function addCrewMember(newCrewMember:Character){
        const newCrew = [...ship.crew, newCrewMember];
        setShip({...ship, crew:newCrew});
    }
    const retournedValues : RetournedValuesContext = {
        ship,
        hireCharacter,
        beginMission,
        characters,
        locations
    }

    return(
        <ShipSpaceContext.Provider value={retournedValues}>
            {children}
        </ShipSpaceContext.Provider>
    );

}