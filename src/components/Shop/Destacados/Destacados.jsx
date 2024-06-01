import { Swiper, SwiperSlide } from "swiper/react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import "./Destacados.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const products = [
  {
    id: 1,
    cate: "Basicas",
    title: "Cisterna 5000 LT",
    description: "Descripción del Producto 1",
    category: "Cisternas",
    tag: "5000 LT",
    image: "/images/MegaMenu/icon-cisterna.svg",
    tipo: "cisternas",
  },
  {
    id: 2,
    cate: "Equipadas",
    title: "Cisterna 10000 LT",
    description: "Descripción del Producto 1",
    category: "Cisternas",
    tag: "10000 LT",
    image: "/images/MegaMenu/icon-cisterna.svg",
    tipo: "cisternas",
  },
  {
    id: 3,
    cate: "Equipadas",
    title: "Cisterna 5000 LT",
    description: "Descripción del Producto 1",
    category: "Cisternas",
    tag: "5000 LT",
    image: "/images/MegaMenu/icon-cisterna.svg",
    tipo: "cisternas",
  },
  {
    id: 4,
    cate: "Basicas",
    title: "Cisterna 10000 LT",
    description: "Descripción del Producto 1",
    category: "Cisternas",
    tag: "10000 LT",
    image: "/images/MegaMenu/icon-cisterna.svg",
    tipo: "cisternas",
  },
  {
    id: 5,
    title: "Tanque de Almacenamiento 5000 LT",
    description: "Descripción del Producto 2",
    category: "Tanques de Almacenamiento",
    tag: "5000 LT",
    image: "/images/MegaMenu/icon-tanques.svg",
    tipo: "tanques",
  },
  {
    id: 6,
    title: "Tanque de Almacenamiento 5001 LT",
    description: "Descripción del Producto 2",
    category: "Tanques de Almacenamiento",
    tag: "5001 LT",
    image: "/images/MegaMenu/icon-tanques.svg",
    tipo: "tanques",
  },
  {
    id: 7,
    title: "Tanque de Almacenamiento 10000 LT",
    description: "Descripción del Producto 2",
    category: "Tanques de Almacenamiento",
    tag: "10000 LT",
    image: "/images/MegaMenu/icon-tanques.svg",
    tipo: "tanques",
  },
  {
    id: 8,
    title: "Tanque de Almacenamiento 10001 LT",
    description: "Descripción del Producto 2",
    category: "Tanques de Almacenamiento",
    tag: "10000 LT",
    image: "/images/MegaMenu/icon-tanques.svg",
    tipo: "tanques",
  },
  {
    id: 9,
    title: "Tanque de Almacenamiento 15000 LT",
    description: "Descripción del Producto 2",
    category: "Tanques de Almacenamiento",
    tag: "15000 LT",
    image: "/images/MegaMenu/icon-tanques.svg",
    tipo: "tanques",
  },
  {
    id: 10,
    title: "Tanque de Almacenamiento 22000 LT",
    description: "Descripción del Producto 2",
    category: "Tanques de Almacenamiento",
    tag: "22000 LT",
    image: "/images/MegaMenu/icon-tanques.svg",
    tipo: "tanques",
  },
  {
    id: 11,
    title: "Tanque de Almacenamiento 25000 LT",
    description: "Descripción del Producto 2",
    category: "Tanques de Almacenamiento",
    tag: "25000 LT",
    image: "/images/MegaMenu/icon-tanques.svg",
    tipo: "tanques",
  },
  {
    id: 12,
    title: "Tolva 7000 LT",
    description: "Descripción del Producto 3",
    category: "Tolvas",
    tag: "7000 LT",
    image: "/images/MegaMenu/icon-tolvas.svg",
    tipo: "tolvas",
  },
  {
    id: 13,
    title: "Tolva 14000 LT",
    description: "Descripción del Producto 3",
    category: "Tolvas",
    tag: "14000 LT",
    image: "/images/MegaMenu/icon-tolvas.svg",
    tipo: "tolvas",
  },
  {
    id: 14,
    title: "Nodriza 5000 LT",
    description: "Descripción del Producto 4",
    category: "Nodrizas",
    tag: "5000 LT",
    image: "/images/MegaMenu/icon-nodrizas.svg",
    tipo: "nodrizas",
  },
  {
    id: 15,
    title: "Captador Plubial Rural 5000 LT",
    description: "Descripción del Producto 5",
    category: "Captador Plubial Rural",
    tag: "5000 LT",
    image: "/images/MegaMenu/icon-captador.svg",
    tipo: "captador",
  },
  {
    id: 16,
    title: "Captador Plubial Rural 10000 LT",
    description: "Descripción del Producto 5",
    category: "Captador Plubial Rural",
    tag: "10000 LT",
    image: "/images/MegaMenu/icon-captador.svg",
    tipo: "captador",
  },
];

