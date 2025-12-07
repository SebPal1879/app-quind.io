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

function useCustomModal() {
  const [showModal, setShowModal] = useState(false);

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
        {children}
      </Modal>
    );
  }

  return { showModal, setShowModal, CustomModal };
}

export default useCustomModal;
