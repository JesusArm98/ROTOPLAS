import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageCarrousel.css";
import { useEffect, useState } from "react";

// Imports de logos con rutas relativas
import logo1 from "/images/Carrousel/logoDanfos.svg";
import logo2 from "/images/Carrousel/logo-alfalaval.svg";
import logo3 from "/images/Carrousel/aquestria.svg";
import logo4 from "/images/Carrousel/emerson.svg";
import logo5 from "/images/Carrousel/genebre.svg";
import logo6 from "/images/Carrousel/jw.svg";
import logo7 from "/images/Carrousel/logo_walworth.svg";
import logo8 from "/images/Carrousel/miura.svg";
import logo9 from "/images/Carrousel/pexgol.svg";
import logo10 from "/images/Carrousel/rizzotto.svg";
import logo11 from "/images/Carrousel/rotoplas_logo.svg";
import logo12 from "/images/Carrousel/sulzer.svg";
import logo13 from "/images/Carrousel/teadit.svg";
import logo14 from "/images/Carrousel/tenaris.svg";
import logo15 from "/images/Carrousel/wago-1.svg";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
];
const urls = [
  "https://www.danfoss.com/es-mx/",
  "https://www.alfalaval.mx/",
  "https://www.aquestia.com/",
  "https://www.emerson.com/es-mx",
  "https://www.genebre.es/",
  "https://example.com/url6",
  "https://www.walworth.com/",
  "https://www.miuraboiler.mx/",
  "https://www.pexgol.com/es/",
  "https://www.rizzotto.com/",
  "https://www.rotoplas.com.mx/",
  "https://www.genebre.es/",
  "https://example.com/url6",
  "https://walworth.com/",
  "https://www.wago.com/mx-en/",
];
const names = [
  "Danfos",
  "Alfalaval",
  "Aquestia",
  "Emerson",
  "Genebre",
  "notiene",
  "Walworth",
  "Miuraboiler",
  "Pexgol",
  "Rizzotto",
  "Rotoplas",
  "Sulzer",
  "Teadit",
  "Tenaris",
  "Wago",
];

function ImageCarousel() {
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    function updateSlidesToShow() {
      const width = window.innerWidth;
      if (width < 600) {
        setSlidesToShow(2);
      } else if (width < 900) {
        setSlidesToShow(3);
      } else if (width < 1200) {
        setSlidesToShow(5);
      } else {
        setSlidesToShow(7);
      }
    }

    window.addEventListener("resize", updateSlidesToShow);
    updateSlidesToShow();
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    adaptiveHeight: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    accessibility: true,
  };

  return (
    <div
      aria-label="Galería de logotipos de empresas"
      style={{ width: "100%" }}
    >
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index}>
            <a
              href={urls[index]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar ${names[index]}`}
            >
              <img
                loading="lazy"
                src={logo}
                alt={`Logotipo de ${names[index]}`}
                className="carousel-image"
                style={{ width: 160, height: 63 }}
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageCarousel;
