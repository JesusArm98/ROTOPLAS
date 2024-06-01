import Button from "@mui/material/Button";
import "./Eventos.css";
import { Box, Grid, Typography, Link } from "@mui/material";

const eventos = [
  {
    estatus: "curso",
    foto: "/images/Eventos/evento_expopack.webp",
    titulo: "¡Los esperamos en Expo Pack 2024!",

    descripcion:
      "Tuvanosa estará presente con lo mejor en materiales y equipos, respaldados por calidad, servicio y precios competitivos. ¡Descubre soluciones a medida para tus proyectos en nuestro stand! ¡Los esperamos del 4 a 7 de junio stand #814!.",
  },
  {
    estatus: "proximo",
    foto: "/images/Eventos/evento_showroom.webp",
    titulo: "Próximo Showroom",
    url: "https://forms.gle/VSdPyo5eDU8oqSwu7", // URL dinámica
    descripcion:
      "¡Sumérgete en el mundo de la ingeniería con Tuvanosa! Descubre soluciones avanzadas en conducción de fluidos, industrial y pozos en nuestro showroom de Hermosillo. ¡Te esperamos! Este 19 y 20 de Junio en salón de eventos Hotel Hampton inn.",
  },
  {
    estatus: "finalizado",
    foto: "/images/Eventos/evento_jornada_vinculacion.webp",
    titulo: "Jornada de Vinculación",

    descripcion:
      "El Instituto Tecnológico de Culiacán llevó a cabo la JORNADA DE VINCULACIÓN con el propósito de fortalecer la relación entre la educación y las empresas, contando con la participación activa de Tuvanosa demostrando su compromiso con el enriquecimiento educativo y el desarrollo profesional.",
  },
];

const Eventos = () => {
  return (
    <div
      style={{
        height: "auto",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#F5F5F5",
      }}
    >
      <h1 style={{ marginTop: "48px", color: "#07417B", fontSize: "2.25em" }}>
        Últimos eventos
      </h1>

      <Box
        sx={{
          display: "flex",
          width: "80%",
          marginTop: "32px",
        }}
      >
        <Grid
          container
          spacing={{ xs: 0, md: 3 }}
          justifyContent="center"
          sx={{
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {eventos.map((evento, index) => (
            <Grid
              item
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "42px",
              }}
            >
              <Box
                className="EventosCard"
                sx={{
                  maxWidth: "360px",
                  height: "auto",
                  margin: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { sm: "center", xs: "center", md: "normal" },
                  textAlign: "center", // Agregado para centrar el texto
                }}
              >
                <img
                  className="ImagenesEventos"
                  loading="lazy"
                  src={evento.foto}
                  style={{ height: "auto" }}
                  alt={evento.titulo} // Alt text for accessibility
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/Eventos/.jpg";
                  }} // Default image in case of error
                />
                <Box
                  className="EventosContenidos"
                  sx={{
                    width: "80%",
                    marginLeft: { xs: 0, sm: 0, md: "32px" },
                    height: "360px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // Agregado para centrar el contenido
                  }}
                >
                  <h2
                    className="EventosTitulo"
                    style={{
                      fontSize: "24px",
                      color: "#07417B",
                      textAlign: "center",
                    }}
                  >
                    {evento.titulo}
                  </h2>
                  <Box
                    style={{
                      width: { xs: "100%", sm: "100%" },
                      height: "200px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center", // Agregado para centrar verticalmente
                    }}
                  >
                    <Typography
                      className="DescEventos"
                      variant="body1"
                      sx={{
                        fontSize: "16px",
                        textAlign: {
                          sm: "justify",
                          sx: "justify",
                          md: "justify",
                        },
                      }}
                    >
                      {evento.descripcion}
                    </Typography>
                  </Box>
                  {evento.estatus === "proximo" ? (
                    <Link
                      href={evento.url}
                      target="_blank"
                      sx={{
                        marginTop: "auto", // Agregado para empujar el botón al final
                        textDecoration: "none", // Remover subrayado
                        width: "100%", // Asegurar que el botón ocupe todo el ancho del contenedor
                        display: "flex",
                        justifyContent: "center", // Asegurar que el enlace esté centrado
                      }}
                    >
                      <Button
                        className="BotonEventosSaber"
                        sx={{
                          marginBottom: "32px",
                          borderRadius: "25px",
                          display: "flex",
                          justifyContent: "center",
                          backgroundColor: "#28a745",
                          "&:hover": {
                            backgroundColor: "#218838",
                          },
                        }}
                        variant="contained"
                        color="primary"
                      >
                        Regístrate
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      className="BotonEventosSaber"
                      sx={{
                        marginTop: "auto",
                        marginBottom: "32px",
                        borderRadius: "25px",
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor:
                          evento.estatus === "curso" ? "red" : "#dc3545",
                        "&:hover": {
                          backgroundColor:
                            evento.estatus === "curso" ? "red" : "#c82333",
                        },
                        "&.Mui-disabled": {
                          color: "white", // color del texto cuando está deshabilitado
                          backgroundColor:
                            evento.estatus === "curso" ? "#17A2B8" : "#e0e0e0", // color de fondo cuando está deshabilitado
                        },
                      }}
                      variant="contained"
                      color="primary"
                      disabled={true}
                    >
                      {evento.estatus === "curso"
                        ? "Próximamente"
                        : "Finalizado"}
                    </Button>
                  )}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Eventos;
