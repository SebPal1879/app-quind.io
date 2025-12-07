import { useState } from "react";
import Modal from "react-modal";

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
// Los argumentos setState e inicial se usan para alterar el state de un componente externo que llama a useCustomModal
// Sirven para que, al cerrar el modal, se pueda reiniciar el state a un valor dado por el componente externo.
// De esta manera, dicho componente externo puede mandar children a conveniencia generados por state (ej: antes de actualizar, después de actualizar, etc.)
function useCustomModal(setState, inicial) {
  const [showModal, setShowModal] = useState(false);

  function onCloseModal() {
    setShowModal(false);
    setState(inicial);
  }

  function CustomModal({ children }) {
    return (
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
              onClick={onCloseModal}
              style={{
                width: "20px",
                height: "20px",
                display: "block",
                marginLeft: "auto",
              }}
            />
          </div>
        </div>
        {children}
      </Modal>
    );
  }

  return { showModal, setShowModal, CustomModal };
}

export default useCustomModal;
