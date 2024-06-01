import { Button, Dialog, IconButton } from "@mui/material";
import "./Header.css";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="Header" id="headerTVN">
      <h1 className="TitleHeader">TUVANOSA</h1>

      <h2 className="SubTitleHeader">
        Especialistas en control y conducción de fluidos. Calidad, servicio y
        precios justos para soluciones confiables en la industria.
      </h2>

      <Button
        className="ButtonHeader"
        variant="outlined"
        onClick={handleOpen}
        sx={{
          fontSize: "1.125em",
          color: "#FFFFFF",
          marginTop: "4%",
          height: "45px",
          transition: "background-color 0.3s ease",
          borderColor: "#FFFFFF",
          borderRadius: "30px",
          zIndex: 1,
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            borderColor: "#FFFFFF",
            "& .text": {
              transform: "scale(0.90)",
              transition: "transform 0.2s ease, filter 0.2s ease",
            },
          },
        }}
      >
        <span className="text">CONOCE MÁS DE NOSOTROS</span>
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth="md" // (xl, lg, md, sm, xs)
        fullWidth={true}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <iframe
          style={{ border: "none" }} // Estilo para eliminar el borde
          width="100%"
          height="500px" // Ajusta la altura según necesites
          src="https://www.youtube.com/embed/FkroO2b6x4A?autoplay=1&rel=0&start=30"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Dialog>
    </div>
  );
};

export default Header;
