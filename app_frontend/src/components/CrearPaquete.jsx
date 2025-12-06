import { useState } from "react";
import axios from "axios";

import BACKEND_URL from "../api/backendUrl";

const URL = `${BACKEND_URL}paquetes/`;

function CrearPaquete() {
  const [nombreDestinatario, setNombreDestinatario] = useState("");
  const [direccion, setDireccion] = useState("");

  function crearPaquete() {
    if (!nombreDestinatario) return;
    if (!direccion) return;

    const data = {
      nombre_destinatario: nombreDestinatario,
      direccion,
    };

    async function crearEnAPI() {
      try {
        const response = await axios.post(URL, data);
        if (response.status === 201) {
          alert("Paquete creado con éxito");
        }
      } catch (e) {
        console.log(e);
        alert("No se pudo crear el paquete");
      }
    }

    crearEnAPI();
  }

  return (
    <div>
      <form onSubmit={crearPaquete}>
        <label htmlFor="nombre">Nombre del destinatario</label>
        <input
          type="text"
          id="nombre"
          value={nombreDestinatario}
          required
          onChange={(e) => setNombreDestinatario(e.target.value)}
        />

        <label htmlFor="direccion">Dirección</label>
        <input
          type="text"
          id="direccion"
          value={direccion}
          required
          onChange={(e) => setDireccion(e.target.value)}
        />

        <button>Crear</button>
      </form>
    </div>
  );
}

export default CrearPaquete;
