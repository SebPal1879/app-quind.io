import { useParams } from "react-router-dom";
import BACKEND_URL from "../api/backendUrl";
import { useEffect, useState } from "react";
import axios from "axios";

function VerPaquete() {
  const { id } = useParams();
  const [paquete, setPaquete] = useState("");

  useEffect(
    function () {
      async function getPaquete() {
        try {
          const respuesta = await axios.get(`${BACKEND_URL}paquetes/${id}`);
          setPaquete(respuesta.data);
        } catch (e) {
          console.log(e);
          alert("No se encontró el paquete en cuestión");
        }
      }
      getPaquete();
    },
    [id]
  );

  return (
    <table>
      <thead>
        <th>ID</th>
        <th>Destinatario</th>
        <th>Estado</th>
        <th>Fecha creación</th>
        <th>Acción</th>
      </thead>
      <tbody>
        <td>{paquete.id}</td>
        <td>{paquete.nombre_destinatario}</td>
        <td>{paquete.estado}</td>
        <td>{paquete.fecha_creacion}</td>
        <td>Cambiar estado</td>
      </tbody>
    </table>
  );
}

export default VerPaquete;
