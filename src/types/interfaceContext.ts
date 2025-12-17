import type { ReactNode } from "react";
import type { spaceShift } from "./interfaceSpaceShip";
import type { Character } from "./interfaceCharacterModel";
import type { Places } from "./interfacesLocationModel";

export interface ShipContentProps{
    children: ReactNode
}

export interface RetournedValuesContext{
    ship:spaceShift,
    hireCharacter:(newCrewMember:Character)=>void,
    spendFuel: () => void,
    earnRandomMoney: () => void,
    characters:Character[],
    locations:Places[],
    fireCharacter:(firedCharacter:Character)=>void


}

export interface Hire{
    text:string,
    onClick:()=>void,
    disabled:false
}