const Destacados = () => {
  return (
    <Box
      sx={{
        height: "auto",
        width: "100%",
        backgroundColor: "#FFFFFF",
        backgroundImage: `url("data:image/svg+xml;utf8,<svg width='1728' height='944' viewBox='0 0 1728 944' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1728 162.759C1728 162.759 931.171 -216.239 -15 182.444L-2.97253 944L1728 944L1728 162.759Z' fill='%23F5FBFF'/></svg>")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center 5px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Raleway",
          fontSize: "36px",
          fontWeight: "600",
          color: "#002C72",
          margin: "0",
          paddingTop: "138px",
        }}
        component={"h1"}
      >
        Productos destacados
      </Typography>

      <Box
        sx={{
          width: "90%",
        }}
      >
        {" "}
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={12}
          style={{ width: "100%" }}
          slidesPerView={4}
          breakpoints={{
            // Cuando la pantalla es >= 320px, muestra 1 slide
            320: { slidesPerView: 1 },
            // Cuando la pantalla es >= 640px, muestra 2 slides
            640: { slidesPerView: 2 },
            // Cuando la pantalla es >= 960px, muestra 3 slides
            960: { slidesPerView: 3 },
            // Cuando la pantalla es >= 1280px, muestra 4 slides
            1280: { slidesPerView: 4 },
          }}
          sx={{
            "& .swiper-button-next, & .swiper-button-prev": {
              top: "50%",
              transform: "translateY(-50%)",
            },
            "& .swiper-button-next": {
              right: "20px",
              marginTop: "30px",
            },
            "& .swiper-button-prev": {
              left: "10px",
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center", // Centra el contenido verticalmente
                height: "100%", // Asegura que el SwiperSlide tenga altura completa
                backgroundColor: "#F5FBFF",
              }}
            >
              <Card
                sx={{
                  boxShadow: "3px 2px 15px 4px rgba(0, 0, 0, 0.15)",
                  borderRadius: "15px",
                  height: "458px",
                  display: "flex",
                  width: "320px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: 240,
                    width: 1, // Ocupa el 100% del ancho del contenedor
                    objectFit: "contain",
                  }}
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography
                    sx={{
                      height: "60px",
                      fontFamily: "Raleway",
                      fontWeight: "500",
                      fontSize: "22px",
                    }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {product.title}
                  </Typography>

                  <Button
                    variant="contained"
                    sx={{
                      marginTop: "22px",
                      borderRadius: "25px",
                      backgroundColor: "#0062B2",
                      "&:hover": {
                        backgroundColor: "#021E4A",
                      },
                    }}
                    color="primary"
                  >
                    Ver producto
                  </Button>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Button
        variant="contained"
        sx={{
          marginBottom: "48px",
          marginTop: "22px",
          borderRadius: "25px",
          height: "44px",
          backgroundColor: "#002C72",
          "&:hover": {
            backgroundColor: "#021E4A",
          },
        }}
        color="primary"
      >
        <Typography
          variant="p"
          sx={{ fontFamily: "Raleway", fontWeight: "700" }}
        >
          Explorar más productos
        </Typography>
      </Button>
    </Box>
  );
};

export default Destacados;
