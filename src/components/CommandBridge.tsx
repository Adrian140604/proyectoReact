import { useShip } from "../context/ShipContext";
import CharacterCard from './CardCharacter';

const CommandBridge = () => {

  const {ship} = useShip();
  const crew = ship.crew;

  if(ship.fuelLevel==0 || ship.fuelLevel<0){
    alert("GAME OVER");
  }

  if(crew.length == 0){

    return(
        <>
          <p>Invitando a contratar</p>
        </>
    );

  }else{

    return(
    <>
      {crew.map(CharacterValue=> CharacterCard(CharacterValue))}
    </>);


  }
};

export default CommandBridge;