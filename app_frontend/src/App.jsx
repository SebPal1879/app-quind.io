import VerPaquete from "./components/VerPaquete";
import VerTodosPaquetes from "./components/VerTodosPaquetes";
import CrearPaquete from "./components/CrearPaquete";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Gestión de paquetes</h1>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to="paquetes" />} />
          <Route path="paquetes" element={<Layout />}>
            <Route path="ver-todos" element={<VerTodosPaquetes />} />
            <Route path=":id" element={<VerPaquete />} />
            <Route path="crear" element={<CrearPaquete />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
