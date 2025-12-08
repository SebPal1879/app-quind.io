import { useEffect, useState } from "react";
import axios from "axios";

import ListaPaquetes from "./ListaPaquetes";
import BACKEND_URL from "../api/backendUrl";
import BotonListaPaquetes from "./BotonListaPaquetes";

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
      }
    }
    getPaquetes();
  }, []);

  return (
    <div>
      {paquetes ? (
        <>
          <p>Paquetes registrados</p>
          <ListaPaquetes paquetes={paquetes} />
        </>
      ) : (
        <>No se encontró ningún paquete</>
      )}
    </div>
  );
}

export default VerTodosPaquetes;
