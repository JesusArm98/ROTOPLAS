import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  Grid,
  Button,
  CardContent,
  Card,
  CardMedia,
  Chip,
} from "@mui/material";

export const Almacenamiento = ({ categoria, setCategoria }) => {
  const navigate = useNavigate();

  const buttonData = [
    {
      src: "/images/Almacenamiento/cisterna icon.svg",
      src2: "/images/Almacenamiento/cisterna icon blanco.svg",
      caption: "Cisterna",
      categoria: "Cisternas",
    },
    {
      src: "./images/Almacenamiento/icon tanques azul.svg",
      src2: "./images/Almacenamiento/icon tanques blanco.svg",
      caption: "Tanques de almacenamiento",
      categoria: "Tanques",
    },
    {
      src: "./images/Almacenamiento/tolvas icon.svg",
      src2: "./images/Almacenamiento/tolvas icon blanco.svg",
      caption: "Tolvas",
      categoria: "Tolvas",
    },
    {
      src: "./images/Almacenamiento/nodrizas icon.svg",
      src2: "./images/Almacenamiento/nodrizas icon blanco.svg",
      caption: "Nodrizas",
      categoria: "Nodrizas",
    },
    {
      src: "./images/Almacenamiento/icon captador.svg",
      src2: "./images/Almacenamiento/icon captador blanco.svg",
      caption: "Captador pluvial rural",
      categoria: "Captador",
    },
  ];

  const [selected, setSelected] = useState(0);

  const handleClick = (index, categoriaGuardar) => {
    setSelected(index);
    console.log(index);
    setCategoria(categoriaGuardar);
  };

  return (
    <Box
      sx={{
        height: "auto",
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Typography
        sx={{
          fontSize: "36px",
          fontWeight: "600",
          marginTop: "48px",
          color: "#002C72",
        }}
        component={"h1"}
      >
        Almacenamiento
      </Typography>

      {/* BOTONES DE SELECCION DE CATEGORIAS */}

      <Box sx={{ width: "90%", p: 2, marginTop: "64px" }}>
        <Grid container spacing={2}>
          {buttonData.map((button, index) => (
            <Grid item xs={12} sm={6} md={2.4} key={index}>
              <Button
                sx={{
                  width: 255,
                  height: 148,
                  boxShadow: "3px 2px 15px 4px rgba(0, 0, 0, 0.15)",
                  borderRadius: "15px",
                  padding: 0,
                  margin: "auto",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: selected === index ? "#002C72" : "#FFFFFF",
                  "&:hover": {
                    backgroundColor: selected === index ? "#001940" : "#f5f5f5",
                  },
                }}
                variant="contained"
                onClick={() => handleClick(index, button.categoria)}
              >
                <img
                  src={
                    selected === index && button.src2 ? button.src2 : button.src
                  }
                  alt="Button Image"
                  style={{
                    width: "72px",
                    height: "54px",
                    objectFit: "fit",
                    marginTop: "28px",
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    textAlign: "center",
                    mt: 2,
                    fontSize: "12px",
                    fontWeight: "600",
                    width: "100%",
                    color: selected === index ? "#FFFFFF" : "#0062B2",
                    paddingBottom: 2,
                  }}
                >
                  {button.caption}
                </Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* FIN BOTONES SELECTORES DE CATEGORIA */}

      {/* PRODUCTOS SELCTOR BOTON */}

      <Box
        sx={{
          flexGrow: 1,
          width: "80%",
          marginTop: "48px",

          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={6} sx={{ width: "100%" }}>
          {Array.from(Array(3)).map((_, index) => (
            <Grid item xs={4} key={index}>
              <Card
                sx={{
                  maxWidth: 459,
                  boxShadow: "3px 2px 15px 4px rgba(0, 0, 0, 0.15)",
                }}
              >
                <CardContent>
                  <Chip
                    label="NUEVO"
                    color="secondary"
                    sx={{
                      color: "#0062B2",
                      backgroundColor: "transparent",
                      fontWeight: "700",
                      fontSize: "22px",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="456"
                    image="./images/Almacenamiento/tanque-almacenamiento-25000 1.svg"
                    alt="Contenido de imagen"
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 2 }}
                    >
                      TANQUE 25000 L
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        mt: 2,
                        width: "169px",
                        height: "47px",
                        borderRadius: "50px",
                      }}
                    >
                      Ver producto
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              onClick={() => navigate(`/tienda/${categoria}`)}
              sx={{
                fontFamily: "Raleway",
                fontWeight: "700",
                marginTop: "64px",
                marginBottom: "48px",
                borderRadius: "25px",
                height: "44px",
                backgroundColor: "#002C72",
                "&:hover": {
                  backgroundColor: "#021E4A",
                },
              }}
              color="primary"
            >
              Explorar productos
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* PRODUCTOS MUESTRA DE CATEGORIA */}
    </Box>
  );
};
