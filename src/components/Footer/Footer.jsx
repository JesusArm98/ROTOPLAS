import { useState } from "react";
import { Dialog, DialogContent } from "@mui/material";
import { Grid } from "@mui/material";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useNavigate } from "react-router-dom";
import MapaTuvanosa from "../MapaTuvanosa/MapaTuvanosa";

function Footer() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleNavigation = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -document.querySelector(".navbar").offsetHeight;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="footer-container" id="footer-tuvanosa">
      <Grid className="footer" container sx={{ padding: "0", margin: "0" }}>
        <Grid item xs={12} md={2} style={{ height: "85%" }}>
          <div className="seccionLogo">
            <a onClick={() => handleNavigation("headerTVN")}>
              <img
                src="\images\Footer\logo_tuvanosa.svg"
                alt="Logo Tuvanosa - Volver a Inicio"
              />
            </a>
          </div>
        </Grid>
        <Grid item xs={12} md={3} style={{ height: "85%" }}>
          <div className="nosotrosCoord">
            <div className="nosotrosBtn">
              <a href="#sucursal">
                <button onClick={() => handleNavigation("sucursal")}>
                  Nosotros
                </button>
              </a>
              <a href="#coordinaciones">
                <button onClick={() => handleNavigation("Coordinaciones")}>
                  Especialidades
                </button>
              </a>
              {/* <a href="https://pozos.tuvanosa.com/mx/" target="_blank">
                <button id="tienda">Tienda</button>
              </a> */}
              <a>
                <button id="contacto" onClick={handleOpen}>
                  Sucursales
                </button>
              </a>
              <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
                <DialogContent style={{ padding: "0", width: "100%" }}>
                  <MapaTuvanosa />
                </DialogContent>
              </Dialog>{" "}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4} style={{ height: "85%" }}>
          <div className="seccionProov">
            <div className="areas">
              <a
                href="https://portal.tuvanosa.net/clientes/inicio"
                target="_blank"
              >
                <button aria-label="Área de clientes">
                  <img src="\images\Footer\clientes.svg" alt="" />
                  Clientes
                </button>
              </a>
              <a
                href="https://portal.tuvanosa.net/proveedores/inicio"
                target="_blank"
              >
                <button aria-label="Proveedores">
                  <img src="\images\Footer\Proveedores.svg" alt="" />
                  Proveedores
                </button>
              </a>
              <a
                href="https://tuvanosa.pandape.computrabajo.com/"
                target="_blank"
              >
                <button>
                  <img
                    src="\images\Footer\Bolsa-trabajo.svg"
                    alt="Computrabajo"
                  />
                  Bolsa de trabajo
                </button>
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={3} style={{ height: "85%" }}>
          <div className="seccionTienda">
            <div className="contactos">
              <div className="redes">
                <a href="https://www.facebook.com/tuvanosaMX" target="_blank">
                  <button aria-label="Visita nuestra página de Facebook">
                    <img
                      src="images\Footer\facebook.svg"
                      alt="Facebook"
                      style={{ width: "25px", height: "25px" }}
                    />
                  </button>
                </a>
                <a
                  href="https://www.instagram.com/tuvanosa.mx?igsh=bTVjYTBpdmNmbm9h"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon
                    sx={{
                      fontSize: "32px",
                      alignItems: "center",
                      color: "white",
                      display: "flex",
                    }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/tuberias-y-valvulas-del-noroeste-sa-de-cv/mycompany/"
                  target="_blank"
                >
                  <button aria-label="Visita nuestra página de LinkedIn">
                    <img
                      src="\images\Footer\linkedin.svg"
                      alt="LinkedIn"
                      style={{ width: "25px", height: "25px" }}
                    />
                  </button>
                </a>
                <a>
                  <MailOutlineIcon
                    onClick={() => handleNavigation("contacto")}
                    sx={{
                      fontSize: "32px",
                      alignItems: "center",
                      color: "white",
                      display: "flex",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={12} style={{ height: "15%" }}>
          <div className="avisoPrivacidad">
            <button
              onClick={() => navigate("/aviso-de-privacidad")}
              style={{ fontSize: "12px" }}
            >
              AVISO DE PRIVACIDAD: TUVANOSA | © 2024 Tuvanosa | Todos los
              derechos reservados
            </button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
