import { useEffect, useState } from "react";
import axios from "axios";

import ListaPaquetes from "./ListaPaquetes";
import BACKEND_URL from "../api/backendUrl";

const URL = `${BACKEND_URL}paquetes/`;

function VerTodosPaquetes() {
  const [paquetes, setPaquetes] = useState("");

  useEffect(function () {
    async function getPaquetes() {
      try {
        const respuesta = await axios.get(URL);
        console.log(respuesta);
        setPaquetes(respuesta.data);
      } catch (e) {
        console.log(e);
        alert("No se encontraron paquetes");
      }
    }
    getPaquetes();
  }, []);

  return (
    <div>
      <p>Paquetes registrados</p>
      {paquetes && <ListaPaquetes paquetes={paquetes} />}
    </div>
  );
}

export default VerTodosPaquetes;
