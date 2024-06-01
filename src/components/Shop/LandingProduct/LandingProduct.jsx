import { useEffect, useState, useContext } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useParams } from "react-router-dom";
import { Navigation } from "swiper/modules";
import ProductFilter from "./ProductFilter";
import "./styles.css";
import { CartContext } from "../../context/CartContext";

const LandingProduct = ({ categoria, setCategoria }) => {
  const { key_word } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imagenes, setImagenes] = useState([]);
  const [descripcion, setDescripcion] = useState("");

  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get(
        `https://us-central1-tvn-api-store.cloudfunctions.net/app/getProductsByKeyWord?completo=true&key_word=${key_word}`
      )
      .then((response) => {
        const productData = response.data[0];
        if (productData) {
          setCategoria(productData.data.categorias[0] || "N/A");
          setProduct(productData);
          setDescripcion(productData.data.descripcion || "Sin descripción");
          setImagenes(productData.data.variantes[0]?.data.imagenes || []);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
        setError(error);
        setLoading(false);
      });
  }, [key_word, setCategoria]);

  if (loading) {
    return (
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography color="error">Error: {error.message}</Typography>
      </Box>
    );
  }

  if (!product) {
    return (
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography color="error">Producto no encontrado</Typography>
      </Box>
    );
  }

  return (
    <div className="landingProduct">
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          backgroundColor: "#FFFFFF",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "64px",
            backgroundColor: "#F5FBFF",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            position: "fixed",
            zIndex: "1001",
          }}
        >
          <Typography
            sx={{
              marginLeft: "78px",
              color: "#0062B2",
              fontWeight: "600",
              fontFamily: "Raleway",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {`TIENDA / ${categoria.toUpperCase()}`}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "92%",
            paddingTop: "20px",
            display: "flex",
            height: "fit-content",
            borderBottom: "2px solid #009FE3",
          }}
        >
          <Box sx={{ width: "820px" }}>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {imagenes.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="ImagenCarrusel"
                    src={src}
                    alt={`Imagen ${categoria} ${index + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          <Box sx={{ width: "100%", backgroundColor: "white" }}>
            <ProductFilter
              products={product.data.variantes.map((v) => v.data)}
              setImagenes={setImagenes}
              descripcion={descripcion}
            />
          </Box>
          <button
            onClick={() => {
              const selectedVariant = product.data.variantes[0].data; // Selecciona la variante correcta
              addItemToCart(product, selectedVariant);
            }}
          >
            Añadir al carrito
          </button>
        </Box>
      </Box>
    </div>
  );
};

export default LandingProduct;
