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
        <div>
          <div>
          </div>
          <div className="container mt-4">
            <h2 className="text-center mb-4">Crew Members</h2>
            <div className="row">
              {crew.map((character) => (
                <div className={crew.length === 1 ? "col-12" : "col-md-4 mb-3"}>
                  <CharacterCard character={character} type="see" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );



  }
};

export default CommandBridge;