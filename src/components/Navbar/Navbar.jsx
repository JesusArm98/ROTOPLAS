import { useEffect, useState } from "react";
import "./Navbar.css";
import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import NavbarMovilTVN from "./NavbarMovilTVN";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [backGroundPoint, setBackGroundPoint] = useState(false); // Inicialmente falso
  const [isFooterVisible, setFooterVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = () => {
    const stickyPoint = window.innerHeight * 0.08; // 8% de la altura del viewport
    setSticky(window.scrollY >= stickyPoint);

    const backGroundPointThreshold = window.innerHeight * 0.75;
    setBackGroundPoint(window.scrollY >= backGroundPointThreshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const footer = document.getElementById("footer-tuvanosa");
    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  const handleNavigation = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -document.querySelector(".navbar").offsetHeight;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleImageClick = (event) => {
    event.preventDefault();
    const offsetTop = document.querySelector("#headerTVN").offsetTop;
    const offset = 82; // Ajusta este valor al alto de tu navbar
    window.scrollTo({
      top: offsetTop - offset,
      behavior: "smooth",
    });
  };

  return (
    <nav
      style={{
        display: isFooterVisible ? "none" : "flex",
        justifyContent: "space-between",
        backgroundColor:
          location.pathname === "/aviso-de-privacidad"
            ? "black"
            : backGroundPoint
            ? "black"
            : "transparent", // Ajusta el color de fondo
        transition: "background-color 0.5s ease-in-out",
      }}
      className={isSticky ? "navbar sticky" : "navbar"}
    >
      <div
        style={{
          display: "flex",
          gap: 5,
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "55%",
        }}
        className="logNosCoord"
      >
        <img
          style={{ height: "80%", cursor: "pointer" }}
          src="/images/Navbar/Group.svg"
          alt="TuvanosaLogo"
          onClick={() => navigate("/")}
        />
        <Button
          variant="outlined"
          onClick={() => navigate("/")}
          sx={{
            color: "#FFFFFF",
            transition: "background-color 0.3s ease",
            borderColor: "transparent",
            borderRadius: "30px",
            height: "40px",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.31)",
              borderColor: "#FFFFFF",
              height: "40px",
              transform: "scale(0.90)",
              transition: "transform 0.2s ease, filter 0.2s ease",
            },
          }}
        >
          <h2
            className="nav-text"
            style={{
              fontSize: "1.1875em",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            NOSOTROS
          </h2>
        </Button>
        <Button
          variant="outlined"
          onClick={() => handleNavigation("Coordinaciones")}
          sx={{
            color: "#FFFFFF",
            transition: "background-color 0.3s ease",
            borderColor: "transparent",
            borderRadius: "30px",
            height: "40px",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.31)",
              borderColor: "#FFFFFF",
              height: "40px",
              transform: "scale(0.90)",
              transition: "transform 0.2s ease, filter 0.2s ease",
            },
          }}
        >
          <h2
            className="nav-text"
            style={{
              fontSize: "1.1875em",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            ESPECIALIDADES
          </h2>
        </Button>
        <Button
          variant="outlined"
          onClick={() => handleNavigation("sucursal")}
          sx={{
            color: "#FFFFFF",
            transition: "background-color 0.3s ease",
            borderColor: "transparent",
            borderRadius: "30px",
            height: "40px",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.31)",
              borderColor: "#FFFFFF",
              height: "40px",
              transform: "scale(0.90)",
              transition: "transform 0.2s ease, filter 0.2s ease",
            },
          }}
        >
          <h2
            className="nav-text"
            style={{
              fontSize: "1.1875em",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            SUCURSALES
          </h2>
        </Button>
      </div>
      <div
        className="NavWeb"
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "40%",
        }}
      >
        <div
          className="navRedes"
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
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
                backgroundColor: "rgba(255, 255, 255, 0.31)",
                borderColor: "#FFFFFF",
                "& .text": {
                  transform: "scale(0.90)",
                  transition: "transform 0.2s ease, filter 0.2s ease",
                },
              },
            }}
          >
            <img
              src="images\Footer\facebook.svg"
              alt="Facebook"
              style={{ width: "25px", height: "25px" }}
            />
          </Button>
          <Button
            variant="outlined"
            component="a"
            href="https://www.instagram.com/tuvanosa.mx?igsh=bTVjYTBpdmNmbm9h"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#FFFFFF",
              borderColor: "none",
              border: "none",
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
            <InstagramIcon
              sx={{
                fontSize: "32px",
                alignItems: "center",
                color: "white",
                display: "flex",
              }}
            />
          </Button>
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
                backgroundColor: "rgba(255, 255, 255, 0.31)",
                borderColor: "#FFFFFF",
                "& .text": {
                  transform: "scale(0.90)",
                  transition: "transform 0.2s ease, filter 0.2s ease",
                },
              },
            }}
          >
            <img
              src="\images\Footer\linkedin.svg"
              alt="LinkedIn"
              style={{ width: "25px", height: "25px" }}
            />
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleNavigation("contacto")}
            sx={{
              color: "#FFFFFF",
              borderColor: "none",
              border: "none",
              borderRadius: "30px",

              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.31)",
                borderColor: "#FFFFFF",
                transform: "scale(0.90)",
                transition: "transform 0.2s ease, filter 0.2s ease",
              },
            }}
          >
            <MailOutlineIcon
              sx={{
                fontSize: "32px",
                alignItems: "center",
                color: "white",
                display: "flex",
              }}
            />
          </Button>
        </div>
      </div>
      <div
        className="NavCel"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          padding: "0 20px",
        }}
      >
        <a onClick={handleImageClick} style={{ height: "80%" }}>
          <img
            style={{ height: "100%" }}
            src="/images/Navbar/Group.svg"
            alt="TuvanosaLogo"
            onClick={() => navigate("/")}
          />
        </a>
        <div style={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <NavbarMovilTVN />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
