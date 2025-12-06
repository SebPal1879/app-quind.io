import { Link } from "react-router-dom";

function ListaPaquetes({ paquetes }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Destinatario</th>
          <th>Estado</th>
        </tr>
      </thead>
      {paquetes.map((paquete) => (
        <tbody key={paquete.id}>
          <tr>
            <td>
              <Link to={`${paquete.id}`}>{paquete.id}</Link>
            </td>
            <td>{paquete.nombre_destinatario}</td>
            <td>{paquete.estado}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

export default ListaPaquetes;
