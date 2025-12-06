import VerPaquete from "./components/VerPaquete";
import VerTodosPaquetes from "./components/VerTodosPaquetes";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="paquetes" element={<Layout />}>
            <Route index element={<VerTodosPaquetes />} />
            <Route path=":id" element={<VerPaquete />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
