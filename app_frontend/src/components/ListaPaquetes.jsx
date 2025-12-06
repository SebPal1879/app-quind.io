function ListaPaquetes({ paquetes }) {
  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Destinatario</th>
        <th>Estado</th>
      </tr>
      {paquetes.map((paquete) => (
        <tr>
          <td>{paquete.id}</td>
          <td>{paquete.nombre_destinatario}</td>
          <td>{paquete.estado}</td>
        </tr>
      ))}
    </table>
  );
}

export default ListaPaquetes;
