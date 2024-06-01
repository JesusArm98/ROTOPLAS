import { Grid } from "@mui/material";
import "./HeaderShop.css";
import { useState } from "react";
import { Dialog } from "@mui/material";

function HeaderNoticia() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Grid container spacing={0} className="header" id="sucursal">
      <Grid item xs={12} md={7} sx={{ padding: 0, order: { xs: 2, md: 1 } }}>
        <div className="imagenHeader">
          <img
            src="\images\imagen-encabezado.svg"
            alt=""
            style={{ width: "100%", objectFit: "cover" }}
          />
        </div>
      </Grid>
      <Grid item xs={12} md={5} sx={{ padding: 0, order: { xs: 1, md: 2 } }}>
        <div className="headerRotoplas">
          <img
            src="\images\identidad-rotoplas.svg"
            alt=""
            style={{ margin: "5% 15%" }}
          />
          <h1 className="tituloRotoplas">Tu mejor opción de almacenamiento</h1>
          <h2 className="descRotoplas">
            Explora nuestra variedad de productos de diferentes capacidades,
            diseños y materiales.
          </h2>
          <h2 className="tituloRotoplas">DISTRIBUIDOR OFICIAL ROTOPLAS</h2>
          <button onClick={handleOpen} className="explorarProductos">
            Explorar productos
          </button>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth
          maxWidth="lg"
        ></Dialog>
      </Grid>
    </Grid>
  );
}

export default HeaderNoticia;
