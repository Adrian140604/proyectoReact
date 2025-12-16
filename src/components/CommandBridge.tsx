import { useShip } from "../context/ShipContext";
import CharacterCard from "./CardCharacter";
import ResourceBadge from "./ResourceBadge";

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
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-9">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {crew.map((character) => (
              <div
                key={character.id}
                className={crew.length === 1 ? "col-12 col-md-10" : "col"}
              >
                <CharacterCard character={character} type="see" />
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-3">
          <div className="d-flex flex-column align-items-start gap-3">
            <ResourceBadge icon="⛽" label="Fuel" value={ship.fuelLevel} />
            <ResourceBadge icon="💰" label="Credits" value={ship.credits} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandBridge;