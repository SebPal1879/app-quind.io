import { Link } from "react-router-dom";

function ListaPaquetes({ paquetes }) {
  return (
    <table>
      <thead>
        <th>ID</th>
        <th>Destinatario</th>
        <th>Estado</th>
      </thead>
      {paquetes.map((paquete) => (
        <tbody>
          <td>
            <Link to={`${paquete.id}`}>{paquete.id}</Link>
          </td>
          <td>{paquete.nombre_destinatario}</td>
          <td>{paquete.estado}</td>
        </tbody>
      ))}
    </table>
  );
}

export default ListaPaquetes;
