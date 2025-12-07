import { useNavigate } from "react-router-dom";

function BotonListaPaquetes() {
  const navigate = useNavigate();
  return (
    <button className="button" onClick={() => navigate("/paquetes/ver-todos")}>
      Volver a vista de paquetes
    </button>
  );
}

export default BotonListaPaquetes;
