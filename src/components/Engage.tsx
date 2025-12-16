
import { useShip } from "../context/ShipContext";
import CharacterCard from "./CardCharacter";
import type { Character } from "../models/charactersModels/interfaces";




const Engage = () => {

    const {inputEngage} = useShip();

    let renderCharacters:Character[] = [];
    if(localStorage.getItem("characters")){
        renderCharacters = JSON.parse(localStorage.getItem("characters")!);
    } else{
          const {characters} = useShip();
          renderCharacters = characters;
          localStorage.setItem("characters", JSON.stringify(characters));
    }
       
  return (
    <>
<div className="app-frame">
    <div className="header-bar">
        <h3>CANTINA (API Contratación)</h3>
        <p className="mb-0">VISTA: LA CANTINA (API)</p>
    </div>

    <div className="cantina-view">
        </div>

    <div className="p-3">
        <form className="d-flex mb-4">
            <div className="input-group">
                <span className="input-group-text bg-dark border-0 text-white" id="basic-addon1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </span>
                <input type="text" className="form-control bg-dark border-0 text-white" placeholder="BUSCAR CANDIDATO" aria-label="Buscar" aria-describedby="basic-addon1" value={inputEngage} />
            </div>
        </form>

        <div className="row row-cols-2 row-cols-md-4 g-3">

            {renderCharacters.map((character) => <CharacterCard {...character} />)}

        </div> 
    </div> 
    </div> 
   </>
    );
};

export default Engage;

