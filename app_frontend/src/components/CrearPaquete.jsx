import { useState } from "react";
import axios from "axios";

import BACKEND_URL from "../api/backendUrl";

import style from "../styles/Crear.module.css";
import BotonListaPaquetes from "./BotonListaPaquetes";
import useCustomModal from "../functions/useCustomModal";

const URL = `${BACKEND_URL}paquetes/`;

function CrearPaquete() {
  const [modalEvent, setModalEvent] = useState("");
  const { setShowModal, CustomModal } = useCustomModal(setModalEvent, "");
  const [nombreDestinatario, setNombreDestinatario] = useState("");
  const [direccion, setDireccion] = useState("");

  function crearPaquete(e) {
    e.preventDefault();
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
          setModalEvent("creado");
          setShowModal(true);
          setNombreDestinatario("");
          setDireccion("");
        }
      } catch (e) {
        console.log(e);
        setModalEvent("fallido");
        setShowModal(true);
      }
    }

    crearEnAPI();
  }

  return (
    <div>
      <div className={style.container}>
        <form onSubmit={(e) => crearPaquete(e)} className={style.form}>
          <div>
            <label htmlFor="nombre">Nombre del destinatario:</label>
            <input
              type="text"
              id="nombre"
              value={nombreDestinatario}
              required
              onChange={(e) => setNombreDestinatario(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="direccion">Dirección:</label>
            <input
              type="text"
              id="direccion"
              value={direccion}
              required
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>

          <div className="buttonSpace">
            <button className={"button"}>Crear</button>
          </div>
        </form>
      </div>
      <BotonListaPaquetes />
      <CustomModal>
        {modalEvent === "creado" && <>Paquete creado con éxito</>}
        {modalEvent === "fallido" && <>No se pudo crear el paquete</>}
      </CustomModal>
    </div>
  );
}

export default CrearPaquete;
