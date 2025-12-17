import { useShip } from "../context/ShipContext";
import CharacterCard from "../components/CardCharacter";

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