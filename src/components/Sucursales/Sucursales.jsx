import { Grid } from "@mui/material";
import "./Sucursales.css";
import { useState } from "react";
import MapaTuvanosa from "../MapaTuvanosa/MapaTuvanosa";
import { Dialog, DialogContent } from "@mui/material";

function Sucursales() {
  const [open, setOpen] = useState(false);
  const imgSucursal = {
    width: "100%",
    objectFit: "cover",
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Grid className="sucursales" id="sucursal" container spacing={0}>
      <Grid item xs={12} md={6} style={{ padding: "0" }}>
        <h1 className="tituloSucursal">Conoce nuestras sucursales</h1>
        <h2
          style={{ fontSize: "1.375em", fontWeight: "300" }}
          className="descSucursal"
        >
          Con 21 locaciones estratégicas, estamos siempre a tu disposición para
          brindarte el mejor servicio, estés donde estés.
        </h2>
        <button
          style={{ fontFamily: "Raleway" }}
          onClick={handleOpen}
          className="saberMasSuc"
        >
          Encuentranos
        </button>
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
          <DialogContent style={{ padding: "0", width: "100%" }}>
            <MapaTuvanosa />
          </DialogContent>
        </Dialog>{" "}
      </Grid>
      <Grid item xs={12} md={6} style={{ padding: "0" }}>
        {" "}
        <img
          loading="lazy"
          src="\images\sucursal_contacto.png"
          alt="SucursalContacto"
          style={imgSucursal}
        />
      </Grid>
    </Grid>
  );
}

export default Sucursales;
