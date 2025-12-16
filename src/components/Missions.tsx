import { useEffect, useState } from "react";
import { useShip } from "../context/ShipContext";
import { getPlaces } from "../services/LocationsServices";

const Missions = async () => {
  const {ship} = useShip();
  const crew = ship.crew
  const places = await getPlaces();
  return (
    <>
    <div className="header">
        <h1>SALA DE MISIONES <span>(Formularios)</span></h1>
    </div>

    <div className="view-title">VISTA: SALA DE MISIONES</div>

    <form id="missionForm" action="#" method="POST" onSubmit={sendForm}>
        <div className="content-area">
            <div className="map-container">
                <img src="https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg?_gl=1*1m588xw*_ga*OTczNzM5MjMyLjE3NDE1NDU3NzE.*_ga_8JE65Q40S6*czE3NjU4MjQ5MDYkbzIkZzEkdDE3NjU4MjQ5MzIkajM0JGwwJGgw" alt="Mapa Mundial de la Misión" ></img>
            </div>

            <div className="controls">
                <select name="planeta" className="control-button select-control" required>
                    <option value="" disabled selected>SELECCIONAR PLANETA</option>
                    {
                      typeof places !== "string"
                        ? places.map((place) => (<option key={place.name} value={place.name}>{place.name}</option>))
                        : null
                    }
                </select>
                
                <select name="tripulante" className="control-button select-control" required>
                    <option value="" disabled selected>ASIGNAR TRIPULANTE</option>
                    {
                      crew.map( (character) => {return  <option key={character.id} value={character.name}>{character.name}</option>;})
                    }
                </select>

                <button type="submit" className="control-button start-mission-button">INICIAR MISIÓN</button>
            </div>
        </div>
    </form>
    
    </>
  );
};

function sendForm() {

  const {ship} = useShip();
  const fuel = ship.fuelLevel;
  if(fuel==0 || fuel<0){
    let isLoadingState = isLoading();
    return (
    <>
        {
            (isLoadingState)?<p>Cargando ...</p>:<p>Contenido Cargado.</p>
        }
    </>
    );
  }
}

/**
 * 
 * @returns true if app is loading
 */
function isLoading() :Boolean{

    const [loading, setLoading] = useState<boolean>(true);
    const {beginMission} = useShip();

    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false);
        }, 2000);

        if (!loading) { //Para que cuando cambie,  es decir valor inicial es false si cambia a true pues se realiza la function.
            beginMission();
        }

        return () => clearTimeout(timer); 
    }, []);

   return loading;
};

export default Missions;