import type { ReactNode } from "react";
import type { spaceShift } from "../models/spaceShiftModels/interfaces";
import type { Character } from "../models/charactersModels/interfaces";

export interface ShipContentProps{
    children: ReactNode
}

export interface RetournedValuesContext{
    ship:spaceShift,
    hireCharacter:(newCrewMember:Character)=>void
}