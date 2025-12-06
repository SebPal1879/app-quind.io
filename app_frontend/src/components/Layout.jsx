import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <p>Vista</p>
      <Outlet />
    </div>
  );
}

export default Layout;
