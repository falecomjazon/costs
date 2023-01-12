import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "./componentes/layout/Container";
/* import Footer from "./componentes/layout/Footer"; 
import NavBar from "./componentes/layout/NavBar";*/
import Contato from "./componentes/pages/Contato";

import Home from "./componentes/pages/Home";
import NovoProjeto from "./componentes/pages/NovoProjeto";
import Projeto from "./componentes/pages/Projeto";
import Projetos from "./componentes/pages/Projetos";
function App() {
  return (
    <Container customClass="min-height">
        <Router>
         
            <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/contato" element={<Contato/>} />
              <Route path="/projetos" element={<Projetos/>} />
              <Route path="/novoprojeto" element={<NovoProjeto/>} />
              <Route path="/projeto/:id" element={<Projeto/>} />
            </Routes>
         
        </Router>
    </Container>
  );
}

export default App;
