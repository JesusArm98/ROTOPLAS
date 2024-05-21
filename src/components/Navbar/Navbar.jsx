import { useEffect, useState } from "react";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [backGroundPoint, setBackGroundPoint] = useState(true);
  const navigate = useNavigate();

  const handleScroll = () => {
    const stickyPoint = window.innerHeight * 0.08; // 8% de la altura del viewport
    setSticky(window.scrollY >= stickyPoint);

    const backGroundPoint = window.innerHeight * 0.75;
    setBackGroundPoint(window.scrollY >= backGroundPoint);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: backGroundPoint ? "black" : "initial",
        transition: "background-color 0.5s ease-in-out",
      }}
      className={isSticky ? "navbar sticky" : "navbar"}
    >
      <div
        style={{
          marginLeft: "4%",
          display: "flex",
          gap: 12,
          alignItems: "center",
        }}
      >
        <img
          style={{ height: "80%" }}
          src="/images/Navbar/Group.svg"
          alt="TuvanosaLogo"
        />
        <h2 style={{ fontSize: "1.1875em", fontWeight: "500" }}>NOSOTROS</h2>
        <h2 style={{ fontSize: "1.1875em", fontWeight: "500" }}>
          COORDINACIONES
        </h2>
      </div>
      <div
        className="NavCel"
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          marginRight: "4%", // Este margen asegura que el NavCel tenga un espacio a la derecha
        }}
      >
        <MenuIcon />
      </div>
      <div
        className="NavWeb"
        style={{
          display: "flex",
          marginRight: "4%",
          gap: 12,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="outlined"
          onClick={() => navigate("/Tienda")}
          sx={{
            color: "#FFFFFF",
            borderColor: "#FFFFFF",
            borderRadius: "8px",
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
          <span className="text" style={{ display: "flex", gap: 10 }}>
            <StorefrontOutlinedIcon /> TIENDA
          </span>
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#FFFFFF",
            borderColor: "#FFFFFF",
            borderRadius: "8px",
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
          <span className="text" style={{ display: "flex", gap: 10 }}>
            CONTACTO
          </span>
        </Button>
        <img
          className="iconFB"
          src="/images/Navbar/CTAfacebook.svg"
          alt="Facebook Logo"
        />
        <img
          className="iconIN"
          src="/images/Navbar/CTALinkedin.svg"
          alt="LinkedIn Logo"
        />
        <img
          className="iconYT"
          src="/images/Navbar/CTAYoutube.svg"
          alt="YouTube Logo"
        />
      </div>
    </nav>
  );
};

export default Navbar;
