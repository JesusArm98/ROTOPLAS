import { Button } from "@mui/material";
import "./HeaderMenu.css";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import FaceOutlinedIcon from "@mui/icons-material/FaceOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";

const HeaderMenu = () => {
  return (
    <div className="HeaderMenu" style={{ justifyContent: "space-evenly" }}>
      <a
        href="https://tuvanosa.pandape.computrabajo.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Button
          variant="outlined"
          sx={{
            color: "#FFFFFF",
            transition: "background-color 0.3s ease",
            borderColor: "#FFFFFF",
            borderRadius: "30px",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.31)",
              borderColor: "#FFFFFF",
              "& .text": {
                transform: "scale(0.90)",
                transition: "transform 0.2s ease, filter 0.2s ease",
              },
            },
          }}
        >
          <span
            id="HeaderText"
            className="text"
            style={{ display: "flex", gap: 10 }}
          >
            <WorkOutlineOutlinedIcon className="IconHeader" /> Bolsa de trabajo
          </span>
        </Button>
      </a>

      <a
        href="https://portal.tuvanosa.net/proveedores/inicio"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Button
          variant="outlined"
          sx={{
            color: "#FFFFFF",
            transition: "background-color 0.3s ease",
            borderColor: "#FFFFFF",
            borderRadius: "30px",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.31)",
              borderColor: "#FFFFFF",
              "& .text": {
                transform: "scale(0.90)",
                transition: "transform 0.2s ease, filter 0.2s ease",
              },
            },
          }}
        >
          <span
            id="HeaderText"
            className="text"
            style={{ display: "flex", gap: 10 }}
          >
            <HandshakeOutlinedIcon className="IconHeader" /> Proveedores
          </span>
        </Button>
      </a>

      <a
        href="https://portal.tuvanosa.net/clientes/inicio"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Button
          variant="outlined"
          sx={{
            color: "#FFFFFF",
            transition: "background-color 0.3s ease",
            borderColor: "#FFFFFF",
            borderRadius: "30px",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.31)",
              borderColor: "#FFFFFF",
              "& .text": {
                transform: "scale(0.90)",
                transition: "transform 0.2s ease, filter 0.2s ease",
              },
            },
          }}
        >
          <span
            id="HeaderText"
            className="text"
            style={{ display: "flex", gap: 10 }}
          >
            <FaceOutlinedIcon className="IconHeader" /> Clientes
          </span>
        </Button>
      </a>
    </div>
  );
};

export default HeaderMenu;
