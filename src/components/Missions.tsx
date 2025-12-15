import { useShip } from "../context/ShipContext";

const Missions = () => {
  const {ship} = useShip();
  const crew = ship.crew;
  return (
    <>
    <div className="header">
        <h1>SALA DE MISIONES <span>(Formularios)</span></h1>
    </div>

    <div className="view-title">VISTA: SALA DE MISIONES</div>

    <form id="missionForm" action="#" method="POST" onSubmit={sendForm()}>
        <div className="content-area">
            <div className="map-container">
                <img src="https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg?_gl=1*1m588xw*_ga*OTczNzM5MjMyLjE3NDE1NDU3NzE.*_ga_8JE65Q40S6*czE3NjU4MjQ5MDYkbzIkZzEkdDE3NjU4MjQ5MzIkajM0JGwwJGgw" alt="Mapa Mundial de la Misión" ></img>
            </div>

            <div className="controls">
                <select name="planeta" className="control-button select-control" required>
                    <option value="" disabled selected>SELECCIONAR PLANETA</option>
                    <option value="marte">Marte</option>
                    <option value="venus">Venus</option>
                    <option value="jupiter">Júpiter</option>
                </select>
                
                <select name="tripulante" className="control-button select-control" required>
                    <option value="" disabled selected>ASIGNAR TRIPULANTE</option>
                    {
                      crew.map( (character) => {return  <option value={character.name}>{character.name}</option>;})
                    }
                </select>

                <button type="submit" className="control-button start-mission-button">INICIAR MISIÓN</button>
            </div>
        </div>
    </form>
    
    </>
  );
};

function sendForm(){

  const {ship} = useShip();
  const fuel = ship.fuelLevel;
  spendFuel()
  if(fuel==0 || fuel<0){

  }
}
export default Missions;