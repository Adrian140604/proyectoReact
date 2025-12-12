
import type { spaceShift } from "../models/spaceShiftModels/interfaces";
import type { RetournedValuesContext, ShipContentProps } from "./interfaces";
import { useContext, createContext, useState } from "react";


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
export default function ShipContext({children}:ShipContentProps){

    const [ship, setShip] = useState<spaceShift[]>([]);

    const retournedValues : RetournedValuesContext = {
        ship
    }

    return(
        <ShipSpaceContext.Provider value={retournedValues}>
            {children}
        </ShipSpaceContext.Provider>
    );

}