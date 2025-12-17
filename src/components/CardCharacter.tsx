import { useShip } from "../context/ShipContext";
import type { Character } from "../types/interfaceCharacterModel";
import Button from "./Button";

export interface CardCharacterProps {
  character: Character;
  type: string;
}

const CharacterCard = ({ character, type }: CardCharacterProps) => {
  const { hireCharacter, fireCharacter } = useShip();

  return (
    <div className="card bg-light bg-opacity-75 border border-dark shadow-sm rounded">
      <img
        src={character.image}
        className="card-img-top rounded-top"
        alt={character.name}
      />

      <div className="card-body text-center text-dark">
        <h5 className="card-title mb-2">{character.name}</h5>
        <h5 className="card-title mb-2">{character.species}</h5>

        <span
          className={`badge mb-3 ${
            character.status === "Alive"
              ? "bg-success"
              : character.status === "Dead"
              ? "bg-danger"
              : "bg-secondary"
          }`}
        >
          {character.status}
        </span>

        <div className="d-grid mt-3">
          {type === "hire" && (
            <Button
              text="Contratar"
              onClick={() => hireCharacter(character)}
            />
          )}
          {type === "see" && (
            <Button
              text="Despedir"
              onClick={() => fireCharacter(character)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;