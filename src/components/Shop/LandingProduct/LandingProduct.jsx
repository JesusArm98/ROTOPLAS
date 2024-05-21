import { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useParams } from "react-router-dom";
import { Navigation } from "swiper/modules";
import ProductFilter from "./ProductFilter";
import "./styles.css";

const LandingProduct = ({ categoria, setCategoria }) => {
  const { key_word } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imagenes, setImagenes] = useState([]);
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://us-central1-tvn-api-store.cloudfunctions.net/app/getProductsByKeyWord?completo=true&key_word=${key_word}`
      )
      .then((response) => {
        console.log(response.data[0]);
        console.log(response.data[0].data.categorias[0]);
        setCategoria(response.data[0].data.categorias[0]);
        setProducts(response.data[0]);
        setDescripcion(response.data[0].data.descripcion);

        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
        setError(error);
        setLoading(false);
      });
  });

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

  return (
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
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
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
            products={products.data.variantes}
            setImagenes={setImagenes}
            descripcion={descripcion}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LandingProduct;
