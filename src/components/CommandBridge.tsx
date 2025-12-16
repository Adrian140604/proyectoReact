import { useShip } from "../context/ShipContext";
import CharacterCard from "./CardCharacter";
import ResourceBadge from "./ResourceBadge";
import gas from "../assets/img/gas.png";
import credits from "../assets/img/credits.jpg";


const CommandBridge = () => {
  const { ship } = useShip();
  const crew = ship.crew;

  if (ship.fuelLevel <= 0) {
    return (
      <div className="container text-center mt-5">
        <div className="alert alert-danger" role="alert">
          🚨 GAME OVER 🚨
        </div>
      </div>
    );
  }

  if (crew.length === 0) {
    return (
      <div className="container text-center mt-5">
        <div className="alert alert-warning" role="alert">
          Inviting to hire crew...
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container my-4">
        <div className="d-flex justify-content-center gap-3">
          <ResourceBadge icon={gas} label="Fuel" value={ship.fuelLevel} />
          <ResourceBadge icon={credits} label="Credits" value={ship.credits} />
        </div>
      </div>
      <div className="container">
        <div className="d-flex flex-wrap gap-4">
          {crew.map((character) => (
            <div key={character.id} style={{ width: "16rem" }}>
              <CharacterCard character={character} type="see" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CommandBridge;