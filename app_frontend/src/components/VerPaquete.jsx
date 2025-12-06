import { useParams } from "react-router-dom";
import BACKEND_URL from "../api/backendUrl";
import { useEffect, useState } from "react";
import axios from "axios";

function VerPaquete() {
  const { id } = useParams();
  const [paquete, setPaquete] = useState("");
  const [estadoForm, setEstadoForm] = useState("");

  const URL = `${BACKEND_URL}/${id}/estado`;

  function guardarCambio() {
    if (paquete.estado === estadoForm) {
      alert("El paquete ya está en este estado");
      return;
    }
  }

  function validadorEstado(estado) {
    if (paquete.estado === "Creado" && estado !== "En tránsito") {
      alert("Transición no válida");
      console.log(estadoForm);
      setEstadoForm(paquete.estado);
      return;
    }
    if (paquete.estado === "En tránsito" && estado !== "Entregado") {
      alert("Transición no válida");
      setEstadoForm(paquete.estado);
      return;
    }

    setEstadoForm(estado);
  }

  useEffect(
    function () {
      async function getPaquete() {
        try {
          const respuesta = await axios.get(`${BACKEND_URL}paquetes/${id}`);
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
        value={estadoForm}
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
