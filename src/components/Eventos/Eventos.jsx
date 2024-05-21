import Button from "@mui/material/Button";
import "./Eventos.css";
import { Box, Grid, Typography } from "@mui/material";

const eventos = [
  {
    foto: "/images/Eventos/ejemplo_evento1.svg",
    titulo: "Capacitaciones",
    descripcion:
      "¡Eleva tu potencial! Adquiere habilidades clave con expertos de primer nivel. ¡Transforma tu futuro con nosotros!",
  },
  {
    foto: "/images/Eventos/ejemplo_evento2.svg",
    titulo: "Exposiciones",
    descripcion: "Las mejores exposiciones, todo para el manejo de fluidos.",
  },
  {
    foto: "/images/Eventos/ejemplo_evento3.svg",
    titulo: "Eventos",
    descripcion:
      "¡Acompáñanos y disfruta de conversaciones enriquecedoras con los expertos más destacados del campo!",
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
      <h1 style={{ marginTop: "48px", color: "#07417B", fontSize: " 2.25em" }}>
        Últimos eventos
      </h1>

      <Box
        sx={{
          display: "flex",

          width: "80%",
          marginTop: "32px",
        }}
      >
        {" "}
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
                }}
              >
                <img
                  className="ImagenesEventos"
                  loading="lazy"
                  src={evento.foto}
                  alt="Eventos"
                />
                <Box
                  className="EventosContenidos"
                  sx={{
                    width: "80%",
                    marginLeft: { xs: 0, sm: 0, md: "32px" },
                  }}
                >
                  <h2
                    className="EventosTitulo"
                    style={{
                      fontSize: "24px",
                      color: "#07417B",
                    }}
                  >
                    {evento.titulo}
                  </h2>
                  <Box
                    style={{
                      width: { xs: "100%", sm: "100%" },

                      height: "152px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {" "}
                    <Typography
                      className="DescEventos"
                      variant="p"
                      sx={{
                        fontSize: "18px",

                        textAlign: {
                          sm: "justify",
                          sx: "justify",
                          md: "start",
                        },
                      }}
                    >
                      {evento.descripcion}
                    </Typography>
                  </Box>

                  <Button
                    className="BotonEventosSaber"
                    sx={{
                      marginBottom: "32px",
                      borderRadius: "25px",
                      backgroundColor: "#002C72",
                      "&:hover": { backgroundColor: "#021E4A" },
                    }}
                    variant="contained"
                    color="primary"
                  >
                    Saber más
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Button
        sx={{
          borderRadius: "25px",
          backgroundColor: "#002C72",
          "&:hover": { backgroundColor: "#021E4A" },

          marginTop: "78px",
          fontFamily: "Raleway",
          textTransform: "none",
          fontSize: "1.25em",
          marginBottom: "58px",
        }}
        variant="contained"
        color="primary"
      >
        Leer más noticias
      </Button>
    </div>
  );
};

export default Eventos;
