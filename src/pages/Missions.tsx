import { useState } from "react";
import { useShip } from "../context/ShipContext";

const Missions = () => {
  const { ship, locations, spendFuel, earnRandomMoney } = useShip();
  const crew = ship.crew;
  const [option, setOption] = useState<string>("");

  function sendForm(e: React.FormEvent<HTMLFormElement>) {
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

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setOption(e.target.value);
  }

  return (
    <div className="container py-4">
      {/* Header Estilizado */}
  
      <div className="card shadow-lg border-0 overflow-hidden">
        <form id="missionForm" onSubmit={sendForm}>
          <div className="row g-0">
            
            {/* Contenedor del Mapa */}
            <div className="col-lg-7 bg-black d-flex align-items-center justify-content-center" style={{ minHeight: "300px" }}>
              <img 
                src="https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg" 
                alt="Mapa Mundial" 
                className="img-fluid opacity-75"
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            </div>

            {/* Controles de Misión */}
            <div className="col-lg-5 p-4 bg-light d-flex flex-column justify-content-center">
              <h3 className="h5 mb-4 text-uppercase fw-bold text-secondary border-bottom pb-2">Configuración de Vuelo</h3>
              
              {/* Selección de Destino */}
              <div className="mb-3">
                <label className="form-label fw-bold small text-muted">DESTINO:</label>
                <select 
                  className="form-select form-select-lg shadow-sm" 
                  required 
                  value={option} 
                  onChange={handleChange}
                >
                  <option value="" disabled>Selecciona un lugar...</option>
                  {typeof locations !== "string" && 
                    locations.map((place) => (
                      <option key={place.name} value={place.name}>{place.name}</option>
                    ))
                  }
                </select>
              </div>

              {/* Selección de Tripulante */}
              <div className="mb-4">
                <label className="form-label fw-bold small text-muted">COMANDANTE A CARGO:</label>
                {crew.length > 0 ? (
                  <select name="tripulante" className="form-select shadow-sm" required>
                    <option value="" disabled>Selecciona un Tripulante...</option>
                    {crew.map((character) => (
                      <option key={character.id} value={character.name}>
                        🧑‍🚀 {character.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className="alert alert-danger py-2 px-3 m-0 d-flex align-items-center" role="alert">
                    <span className="me-2">⚠️</span>
                    <small className="fw-bold text-uppercase">No existen tripulantes todavía</small>
                  </div>
                )}
              </div>

              {/* Botón de Acción */}
              {crew.length > 0 ? (
                <button 
                  type="submit" 
                  className="btn btn-warning btn-lg w-100 fw-bold shadow hover-zoom"
                >
                  🚀 INICIAR MISIÓN
                </button>
              ) : (
                <button className="btn btn-secondary btn-lg w-100" disabled>
                  BLOQUEADO
                </button>
              )}

              {/* Info de Combustible */}
              <div className="mt-3 text-center">
                <small className="text-muted">Consumo estimado: <span className="text-danger fw-bold">25L</span></small>
              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Missions;