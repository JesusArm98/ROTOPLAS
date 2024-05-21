import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
import "./App.css";
import Alianzas from "./components/Alianzas/Alianzas";
import CollapseForm from "./components/Contacto/Contacto";
import Coordinaciones from "./components/Coordinaciones/Coordinaciones";
import Eventos from "./components/Eventos/Eventos";
import Footer from "./components/Footer/Footer";
import FundacionTuvanosa from "./components/FundacionTuvanosa/FundacionTuvanosa";
import Header from "./components/Header/Header";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import Sucursales from "./components/Sucursales/Sucursales";
import ScrollToTop from "./Hooks/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
// IMPORT DE TIENDA
// import { Almacenamiento } from "./components/Shop/Almacenamiento/Almacenamiento";
// import Categorias from "./components/Shop/Categorias/Categorias";
// import Destacados from "./components/Shop/Destacados/Destacados";
// import LandingProduct from "./components/Shop/LandingProduct/LandingProduct";
// import MegaMenu from "./components/Shop/MegaMenu/MegaMenu";
// import FooterShop from "./components/Shop/FooterShop/Footer";
// import HeaderNoticia from "./components/Shop/HeaderShop/HeaderShop";

function App() {
  // const categorias = ["Tolvas", "Cisternas", "Tanques", "Nodrizas", "Captador"];

  // const [categoria, setCategoria] = useState("Tanques");
  // const [idProducto, setIdProducto] = useState("");

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Rutas de la página principal */}
        <Route
          path="/"
          element={
            <>
              <HeaderMenu />
              <Navbar />
              <Header />
              <Coordinaciones />
              <Sucursales />
              <FundacionTuvanosa />
              <Eventos />
              <Alianzas />
              <CollapseForm />
              <Footer />
            </>
          }
        />

        {/* <Route
          path="/Tienda/*"
          element={
            <>
            
              <MegaMenu />
              <Routes>
                <Route
                  path=""
                  element={
                    <>
                      <HeaderNoticia />
                      <Almacenamiento
                        categoria={categoria}
                        setCategoria={setCategoria}
                      />
                      <Destacados />
                    </>
                  }
                />
                {categorias.map((categoria) => (
                  <Route
                    key={categoria}
                    path={categoria}
                    element={<Categorias categoria={categoria} />}
                  />
                ))}
                {categorias.map((categoria) => (
                  <Route
                    key={categoria}
                    path={`${categoria}/:key_word`}
                    element={
                      <LandingProduct
                        categoria={categoria}
                        idProducto={idProducto}
                        setCategoria={setCategoria}
                      />
                    }
                  />
                ))}
              </Routes>
              <FooterShop />
              
            </>
          }
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
