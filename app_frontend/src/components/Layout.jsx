import { Outlet, Link, NavLink } from "react-router-dom";

import styles from "../styles/Layout.module.css";

function Layout() {
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
    </div>
  );
}

export default Layout;
