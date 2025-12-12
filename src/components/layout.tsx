import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/puenteDeMando">Puente de Mando</Link>
        <Link to="/contratar">Contratar</Link>
        <Link to="/misiones">Misiones</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;