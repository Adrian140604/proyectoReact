import type { ReactNode } from "react";
import type { spaceShift } from "../models/spaceShiftModels/interfaces";
import type { Character } from "../models/charactersModels/interfaces";
import type { Places } from "../models/locationsModels/interfaces";

export interface ShipContentProps{
    children: ReactNode
}

export interface RetournedValuesContext{
    ship:spaceShift,
    hireCharacter:(newCrewMember:Character)=>void,
    beginMission:()=>void,
    characters:Character[],
    locations:Places[]
}