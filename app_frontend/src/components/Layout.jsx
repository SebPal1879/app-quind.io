import { Outlet, Link, NavLink, useNavigate } from "react-router-dom";

import styles from "../styles/Layout.module.css";

function Layout() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to={"ver-todos"}>Ver paquetes</NavLink>
          </li>
          <li>
            <NavLink to={"crear"}>Crear paquete</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
      <button className="button" onClick={() => navigate(-1)}>
        Retroceder
      </button>
    </div>
  );
}

export default Layout;
