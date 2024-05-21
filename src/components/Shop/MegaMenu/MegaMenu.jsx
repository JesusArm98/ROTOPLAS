import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  Grid,
  Typography,
  Paper,
  TextField,
  Autocomplete,
  IconButton,
  Box,
} from "@mui/material";
import "./MegaMenu.css"; // Asegúrate de tener un archivo CSS con este nombre

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import LoginForm from "../../SignIn";

function MegaMenu() {
  const products = [
    {
      id: 1,
      cate: "Basicas",
      title: "Cisterna 5000 L",
      description: "Descripción del Producto 1",
      category: "Cisternas",
      tag: "5000 L",
      image: "/images/MegaMenu/icon-cisterna.svg",
    },
    {
      id: 2,
      cate: "Equipadas",
      title: "Cisterna 10000 L",
      description: "Descripción del Producto 1",
      category: "Cisternas",
      tag: "10000 L",
      image: "/images/MegaMenu/icon-cisterna.svg",
    },
    {
      id: 3,
      cate: "Equipadas",
      title: "Cisterna 5000 L",
      description: "Descripción del Producto 1",
      category: "Cisternas",
      tag: "5000 L",
      image: "/images/MegaMenu/icon-cisterna.svg",
    },
    {
      id: 4,
      cate: "Basicas",
      title: "Cisterna 10000 L",
      description: "Descripción del Producto 1",
      category: "Cisternas",
      tag: "10000 L",
      image: "/images/MegaMenu/icon-cisterna.svg",
    },
    {
      id: 5,
      title: "Tanque de Almacenamiento 5000 L",
      description: "Descripción del Producto 2",
      category: "Tanques de Almacenamiento",
      tag: "5000 L",
      image: "/images/MegaMenu/icon-tanques.svg",
    },
    {
      id: 6,
      title: "Tanque de Almacenamiento 5001 L",
      description: "Descripción del Producto 2",
      category: "Tanques de Almacenamiento",
      tag: "5001 L",
      image: "/images/MegaMenu/icon-tanques.svg",
    },
    {
      id: 7,
      title: "Tanque de Almacenamiento 10000 L",
      description: "Descripción del Producto 2",
      category: "Tanques de Almacenamiento",
      tag: "10000 L",
      image: "/images/MegaMenu/icon-tanques.svg",
    },
    {
      id: 8,
      title: "Tanque de Almacenamiento 10001 L",
      description: "Descripción del Producto 2",
      category: "Tanques de Almacenamiento",
      tag: "10000 L",
      image: "/images/MegaMenu/icon-tanques.svg",
    },
    {
      id: 9,
      title: "Tanque de Almacenamiento 15000 L",
      description: "Descripción del Producto 2",
      category: "Tanques de Almacenamiento",
      tag: "15000 L",
      image: "/images/MegaMenu/icon-tanques.svg",
    },
    {
      id: 10,
      title: "Tanque de Almacenamiento 22000 L",
      description: "Descripción del Producto 2",
      category: "Tanques de Almacenamiento",
      tag: "22000 L",
      image: "/images/MegaMenu/icon-tanques.svg",
    },
    {
      id: 11,
      title: "Tanque de Almacenamiento 25000 L",
      description: "Descripción del Producto 2",
      category: "Tanques de Almacenamiento",
      tag: "25000 L",
      image: "/images/MegaMenu/icon-tanques.svg",
    },
    {
      id: 12,
      title: "Tolva 7000 L",
      description: "Descripción del Producto 3",
      category: "Tolvas",
      tag: "7000 L",
      image: "/images/MegaMenu/icon-tolvas.svg",
    },
    {
      id: 13,
      title: "Tolva 14000 L",
      description: "Descripción del Producto 3",
      category: "Tolvas",
      tag: "14000 L",
      image: "/images/MegaMenu/icon-tolvas.svg",
    },
    {
      id: 14,
      title: "Nodriza 5000 L",
      description: "Descripción del Producto 4",
      category: "Nodrizas",
      tag: "5000 L",
      image: "/images/MegaMenu/icon-nodrizas.svg",
    },
    {
      id: 15,
      title: "Captador Plubial Rural 5000 L",
      description: "Descripción del Producto 5",
      category: "Captador Plubial Rural",
      tag: "5000 L",
      image: "/images/MegaMenu/icon-captador.svg",
    },
    {
      id: 16,
      title: "Captador Plubial Rural 10000 L",
      description: "Descripción del Producto 5",
      category: "Captador Plubial Rural",
      tag: "10000 L",
      image: "/images/MegaMenu/icon-captador.svg",
    },
  ];

  const [loginOpen, setLoginOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event, newInputValue) =>
    setInputValue(newInputValue);
  const handleLoginDialogOpen = () => {
    setLoginOpen(true);
  };
  const handleLoginDialogClose = () => {
    setLoginOpen(false);
  };
  const toggleMenu = () => setMenuVisible(!menuVisible);

  // Agrupar productos por 'category', luego por 'cate' (subcategoría) y luego por 'tag'
  const categories = products.reduce((acc, product) => {
    const { category, cate, tag, image } = product;

    // Inicializa la categoría si aún no existe
    if (!acc[category]) {
      acc[category] = {
        image: image, // Guardar la primera imagen encontrada como representante de la categoría
        cates: {},
      };
    }

    // Asegúrate de que la subcategoría y el tag estén inicializados
    const level = cate || ""; // Usa un nivel genérico si no hay 'cate'
    acc[category].cates[level] = acc[category].cates[level] || {};
    acc[category].cates[level][tag] = acc[category].cates[level][tag] || [];
    acc[category].cates[level][tag].push(product);

    return acc;
  }, {});

  // Función para filtrar productos basados en la búsqueda
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <nav className="navbarShop">
      <ul className="navbarTiendaWeb">
        <li>
          <a
            href="https://www.facebook.com/jesusarmando.estradaaramburo/"
            target="_blank"
          >
            <img
              src="https://tuvanosa-com.web.app/images/Navbar/Group.svg"
              alt="Logo-Tuvanosa"
              style={{ width: "90%" }}
            />
          </a>
        </li>
        <Box sx={{ position: "relative" }}>
          <Button
            onClick={toggleMenu}
            sx={{
              color: "white",
              display: "flex",
              alignItems: "center",
              fontFamily: "Raleway",
              fontWeight: "500",
            }}
          >
            Productos <ArrowDropDownIcon />
          </Button>
          {menuVisible && (
            <Paper
              sx={{
                position: "absolute",
                width: "60vw",
                top: "80px",
                left: 0,
                zIndex: 1004,
                boxShadow: 3,
                alignItems: "center",
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
              }}
            >
              <Grid container spacing={0} sx={{ padding: 1 }}>
                {Object.entries(categories).map(([category, data]) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2.4}
                    key={category}
                  >
                    <img
                      src={data.image}
                      alt={`${category} icon`}
                      style={{
                        width: "27px",
                        height: "27px",
                        margin: "auto",
                        justifyContent: "center",
                        display: "flex",
                        paddingBottom: "5px",
                      }}
                    />
                    <Button
                      variant="h6"
                      sx={{
                        my: 2,
                        display: "flex",
                        width: "90%",
                        margin: "auto",
                        fontFamily: "Raleway",
                        fontWeight: "700",
                        color: "#002C72",
                        borderBottom: "2px solid #009FE3",
                        height: "63px",
                      }}
                    >
                      {category}
                    </Button>
                    {Object.entries(data.cates).map(([cate, tags]) => (
                      <div key={cate}>
                        {cate && (
                          <Typography
                            variant="subtitle1"
                            sx={{
                              mt: 1,
                              margin: "auto",
                              alignItems: "center",
                              fontFamily: "Raleway",
                              fontWeight: "700",
                              color: "#002C72",
                              paddingTop: "10px",
                            }}
                            className="typographyMenu"
                          >
                            {cate}
                          </Typography>
                        )}
                        <div className="buttonMenuShop">
                          {Object.entries(tags).map(([tag]) => (
                            <Button
                              key={tag}
                              variant="outlined"
                              sx={{
                                m: 1,
                                fontFamily: "Raleway",
                                fontWeight: "400",
                                color: "#002C72",
                                borderColor: "transparent",
                                width: "85px",
                              }}
                            >
                              {tag}
                            </Button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </Grid>
                ))}
              </Grid>
            </Paper>
          )}
        </Box>
        <Autocomplete
          freeSolo
          inputValue={inputValue}
          onInputChange={handleInputChange}
          options={filteredProducts.map((product) => product.title)}
          renderOption={(props, option) => (
            <li
              {...props}
              style={{
                fontFamily: "Raleway",
                fontWeight: "500",
                fontSize: "16px",
              }}
            >
              {option}
            </li>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <IconButton>
                    <SearchIcon style={{ color: "white" }} />
                  </IconButton>
                ),
              }}
              sx={{
                ".MuiInputBase-input": {
                  fontFamily: "Raleway", // Cambia la fuente del input
                  color: "white", // Asegura que el texto sea blanco
                },
                ".MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white", // Color del borde
                    borderRadius: "30px", // Radio del borde redondeado
                  },
                  "&:hover fieldset": {
                    borderColor: "white", // Color del borde al pasar el mouse
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // Color del borde cuando el campo está enfocado
                  },
                },
                ".MuiInputLabel-root": {
                  color: "white", // Color del label
                },
              }}
            />
          )}
          sx={{
            width: 400, // Ancho del TextField
            ".MuiAutocomplete-option": {
              fontFamily: "Raleway", // Cambia la fuente de todas las opciones
              fontSize: "16px", // Establece un tamaño de fuente unificado para las opciones
            },
          }}
        />
        <div className="inicioSesion">
          <button onClick={handleLoginDialogOpen}>
            <img src="\images\FooterShop\user-icon.svg" alt="Iniciar Sesión" />
            INICIAR SESION
          </button>
          <LoginForm open={loginOpen} onClose={handleLoginDialogClose} />
        </div>
        <li>
          <img
            style={{ width: "30px" }}
            src="\images\icono-carrito.svg"
            alt=""
          />
        </li>
      </ul>
      <div
        className="menuMovil"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor: "#1B1C3C",
        }}
      >
        <a href="">
          <img
            src="https://tuvanosa-com.web.app/images/Navbar/Group.svg"
            alt="TuvanosaLogo"
          />
        </a>
        <img style={{ width: "30px" }} src="\images\icono-carrito.svg" alt="" />
      </div>
    </nav>
  );
}

export default MegaMenu;
