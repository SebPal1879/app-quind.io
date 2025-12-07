import { useParams } from "react-router-dom";
import BACKEND_URL from "../api/backendUrl";
import { useEffect, useState } from "react";
import axios from "axios";

import Modal from "react-modal";

import styleTabla from "../styles/Tabla.module.css";
import style from "../styles/VerPaquete.module.css";
import BotonListaPaquetes from "./BotonListaPaquetes";

const modalStyles = {
  content: {
    width: "400px",
    height: "150px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function VerPaquete() {
  const { id } = useParams();
  const [paquete, setPaquete] = useState("");

  const [showModal, setShowModal] = useState(false);

  const URL = `${BACKEND_URL}paquetes/${id}/estado/`;

  function guardarCambio() {
    async function actualizarEstado() {
      try {
        const response = await axios.put(URL);
        if (response.status == 202) {
          setPaquete(response.data);
        }
        alert("Cambiado exitosamente");
        setShowModal(false);
      } catch (e) {
        console.log(e);
        alert("No se pudo efectuar el cambio");
        setShowModal(false);
      }
    }
    actualizarEstado();
  }

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
    <div>
      {paquete && (
        <>
          <table className={styleTabla.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Destinatario</th>
                <th>Fecha creación</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styleTabla.tr}>
                <td>{paquete.id}</td>
                <td>{paquete.nombre_destinatario}</td>
                <td>{paquete.fecha_creacion}</td>
                <td>{paquete.estado}</td>
              </tr>
            </tbody>
          </table>

          <div className={style.menuBotones}>
            <BotonListaPaquetes />

            {paquete.estado !== "Entregado" && (
              <button
                className="button"
                onClick={() => setShowModal(true)}
                disabled={paquete.estado === "Entregado"}
              >
                {paquete.estado === "Creado" &&
                  "Cambiar paquete a «en tránsito»"}
                {paquete.estado === "En tránsito" &&
                  "Cambiar paquete a «entregado»"}
              </button>
            )}
          </div>

          <Modal isOpen={showModal} style={modalStyles}>
            <div>
              <div
                style={{
                  width: "100%",
                  height: "24px",
                }}
              >
                <img
                  src="/x_icon.svg"
                  onClick={() => setShowModal(false)}
                  style={{
                    width: "20px",
                    height: "20px",
                    display: "block",
                    marginLeft: "auto",
                  }}
                />
              </div>
            </div>
            <p>¿Deseas confirmar esta acción?</p>
            <div className={style.confirmar}>
              <button className="button" onClick={() => setShowModal(false)}>
                No, retroceder
              </button>
              <button className="button" onClick={guardarCambio}>
                Sí, confirmar
              </button>
            </div>
          </Modal>
        </>
      )}
      {paquete ? "" : <>No se encontró ningún paquete con este ID</>}
    </div>
  );
}

export default VerPaquete;
