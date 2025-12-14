import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/commandBridge">Command Bridge</Link>
        <Link to="/Engage">Engage</Link>
        <Link to="/Missions">Missions</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;