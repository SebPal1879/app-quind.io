import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <p>Gestión de paquetes</p>
      <Outlet />
    </div>
  );
}

export default Layout;
