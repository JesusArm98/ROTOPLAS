import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./styles.css";

const Coordinaciones = () => {
  return (
    <div
      style={{
        height: "auto",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1
        className="Coordinaciones"
        id="Coordinaciones"
        style={{ marginTop: "48px", color: "#07417B", fontSize: " 2.25em" }}
      >
        Coordinaciones
      </h1>

      <h2
        style={{
          maxWidth: "800px",
          textAlign: "center",
          fontSize: "1.375em",
          fontWeight: "300",
        }}
      >
        Contamos con más de 200 ingenieros capacitados, que le darán soluciones
        integrales a sus necesidades a través de nuestras 14 divisiones.
      </h2>
      <div
        style={{
          width: "90%",
          marginBottom: "48px",
        }}
      >
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={false}
          spaceBetween={10}
          loop={true}
          slidesPerView={3}
          coverflowEffect={{
            slideShadows: false,
            rotate: 60,
            stretch: 0,
            depth: 100,
            modifier: 1,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="\images\Coordinaciones\tableros.webp"
              className="shadow-effect"
              alt="Tableros de Control"
            />
            <p className="slideText">Tableros de Control</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="\images\Coordinaciones\alimentos.webp"
              className="shadow-effect"
              alt="Alimentos"
            />
            <p className="slideText">Alimentos</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="\images\Coordinaciones\almacenamiento.webp"
              className="shadow-effect"
              alt="Almacenamiento"
            />
            <p className="slideText">Almacenamiento</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="\images\Coordinaciones\atraviesa.webp"
              className="shadow-effect"
              alt="Atraviesa"
            />
            <p className="slideText">Atraviesa</p>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="\images\Coordinaciones\bosch.webp"
              className="shadow-effect"
              alt="Bosch"
            />
            <p className="slideText">Bosch</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="\images\Coordinaciones\hvac.webp"
              className="shadow-effect"
              alt="Hvac"
            />
            <p className="slideText">Hvac</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="\images\Coordinaciones\instrumentacion.webp"
              className="shadow-effect"
              alt="Instrumentación"
            />
            <p className="slideText">Instrumentación</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="\images\Coordinaciones\minas.webp"
              className="shadow-effect"
              alt="Minas"
            />
            <p className="slideText">Minas</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="\images\Coordinaciones\oil_gas_and_energy.webp"
              className="shadow-effect"
              alt="Aceite, Gas y Energía"
            />
            <p className="slideText">Aceite, Gas y Energía</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="\images\Coordinaciones\pexgol.webp"
              className="shadow-effect"
              alt="Pexgol"
            />
            <p className="slideText">Pexgol</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="\images\Coordinaciones\pozos.webp"
              className="shadow-effect"
              alt="Pozos"
            />
            <p className="slideText">Pozos</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="\images\Coordinaciones\sellado.webp"
              className="shadow-effect"
              alt="Sellado"
            />
            <p className="slideText">Sellado</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="\images\Coordinaciones\sistema_contraincendios.webp"
              className="shadow-effect"
              alt="Sistema contra incendios"
            />
            <p className="slideText">Sistema contra incendios</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="\images\Coordinaciones\supresion_incencios.webp"
              className="shadow-effect"
              alt="Supresion contra incendios"
            />
            <p className="slideText">Supresion contra incendios</p>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="\images\Coordinaciones\valvulas.webp"
              className="shadow-effect"
              alt="Valvulas"
            />
            <p className="slideText">Valvulas</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="\images\Coordinaciones\vapor.webp"
              className="shadow-effect"
              alt="Vapor"
            />
            <p className="slideText">Vapor</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="\images\Coordinaciones\bombas.webp"
              className="shadow-effect"
              alt="Bombas"
            />
            <p className="slideText">Bombas</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Coordinaciones;
