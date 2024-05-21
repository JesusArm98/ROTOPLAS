import "./FundacionTuvanosa.css";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

function FundacionTuvanosa() {
  const [aviso, setAviso] = useState(false);
  const handleClosePrivacidad = () => {
    setAviso(false);
  };

  const handleOpenPrivacidad = () => {
    setAviso(true);
  };
  return (
    <div className="fundacion">
      {" "}
      {/* Quité los fragmentos innecesarios */}
      <div className="filtroFundacion"></div>
      <img
        src="\images\fundacion_tuvanosa_logo.svg"
        alt="Fundacion tuvanosa"
        className="logoFundacion"
      />
      <p className="descFundacion">
        {" "}
        {/* Añadí la clase 'descFundacion' aquí */}
        Juntos podemos hacer la diferencia. Fundación Tuvanosa trabaja para
        promover la educación y la acción ambiental. ¡Únete a nosotros y hagamos
        del mundo un lugar más sostenible!
      </p>
      <button
        style={{ fontFamily: "Raleway", fontWeight: "500" }}
        className="saberMas"
        onClick={handleOpenPrivacidad}
      >
        Saber más
      </button>
      <Dialog
        open={aviso}
        onClose={handleClosePrivacidad}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle
          style={{ textAlign: "center", backgroundColor: "#1B1C3C" }}
        >
          <img
            src="\images\fundacion_tuvanosa_logo.svg"
            alt="Logo fundacion tuvanosa"
            className="logoFundacion"
          />
        </DialogTitle>
        <DialogContent style={{ textAlign: "justify" }} id="dialog">
          <p>
            Fundación Tuvanosa es una asociación civil sin fines de lucro que
            nace en 2012, con el objetivo social de apoyar el aprovechamiento de
            los recursos naturales, la preservación, conservación y restauración
            del equilibrio ecológico y la protección del medio ambiente, así
            como la promoción de la investigación científica y el desarrollo
            sustentable a nivel, nacional, regional y comunitario. <br /> <br />
          </p>
          <h2>
            Sucursales Biológicas <br /> <br />
          </h2>
          <div className="chirimole">
            <div className="image-container">
              <img
                src="\images\FundacionTuvanosa\chirimole_reserva.svg"
                alt="Descripción de la imagen"
                className="imagen-izquierda"
              />
            </div>
            <h3>Reserva El Chirimole</h3>
            <p>
              Elota, Sinaloa, México. 469 HS. <br /> Decretada en 2017 como Área
              destinada voluntariamente para la conservación.
            </p>
          </div>
          <div className="tinajas">
            <div className="image-container">
              <img
                src="\images\FundacionTuvanosa\tinajas_reserva.svg"
                alt="Descripción de la imagen"
                className="imagen-izquierda"
              />
            </div>
            <h3>Reserva Tinajas de Encillas</h3>
            <p>
              En 2019 se adquiere predio y actualmente se encuentra en proceso
              ante CONAMP para su certificación como ADVC y con otras entidades
              logramos en conjunto 7 áreas destinadas para conservación y
              preservación.
            </p>
          </div>
          <div className="alamo">
            <div className="image-container">
              <img
                loading="lazy"
                src="/images/FundacionTuvanosa/Reserva El Alamo.svg"
                alt="Descripción de la imagen"
                className="imagen-izquierda"
              />
            </div>
            <h3>Reserva el Álamo</h3>
            <p>
              Conjunto de áreas destinadas a la conservación y preservación Palo
              Blanco, Sotolosa, Copellina, Maravillas, Tierra del Sol, con un
              total de 33,741 Hs.
            </p>
          </div>
          <div className="certificado-container">
            <img
              src="\images\FundacionTuvanosa\certificado_reserva.webp"
              alt="Certificado Reserva el Chirimole"
              className="chirimoleCert"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default FundacionTuvanosa;
