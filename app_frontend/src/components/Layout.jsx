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
      <div className={styles.buttonSpace}>
        <button className={styles.button} onClick={() => navigate(-1)}>
          Retroceder
        </button>
      </div>
    </div>
  );
}

export default Layout;
