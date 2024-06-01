import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Alianzas from "./components/Alianzas/Alianzas";
import Coordinaciones from "./components/Coordinaciones/Coordinaciones";
import Eventos from "./components/Eventos/Eventos";
import Footer from "./components/Footer/Footer";
import FundacionTuvanosa from "./components/FundacionTuvanosa/FundacionTuvanosa";
import Header from "./components/Header/Header";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import Sucursales from "./components/Sucursales/Sucursales";
import ScrollToTop from "./Hooks/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import ContactForm from "./components/Contacto/Contacto";
import CarritoCompra from "./components/Shop/CarritoCompra/CarritoCompra";

// IMPORT DE TIENDA
import { Almacenamiento } from "./components/Shop/Almacenamiento/Almacenamiento";
import Categorias from "./components/Shop/Categorias/Categorias";
import Destacados from "./components/Shop/Destacados/Destacados";
import LandingProduct from "./components/Shop/LandingProduct/LandingProduct";
import MegaMenu from "./components/Shop/MegaMenu/MegaMenu";
import FooterShop from "./components/Shop/FooterShop/Footer";
import HeaderNoticia from "./components/Shop/HeaderShop/HeaderShop";
import { CartProvider } from "./components/context/CartContext";
import Aviso from "./components/AvisoPrivacidad/Aviso";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const categorias = [
    "tolvas",
    "cisternas",
    "tanques",
    "nodrizas",
    "captador",
    "todas",
  ];
  const [categoria, setCategoria] = useState("tanques");
  const [capacidad, setCapacidad] = useState("");
  const [idProducto, setIdProducto] = useState("");

  useEffect(() => {
    fetch(
      "https://us-central1-tvn-api-store.cloudfunctions.net/app/getAllProducts"
    )
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    const filterProducts = (products) => {
      return products.filter((product) => {
        return (
          (categoria === "todas" || product.category === categoria) &&
          (capacidad === "" || product.capacidad === capacidad)
        );
      });
    };

    setFilteredProducts(filterProducts(products));
  }, [products, categoria, capacidad]);

  return (
    <CartProvider>
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
                <ContactForm />
                <Footer />
              </>
            }
          />
          <Route
            path="/tienda/carrito/*"
            element={
              <>
                <HeaderMenu />
                <Navbar />
                <Routes>
                  <Route
                    path=""
                    element={
                      <>
                        <CarritoCompra />
                      </>
                    }
                  />
                </Routes>
                <FooterShop />
              </>
            }
          />

          <Route
            path="/aviso-de-privacidad"
            element={
              <>
                <Navbar />
                <Aviso />
                <Footer />
              </>
            }
          />

          <Route
            path="/tienda/*"
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
                          setCapacidad={setCapacidad}
                        />
                        <Destacados products={filteredProducts} />
                      </>
                    }
                  />
                  {categorias.map((categoria) => (
                    <Route
                      key={categoria}
                      path={categoria}
                      element={
                        <Categorias
                          categoria={categoria}
                          products={filteredProducts}
                        />
                      }
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
                          products={filteredProducts}
                        />
                      }
                    />
                  ))}
                </Routes>
                <FooterShop />
              </>
            }
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
