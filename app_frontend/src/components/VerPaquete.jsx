import { useParams } from "react-router-dom";
import BACKEND_URL from "../api/backendUrl";
import { useEffect, useState } from "react";
import axios from "axios";

function VerPaquete() {
  const { id } = useParams();
  const [paquete, setPaquete] = useState("");
  const [estadoForm, setEstadoForm] = useState("");

  function guardarCambio() {
    if (paquete.estado === estadoForm) return;
  }

  function validadorEstado(estado) {
    if (paquete.estado === "CREADO" && estado !== "EN_TRANSITO") {
      alert("Transición no válida");
      setEstadoForm(paquete.estado);
    } else {
      setEstadoForm(estado);
    }

    if (paquete.estado === "EN_TRANSITO" && estado !== "ENTREGADO") {
      alert("Transición no válida");
      setEstadoForm(paquete.estado);
    } else {
      setEstadoForm(estado);
    }
  }

  useEffect(
    function () {
      async function getPaquete() {
        try {
          const respuesta = await axios.get(`${BACKEND_URL}paquetes/${id}`);
          console.log(respuesta);
          setPaquete(respuesta.data);
          setEstadoForm(respuesta.data.estado);
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
          <th>ID</th>
          <th>Destinatario</th>
          <th>Fecha creación</th>
          <th>Estado</th>
        </thead>
        <tbody>
          <td>{paquete.id}</td>
          <td>{paquete.nombre_destinatario}</td>
          <td>{paquete.fecha_creacion}</td>
          <td>{paquete.estado}</td>
        </tbody>
      </table>

      <label htmlFor="estados">Cambiar estado</label>
      <select
        name="opciones"
        id="estados"
        value={estadoForm}
        onChange={(e) => validadorEstado(e.target.value)}
      >
        <option value="CREADO" disabled={paquete.estado === "CREADO"}>
          Creado
        </option>
        <option value="EN_TRANSITO" disabled={paquete.estado === "EN_TRANSITO"}>
          En tránsito
        </option>
        <option value="ENTREGADO" disabled={paquete.estado === "ENTREGADO"}>
          Entregado
        </option>
      </select>
      <button onClick={() => guardarCambio()}>Guardar</button>
    </div>
  );
}

export default VerPaquete;
