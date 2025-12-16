import { useShip } from "../context/ShipContext";
import type { Character } from "../models/charactersModels/interfaces";
import Button from "./Button";

export interface CardCharacterProps{
    character:Character,
    type:  string;
}

const CharacterCard = ({ character, type }: CardCharacterProps) => {
  const {hireCharacter} = useShip();

  return (
    <div className="card h-100 shadow-sm rounded overflow-hidden" key={character.id}>
      <img
        src={character.image}
        className="card-img-top img-fluid"
        alt={character.name}
        style={{ objectFit: "cover", height: "250px" }}
      />
      <div className="card-body text-center">
        <h5 className="card-title fw-bold mb-1">{character.name}</h5>
        <p className="card-text">
          <small className="text-muted">{character.species}</small>
        </p>
        <div className="mt-2">
          <span
            className={`badge ${
              character.status === "Alive"
                ? "bg-success"
                : character.status === "Dead"
                ? "bg-danger"
                : "bg-secondary"
            }`}
          >
            {character.status}
          </span>
          {type=="hire" && <Button text="Contratar" onClick={() => hireCharacter(character)}/>}
        </div>
      </div>
    </div>
  );
};


export default CharacterCard;