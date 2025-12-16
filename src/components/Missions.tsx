import { useState } from "react";
import { useShip } from "../context/ShipContext";


const Missions = () => {
  const {ship, locations, spendFuel, earnRandomMoney} = useShip();
  const crew = ship.crew
  const [option, setOption] = useState<string>("");
  
  function sendForm(e:React.ChangeEvent<HTMLFormElement>){
        e.preventDefault();

      if (ship.fuelLevel < 25) {
        alert("No hay combustible suficiente para realizar el viaje");
        return;
      }
      spendFuel();
      setTimeout(() => {
        earnRandomMoney();
        alert("El viaje ha sido exitoso");
        setOption("");
      }, 2000);
}
  

  function handleChange(e:React.ChangeEvent<HTMLSelectElement>){
    setOption(e.target.value);
  }

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
                <select name="planeta" className="control-button select-control" required value={option} onChange={handleChange}>
                    {
                      typeof locations !== "string"
                        ? locations.map((place) => (<option key={place.name} value={place.name}>{place.name}</option>))
                        : null
                    }
                </select>
                
              { crew.length>0 && <select name="tripulante" className=" m-2 control-button select-control" required>
                    {
                      crew.map( (character) => {return  <option key={character.id} value={character.name}>{character.name}</option>;})
                    }
                </select>}

                {crew.length ==0 && <span className =" m-2 text-danger fw-bold small p-1 border border-danger rounded bg-danger bg-opacity-10 d-inline-block text-center">No existen tripulantes todavía</span>}

               {crew.length>0 && <button type="submit" className="control-button start-mission-button">INICIAR MISIÓN</button>}
            </div>
        </div>
    </form>
    
    </>
  );
};

export default Missions;