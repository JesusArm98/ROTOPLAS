import React, { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import StoreIcon from "@mui/icons-material/Store";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import LoginForm from "../../SignIn";
import Search from "../../Search";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const MegaMenuMovil = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState("");
  const [navValue, setNavValue] = useState(0);
  const [openStoreModal, setOpenStoreModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);

  const navigate = useNavigate();

  const toggleMenu = () => {
    if (isOpen) {
      setAnimation("slideOut 0.5s forwards");
    } else {
      setAnimation("slideIn 0.5s forwards");
    }
    setIsOpen(!isOpen);
  };

  const handleLoginDialogClose = () => {
    setOpenLoginModal(false);
  };

  const handleSearchDialogClose = () => {
    setOpenSearchModal(false);
  };

  useEffect(() => {
    let animationTimer;
    if (isOpen) {
      setAnimation("slideIn 0.5s forwards");
    } else if (!isOpen && animation) {
      animationTimer = setTimeout(() => {
        setAnimation("");
      }, 500);
    }
    return () => clearTimeout(animationTimer);
  }, [isOpen]);

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

  const groupByCategory = (products) => {
    return products.reduce((acc, product) => {
      const { category, tipo, tag, productLink } = product;
      if (!acc[category]) {
        acc[category] = { tipo, tags: [] };
      }
      acc[category].tags.push({ tag, productLink });
      return acc;
    }, {});
  };

  const handleClick = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const handleTagClick = (tipo, productLink) => {
    const newPath = `/tienda/${tipo.toUpperCase()}/${productLink.toUpperCase()}`;
    console.log("Navigating to:", newPath);
    if (window.location.pathname !== newPath) {
      navigate(newPath);
    }
    setIsOpen(false);
    setAnimation("slideOut 0.5s forwards");
  };

  const handleTipoClick = (tipo) => {
    const newPath = `/tienda/${tipo.toUpperCase()}`;
    if (window.location.pathname !== newPath) {
      navigate(newPath);
    }
    setIsOpen(false);
    setAnimation("slideOut 0.5s forwards");
  };

  const categories = groupByCategory(products);

  return (
    <React.Fragment>
      <IconButton onClick={toggleMenu} size="large" sx={{ color: "white" }}>
        <MenuIcon sx={{ fontSize: 40 }} />
      </IconButton>
      {(isOpen || animation) && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "100vw",
            height: "100%",
            backgroundColor: "white",
            animation: animation,
            "@keyframes slideIn": {
              from: { opacity: 0, transform: "translateX(100%)" },
              to: { opacity: 1, transform: "translateX(0)" },
            },
            "@keyframes slideOut": {
              from: { opacity: 1, transform: "translateX(0)" },
              to: { opacity: 0, transform: "translateX(100%)" },
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <IconButton
            onClick={toggleMenu}
            sx={{
              color: "white",
              position: "absolute",
              right: "0",
              top: "10px",
            }}
          >
            <HighlightOffIcon
              sx={{ color: "#002C72", width: "80px", height: "40px" }}
            />
          </IconButton>
          <Typography
            sx={{
              color: "#002C72",
              marginLeft: "10%",
              marginRight: "auto",
              textAlign: "start",
              fontWeight: "700",
              fontFamily: "Raleway",
              width: "80%",
              fontSize: "1.5rem",
              paddingBottom: "15px",
            }}
          >
            Productos
          </Typography>
          <div>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: "80%", position: "relative", zIndex: 1002 }}>
                <List>
                  {Object.entries(categories).map(([category, data]) => (
                    <Box key={category}>
                      <ListItemButton
                        onClick={() => handleClick(category)}
                        sx={{ justifyContent: "space-between" }}
                      >
                        <Button
                          variant="body1"
                          sx={{
                            color: "black",
                            fontFamily: "Raleway",
                          }}
                          onClick={() => handleTipoClick(data.tipo)}
                        >
                          {category}
                        </Button>
                        {openCategory === category ? (
                          <ExpandLess
                            sx={{
                              color: "#009FE3",
                              fontFamily: "Raleway",
                            }}
                          />
                        ) : (
                          <ExpandMore
                            sx={{
                              color: "#009FE3",
                              fontFamily: "Raleway",
                            }}
                          />
                        )}
                      </ListItemButton>
                      <Collapse
                        in={openCategory === category}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding>
                          {data.tags.map(({ tag, productLink }, index) => (
                            <ListItem key={index} sx={{ pl: 4 }}>
                              <Button
                                variant="text"
                                sx={{
                                  marginBottom: 1,
                                  color: "black",
                                  fontFamily: "Raleway",
                                  backgroundColor: "transparent",
                                  fontWeight: "400",
                                  boxShadow: "none",
                                  "&:hover": {
                                    backgroundColor: "transparent",
                                    boxShadow: "none",
                                  },
                                  padding: 0,
                                }}
                                onClick={() =>
                                  handleTagClick(data.tipo, productLink)
                                }
                              >
                                {tag}
                              </Button>
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    </Box>
                  ))}
                </List>
              </Box>
            </Box>
          </div>
        </Box>
      )}

      <BottomNavigation
        value={navValue}
        showLabels={true}
        onChange={(event, newValue) => {
          setNavValue(newValue);
          switch (newValue) {
            case 0:
              setOpenStoreModal(true);
              break;
            case 1:
              setOpenLoginModal(true);
              break;
            case 2:
              setOpenSearchModal(true);
              break;
            default:
              break;
          }
        }}
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          height: "70px",
          backgroundColor: "#fff",
          boxShadow: "0 -1px 6px rgba(0,0,0,0.1)",
        }}
      >
        <BottomNavigationAction
          label="Tienda"
          icon={<StoreIcon />}
          sx={{
            color: "#002C72",
            "& .MuiBottomNavigationAction-label": {
              fontFamily: "Raleway",
              marginTop: "10px",
            },
          }}
        />
        <BottomNavigationAction
          label="Iniciar sesión"
          icon={<PersonIcon />}
          sx={{
            color: "#002C72",
            "& .MuiBottomNavigationAction-label": {
              fontFamily: "Raleway",
              marginTop: "10px",
            },
          }}
        />
        <BottomNavigationAction
          label="Buscar"
          icon={<SearchIcon />}
          sx={{
            color: "#002C72",
            "& .MuiBottomNavigationAction-label": {
              fontFamily: "Raleway",
              marginTop: "10px",
            },
          }}
        />
      </BottomNavigation>

      {/* Store Modal */}
      <Dialog open={openStoreModal} onClose={() => setOpenStoreModal(false)}>
        <DialogTitle>Tienda</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Aquí puedes explorar nuestros productos.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenStoreModal(false)}>Cerrar</Button>
        </DialogActions>
      </Dialog>

      {/* Login Modal */}
      <LoginForm open={openLoginModal} onClose={handleLoginDialogClose} />

      {/* Search Modal */}
      <Search open={openSearchModal} onClose={handleSearchDialogClose} />
    </React.Fragment>
  );
};

export default MegaMenuMovil;
