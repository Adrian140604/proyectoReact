import { Link, Outlet } from "react-router-dom";
import ResourceBadge from "./ResourceBadge";
import { useShip } from "../context/ShipContext";
import gas from "../assets/img/gas.png";
import credits from "../assets/img/credits.png";

const Layout = () => {
  const {ship} = useShip();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top text-white">
        <div className="container-fluid">
          {/* He encontrado este boton que al hacer la pantalla mas peqeña desplaza el contenido del navBar a un desplegable, gracias Bootstrap */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/commandBridge">Command Bridge</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Engage">Engage</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Missions">Missions</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container my-4 d-flex">
          <div className="d-flex justify-content-center gap-3 ms-auto">
            <ResourceBadge icon={gas} label="Fuel" value={ship.fuelLevel} />
            <ResourceBadge icon={credits} label="Credits" value={ship.credits} />
          </div>
        </div>
      </nav>
      <div className="container" style={{ marginTop: "80px" }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
