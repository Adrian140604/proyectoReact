import { useShip } from "../context/ShipContext";
import CharacterCard from './CardCharacter';
import ResourceBadge from "./ResourceBadge";

const CommandBridge = () => {

  const {ship} = useShip();
  const crew = ship.crew;
  


  if(ship.fuelLevel==0 || ship.fuelLevel<0){
    <>
      <div className="container text-center mt-5">
        <div className="alert alert-danger" role="alert">
          🚨 GAME OVER 🚨
        </div>
      </div>
    </>
  }

  if(crew.length == 0){

    return(
          <>
            <div className="container text-center mt-5">
              <div className="alert alert-warning" role="alert">
                Inviting to hire crew...
              </div>
            </div>
          </>
    );

  }else{

    return (
      <>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          {crew.map(character => (
          <div key={character.id} className={crew.length === 1 ? "col-12 col-md-10" : "col"}>
              <CharacterCard {...character} />
          </div>
          ))};
        </div>
      </>
    );



  }
};

export default CommandBridge;