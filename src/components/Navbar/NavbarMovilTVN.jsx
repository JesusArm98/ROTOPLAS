import React, { useState, useEffect } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Instagram from "@mui/icons-material/Instagram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useNavigate } from "react-router-dom";

const NavbarMovilTVN = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => {
    if (isOpen) {
      setAnimation("slideOut 0.5s forwards");
    } else {
      setAnimation("slideIn 0.5s forwards");
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let animationTimer;
    if (isOpen) {
      setAnimation("slideIn 0.5s forwards");
    } else if (!isOpen && animation) {
      animationTimer = setTimeout(() => {
        setAnimation("");
      }, 500); // Coincide con la duración de la animación
    }
    return () => clearTimeout(animationTimer);
  }, [isOpen]);

  const handleMenuItemClick = (event, href) => {
    event.preventDefault();
    if (href.startsWith("http")) {
      window.location.href = href;
    } else if (href.startsWith("/")) {
      navigate(href);
    } else {
      const offsetTop = document.querySelector(href).offsetTop;
      const offset = 82; // Ajusta este valor al alto de tu navbar
      window.scrollTo({
        top: offsetTop - offset,
        behavior: "smooth",
      });
    }
    handleCloseMenu();
  };

  const menuItems = [
    { name: "Nosotros", href: "#headerTVN" },
    { name: "Especialidades", href: "#Coordinaciones" },
    {
      name: "Sucursales",
      href: "#sucursal",
    },
    // { name: "Tienda", href: "/tienda" },
    {
      name: "Bolsa de Trabajo",
      href: "https://tuvanosa.pandape.computrabajo.com/",
    },
    {
      name: "Proveedores",
      href: "https://portal.tuvanosa.net/proveedores/inicio",
    },
    {
      name: "Clientes",
      href: "https://portal.tuvanosa.net/clientes/inicio",
    },
  ];

  const menuItems2 = [
    {
      button: (
        <Button
          variant="outlined"
          component="a"
          href="https://www.facebook.com/tuvanosaMX"
          target="_blank"
          sx={{
            color: "#FFFFFF",
            borderColor: "none",
            border: "none",
            borderRadius: "30px",
            "&:hover": {
              backgroundColor: "transparent",
              borderColor: "transparent",
            },
          }}
        >
          <img
            src="images\Footer\facebook.svg"
            alt="Facebook"
            style={{ width: "25px", height: "25px" }}
          />
        </Button>
      ),
      href: "https://www.facebook.com/tuvanosaMX",
    },
    {
      icon: <Instagram sx={{ fontSize: 40 }} />,
      href: "https://www.instagram.com/tuvanosa.mx?igsh=bTVjYTBpdmNmbm9h",
    },
    {
      button: (
        <Button
          variant="outlined"
          component="a"
          href="https://www.linkedin.com/company/tuberias-y-valvulas-del-noroeste-sa-de-cv/mycompany/"
          target="_blank"
          sx={{
            color: "#FFFFFF",
            borderColor: "none",
            border: "none",
            borderRadius: "30px",
            "&:hover": {
              backgroundColor: "transparent",
              borderColor: "transparent",
            },
          }}
        >
          <img
            src="\images\Footer\linkedin.svg"
            alt="LinkedIn"
            style={{ width: "25px", height: "25px" }}
          />
        </Button>
      ),
      href: "https://www.linkedin.com/company/tuberias-y-valvulas-del-noroeste-sa-de-cv/mycompany/",
    },
    { icon: <EmailOutlinedIcon sx={{ fontSize: 40 }} />, href: "#contacto" },
  ];

  const handleCloseMenu = () => {
    setAnimation("slideOut 0.5s forwards");
    setTimeout(() => {
      setIsOpen(false);
    }, 500); // Esperar a que termine la animación para cambiar el estado
  };

  return (
    <React.Fragment>
      <IconButton
        onClick={toggleMenu}
        size="large"
        sx={{ color: "white", position: "absolute", top: 6, right: 8 }}
      >
        <MenuIcon sx={{ fontSize: 52 }} />
      </IconButton>
      {(isOpen || animation) && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "100vw",
            height: "100%",
            zIndex: 2,
            backgroundColor: "rgba(0,0,0,0.95)",
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
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={toggleMenu}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "#002C72",
              fontSize: "40px",
            }}
          >
            <HighlightOffIcon
              sx={{ color: "white", width: "80px", height: "40px" }}
            />
          </IconButton>

          <List>
            {menuItems.map((item, index) => (
              <ListItem
                key={index}
                onClick={(e) => handleMenuItemClick(e, item.href)}
                style={{
                  textDecoration: "none",
                  fontSize: "40px",
                  color: "white",
                  width: "100%",
                }}
              >
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{ style: { fontSize: "20px" } }}
                />
              </ListItem>
            ))}
          </List>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 4,
            }}
          >
            <Typography sx={{ color: "white", mb: 2, fontSize: "24px" }}>
              Redes
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                mt: 0,
                flexWrap: "wrap",
              }}
            >
              {menuItems2.map((item, index) => (
                <IconButton
                  key={index}
                  onClick={(e) => handleMenuItemClick(e, item.href)}
                  sx={{ color: "white", margin: "0 10px" }}
                >
                  {item.button || item.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </React.Fragment>
  );
};

export default NavbarMovilTVN;
