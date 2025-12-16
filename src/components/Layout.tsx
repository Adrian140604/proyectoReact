import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
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
      </nav>
      <div className="container" style={{ marginTop: "80px" }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
