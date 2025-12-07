import { Link } from "react-router-dom";

import styleTabla from "../styles/Tabla.module.css";

function ListaPaquetes({ paquetes }) {
  return (
    <table className={styleTabla.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Destinatario</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {paquetes.map((paquete) => (
          <tr className={styleTabla.tr} key={paquete.id}>
            <td>
              <Link to={`${paquete.id}`}>{paquete.id}</Link>
            </td>
            <td>{paquete.nombre_destinatario}</td>
            <td>{paquete.estado}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListaPaquetes;
