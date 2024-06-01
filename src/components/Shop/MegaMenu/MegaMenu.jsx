import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
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
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import LoginForm from "../../SignIn";
import MegaMenuMovil from "./MegaMenuMovil";
import { CartContext } from "../../context/CartContext";

function MegaMenu() {
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const { getTotalQuantity } = useContext(CartContext);
  const totalQuantity = getTotalQuantity();

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
      productLink: "CISTERNA-5000-LT-NM-SIN-EQUIPO",
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
      productLink: "CISTERNA-10000-LT-NM-SIN-EQUIPO",
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
      productLink: "CISTERNA-5000-LT-NM-EQUIPADA",
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
      productLink: "CISTERNA-10000-LT-NM-EQUIPADA",
    },
    {
      id: 5,
      title: "Tanque de Almacenamiento 5000 LT",
      description: "Descripción del Producto 2",
      category: "Tanques de Almacenamiento",
      tag: "5000 LT",
      image: "/images/MegaMenu/icon-tanques.svg",
      tipo: "tanques",
      productLink: "TANQUE-VERTICAL-5000-LT-STD-NEGRO",
    },
    {
      id: 6,
      title: "Tanque de Almacenamiento 5001 LT",
      description: "Descripción del Producto 2",
      category: "Tanques de Almacenamiento",
      tag: "5001 LT",
      image: "/images/MegaMenu/icon-tanques.svg",
      tipo: "tanques",
      productLink: "TANQUE-VERTICAL-5001-LT-STD-NEGRO",
    },
    {
      id: 7,
      title: "Tanque de Almacenamiento 10000 LT",
      description: "Descripción del Producto 2",
      category: "Tanques de Almacenamiento",
      tag: "10000 LT",
      image: "/images/MegaMenu/icon-tanques.svg",
      tipo: "tanques",
      productLink: "TANQUE-VERTICAL-10000-LT-STD-NEGRO",
    },
    {
      id: 8,
      title: "Tanque de Almacenamiento 10001 LT",
      description: "Descripción del Producto 2",
      category: "Tanques de Almacenamiento",
      tag: "10000 LT NM",
      image: "/images/MegaMenu/icon-tanques.svg",
      tipo: "tanques",
      productLink: "TANQUE-VERTICAL-10000-LT-NM-STD-NEGRO",
    },
    {
      id: 9,
      title: "Tanque de Almacenamiento 15000 LT",
      description: "Descripción del Producto 2",
      category: "Tanques de Almacenamiento",
      tag: "15000 LT",
      image: "/images/MegaMenu/icon-tanques.svg",
      tipo: "tanques",
      productLink: "TANQUE-VERTICAL-15000-LT-NM-STD-NEGRO",
    },
    {
      id: 10,
      title: "Tanque de Almacenamiento 22000 LT",
      description: "Descripción del Producto 2",
      category: "Tanques de Almacenamiento",
      tag: "22000 LT",
      image: "/images/MegaMenu/icon-tanques.svg",
      tipo: "tanques",
      productLink: "TANQUE-VERTICAL-22000-LT-STD-NEGRO",
    },
    {
      id: 11,
      title: "Tanque de Almacenamiento 25000 LT",
      description: "Descripción del Producto 2",
      category: "Tanques de Almacenamiento",
      tag: "25000 LT",
      image: "/images/MegaMenu/icon-tanques.svg",
      tipo: "tanques",
      productLink: "TANQUE-VERTICAL-25000-LT-STD-NEGRO",
    },
    {
      id: 12,
      title: "Tolva 7000 LT",
      description: "Descripción del Producto 3",
      category: "Tolvas",
      tag: "7000 LT",
      image: "/images/MegaMenu/icon-tolvas.svg",
      tipo: "tolvas",
      productLink: "TOLVA-7000-LT-STD-NEGRO",
    },
    {
      id: 13,
      title: "Tolva 14000 LT",
      description: "Descripción del Producto 3",
      category: "Tolvas",
      tag: "14000 LT",
      image: "/images/MegaMenu/icon-tolvas.svg",
      tipo: "tolvas",
      productLink: "TOLVA-14000-LT-STD-NEGRO",
    },
    {
      id: 14,
      title: "Nodriza 5000 LT",
      description: "Descripción del Producto 4",
      category: "Nodrizas",
      tag: "5000 LT",
      image: "/images/MegaMenu/icon-nodrizas.svg",
      tipo: "nodrizas",
      productLink: "TANQUE-H-NODRIZA-5000-LT-STD-NEGRO",
    },
  ];

  const [loginOpen, setLoginOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isMegaMenuVisible, setIsMegaMenuVisible] = useState(true);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.getElementById("footerShop");
      if (footerElement) {
        const rect = footerElement.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsMegaMenuVisible(!isVisible);
        setIsNavbarVisible(!isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const StyledBadge = styled(Badge)(() => ({
    "& .MuiBadge-badge": {
      horizontal: "right",
      vertical: "top",
      padding: "0 4px",
      position: "absolute",
      zIndex: "-1",
    },
  }));

  const handleInputChange = (event, newInputValue) =>
    setInputValue(newInputValue);
  const handleLoginDialogOpen = () => {
    setLoginOpen(true);
  };
  const handleLoginDialogClose = () => {
    setLoginOpen(false);
  };
  const toggleMenu = () => setMenuVisible(!menuVisible);

  const categories = products.reduce((acc, product) => {
    const { tipo, cate, tag, image, category, productLink } = product;

    if (!acc[tipo]) {
      acc[tipo] = {
        image: image,
        categoryName: category,
        cates: {},
      };
    }

    const level = cate || "";
    acc[tipo].cates[level] = acc[tipo].cates[level] || [];
    acc[tipo].cates[level].push({ tag, productLink });

    return acc;
  }, {});

  const filteredProducts = products.filter((product) =>
    product.title.toUpperCase().includes(inputValue.toUpperCase())
  );

  const handleTagClick = (tipo, productLink) => {
    const newPath = `/tienda/${tipo.toUpperCase()}/${productLink.toUpperCase()}`;
    console.log("Navigating to:", newPath);
    if (window.location.pathname !== newPath) {
      navigate(newPath);
    }
    setMenuVisible(false);
  };

  const handleTipoClick = (tipo) => {
    const newPath = `/tienda/${tipo.toUpperCase()}`;
    if (window.location.pathname !== newPath) {
      navigate(newPath);
    }
    setMenuVisible(false);
  };

  if (!isMegaMenuVisible || !isNavbarVisible) {
    return null;
  }

  return (
    <nav
      className="navbarShop"
      style={{ display: isNavbarVisible ? "block" : "none" }}
    >
      <ul className="navbarTiendaWeb">
        <li>
          <Link to="/tienda">
            <img
              src="https://tuvanosa-com.web.app/images/Navbar/Group.svg"
              alt="Logo-Tuvanosa"
              style={{ width: "70%" }}
            />
          </Link>
        </li>
        <Box sx={{ position: "relative" }} ref={menuRef}>
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
                maxWidth: "1500px",
                top: "70px",
                left: 0,
                zIndex: "1001",
                boxShadow: 3,
                alignItems: "center",
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
              }}
            >
              <Grid container spacing={0} sx={{ padding: 1 }}>
                {Object.entries(categories).map(([tipo, data]) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={tipo}>
                    <img
                      src={data.image}
                      alt={`${tipo} icon`}
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
                      onClick={() => handleTipoClick(tipo)}
                    >
                      {data.categoryName}
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
                          {Array.isArray(tags) &&
                            tags.map(({ tag, productLink }) => (
                              <Button
                                key={tag}
                                variant="outlined"
                                sx={{
                                  m: 1,
                                  fontFamily: "Raleway",
                                  fontWeight: "400",
                                  color: "#002C72",
                                  borderColor: "transparent",
                                  width: "130px",
                                }}
                                onClick={() =>
                                  handleTagClick(tipo, productLink)
                                }
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
                    <SearchIcon
                      sx={{
                        color: isFocused ? "blue" : "white", // Cambia el color del ícono aquí
                        zIndex: 1005,
                      }}
                    />
                  </IconButton>
                ),
                onFocus: handleFocus,
                onBlur: handleBlur,
                style: {
                  color: isFocused ? "black" : "white", // Cambia el color del texto aquí
                },
              }}
              sx={{
                "& .MuiInputBase-input": {
                  fontFamily: "Raleway",
                  color: "white", // Color inicial del texto
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                    borderRadius: "15px",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "blue",
                    backgroundColor: "rgba(255,255,255,1)",
                  },
                  "&.Mui-focused .MuiInputBase-input": {
                    color: "black",
                    zIndex: 1005, // Color del texto cuando está enfocado
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& input::placeholder": {
                  color: "red",
                  opacity: 1,
                },
              }}
            />
          )}
          sx={{
            width: 800,
            "& .MuiAutocomplete-option": {
              fontFamily: "Raleway",
              fontSize: "16px",
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

        <StyledBadge badgeContent={totalQuantity} color="error" showZero>
          <ShoppingCartIcon
            sx={{ fontSize: "40px", zIndex: 1000 }}
            onClick={() => navigate("/tienda/carrito")}
          />
        </StyledBadge>
      </ul>
      <div
        className="menuMovil"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor: "#1B1C3C",
          zIndex: 1010,
        }}
      >
        <MegaMenuMovil />
        <Link to="/tienda" style={{ justifyContent: "center", width: "auto" }}>
          <img
            src="https://tuvanosa-com.web.app/images/Navbar/Group.svg"
            alt="TuvanosaLogo"
            style={{
              width: "60%",
              marginTop: "10px",
              marginBottom: "10px",
              marginLeft: "20%",
              alignItems: "center",
            }}
          />
        </Link>
        <StyledBadge badgeContent={totalQuantity} color="error" showZero>
          <ShoppingCartIcon
            sx={{ fontSize: "40px", zIndex: 1000 }}
            onClick={() => navigate("/tienda/carrito")}
          />
        </StyledBadge>
      </div>
    </nav>
  );
}

export default MegaMenu;
