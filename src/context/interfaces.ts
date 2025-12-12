import type { ReactNode } from "react";
import type { spaceShift } from "../models/spaceShiftModels/interfaces";

export interface ShipContentProps{
    children: ReactNode
}

export interface RetournedValuesContext{
    ship:spaceShift[]
}