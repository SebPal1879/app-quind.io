import { Outlet, Link, NavLink, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();
  return (
    <div>
      <p>Gestión de paquetes</p>
      <NavLink>
        <Link to={"crear"}>Crear paquete</Link>
        <Link to={"/paquetes"}>Ver paquetes</Link>
      </NavLink>
      <Outlet />
      <button onClick={() => navigate(-1)}>Retroceder</button>
    </div>
  );
}

export default Layout;
