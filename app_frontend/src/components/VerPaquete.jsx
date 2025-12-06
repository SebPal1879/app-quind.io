import { useParams } from "react-router-dom";
import BACKEND_URL from "../api/backendUrl";
import { useEffect, useState } from "react";
import axios from "axios";

function VerPaquete() {
  const { id } = useParams();
  const [paquete, setPaquete] = useState("");
  const [estadoSelect, setEstadoSelect] = useState("");

  const URL = `${BACKEND_URL}paquetes/${id}/estado/`;

  function guardarCambio() {
    if (paquete.estado === estadoSelect) {
      alert("El paquete ya está en este estado");
      return;
    } else {
      async function actualizarEstado() {
        try {
          const response = await axios.put(URL);
          if (response.status == 202) {
            setPaquete(response.data);
          }
          alert("Cambiado exitosamente");
        } catch (e) {
          console.log(e);
          alert("No se pudo efectuar el cambio");
        }
      }
      actualizarEstado();
    }
  }

  function validadorEstado(estado) {
    if (paquete.estado === "Creado" && estado !== "En tránsito") {
      alert("Transición no válida");
      console.log(estadoSelect);
      setEstadoSelect(paquete.estado);
      return;
    }
    if (paquete.estado === "En tránsito" && estado !== "Entregado") {
      alert("Transición no válida");
      setEstadoSelect(paquete.estado);
      return;
    }

    setEstadoSelect(estado);
  }

  useEffect(
    function () {
      async function getPaquete() {
        try {
          const respuesta = await axios.get(`${BACKEND_URL}paquetes/${id}`);
          setPaquete(respuesta.data);
          setEstadoSelect(respuesta.data.estado);
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
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatario</th>
            <th>Fecha creación</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{paquete.id}</td>
            <td>{paquete.nombre_destinatario}</td>
            <td>{paquete.fecha_creacion}</td>
            <td>{paquete.estado}</td>
          </tr>
        </tbody>
      </table>

      <label htmlFor="estados">Cambiar estado</label>
      <select
        name="opciones"
        id="estados"
        value={estadoSelect}
        onChange={(e) => validadorEstado(e.target.value)}
      >
        <option value="Creado">Creado</option>
        <option value="En tránsito">En tránsito</option>
        <option value="Entregado">Entregado</option>
      </select>
      <button onClick={() => guardarCambio()}>Guardar</button>
    </div>
  );
}

export default VerPaquete;
