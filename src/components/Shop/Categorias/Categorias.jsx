import "./Categorias.css";
import { useNavigate } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";

const Categorias = ({ categoria }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ height: "auto", width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          height: "64px",
          backgroundColor: "#F5FBFF",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "fixed",
        }}
      >
        <Typography
          sx={{
            marginLeft: "32px",
            color: "#0062B2",
            fontWeight: "600",
            fontFamily: "Raleway",
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a
            onClick={navigate(`/TIENDA/${categoria.toUpperCase()}`)}
            style={{ cursor: "pointer" }}
          >
            Tienda
          </a>
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          height: "100%",
          display: "flex",
          paddingTop: "60px",
        }}
      >
        {/* CARD */}

        <Box
          sx={{
            minWidth: "220px",
            marginLeft: "32px",
            marginTop: "32px",
            position: "fixed",
          }}
        >
          <h1 style={{ color: "#002C72", fontSize: "22px" }}>COLOR</h1>
          <ul className="ul-Categoria">
            <li className="li-Categoria">Blanco</li>
            <li className="li-Categoria">Azul</li>
            <li className="li-Categoria">Negro</li>
          </ul>

          <div className="Borde">
            <h1 className="TituloBarra">MATERIAL</h1>
            <ul className="ul-Categoria">
              <li className="li-Categoria">Polietileno</li>
              <li className="li-Categoria"> Polipropileno</li>
            </ul>
          </div>

          <div className="Borde">
            {" "}
            <h1 className="TituloBarra">CAPACIDAD</h1>
            <ul className="ul-Categoria">
              <li className="li-Categoria">5000 L</li>
              <li className="li-Categoria">5001 L</li>
              <li className="li-Categoria">10000 L</li>
              <li className="li-Categoria">15000 L</li>
              <li className="li-Categoria">22000 L</li>
              <li className="li-Categoria">25000 L</li>
            </ul>
          </div>

          <div className="Borde">
            {" "}
            <h1 className="TituloBarra">USO</h1>
            <ul className="ul-Categoria">
              <li className="li-Categoria">Almacenamiento de agua</li>
              <li className="li-Categoria">Quimicos</li>
            </ul>
          </div>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "48px",
            marginLeft: "260px",
          }}
        >
          <div className="CardsCategorias">
            {" "}
            <div
              style={{
                width: "100%",

                margin: 12,
                height: "70%",
              }}
            >
              <img
                src="https://rotoplas.com.mx/wp-content/uploads/2020/02/tanque_negro_10000L.png"
                alt="Descripción de la imagen"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div
              style={{
                width: "90%",

                margin: 4,
                height: "8%",
              }}
            >
              {" "}
              <Typography
                variant="p"
                sx={{
                  marginTop: "2px",
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "500",
                  fontSize: "20px",
                  fontFamily: "Raleway",
                }}
              >
                TANQUE 5000 L
              </Typography>
            </div>
            <div
              style={{
                width: "90%",

                margin: 20,
                height: "10%",
                display: "flex",
                justifyContent: "center",
                paddingBottom: "32px",
              }}
            >
              <Button
                onClick={() => navigate(`/Tienda/${categoria}/producto`)}
                sx={{ borderRadius: "25px" }}
                variant="contained"
              >
                Ver producto
              </Button>
            </div>
          </div>{" "}
          <div className="CardsCategorias">
            {" "}
            <div
              style={{
                width: "100%",

                margin: 12,
                height: "70%",
              }}
            >
              <img
                src="https://rotoplas.com.mx/wp-content/uploads/2020/02/tanque_negro_10000L.png"
                alt="Descripción de la imagen"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div
              style={{
                width: "90%",

                margin: 4,
                height: "8%",
              }}
            >
              {" "}
              <Typography
                variant="p"
                sx={{
                  marginTop: "2px",
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "500",
                  fontSize: "20px",
                  fontFamily: "Raleway",
                }}
              >
                TANQUE 5000 L
              </Typography>
            </div>
            <div
              style={{
                width: "90%",

                margin: 20,
                height: "10%",
                display: "flex",
                justifyContent: "center",
                paddingBottom: "32px",
              }}
            >
              <Button
                onClick={() => navigate(`/Tienda/${categoria}/producto`)}
                sx={{ borderRadius: "25px" }}
                variant="contained"
              >
                Ver producto
              </Button>
            </div>
          </div>{" "}
          <div className="CardsCategorias">
            {" "}
            <div
              style={{
                width: "100%",

                margin: 12,
                height: "70%",
              }}
            >
              <img
                src="https://rotoplas.com.mx/wp-content/uploads/2020/02/tanque_negro_10000L.png"
                alt="Descripción de la imagen"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div
              style={{
                width: "90%",

                margin: 4,
                height: "8%",
              }}
            >
              {" "}
              <Typography
                variant="p"
                sx={{
                  marginTop: "2px",
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "500",
                  fontSize: "20px",
                  fontFamily: "Raleway",
                }}
              >
                TANQUE 5000 L
              </Typography>
            </div>
            <div
              style={{
                width: "90%",

                margin: 20,
                height: "10%",
                display: "flex",
                justifyContent: "center",
                paddingBottom: "32px",
              }}
            >
              <Button
                onClick={() => navigate(`/Tienda/${categoria}/producto`)}
                sx={{ borderRadius: "25px" }}
                variant="contained"
              >
                Ver producto
              </Button>
            </div>
          </div>{" "}
          <div className="CardsCategorias">
            {" "}
            <div
              style={{
                width: "100%",

                margin: 12,
                height: "70%",
              }}
            >
              <img
                src="https://rotoplas.com.mx/wp-content/uploads/2020/02/tanque_negro_10000L.png"
                alt="Descripción de la imagen"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div
              style={{
                width: "90%",

                margin: 4,
                height: "8%",
              }}
            >
              {" "}
              <Typography
                variant="p"
                sx={{
                  marginTop: "2px",
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "500",
                  fontSize: "20px",
                  fontFamily: "Raleway",
                }}
              >
                TANQUE 5000 L
              </Typography>
            </div>
            <div
              style={{
                width: "90%",

                margin: 20,
                height: "10%",
                display: "flex",
                justifyContent: "center",
                paddingBottom: "32px",
              }}
            >
              <Button
                onClick={() => navigate(`/Tienda/${categoria}/producto`)}
                sx={{ borderRadius: "25px" }}
                variant="contained"
              >
                Ver producto
              </Button>
            </div>
          </div>{" "}
          <div className="CardsCategorias">
            {" "}
            <div
              style={{
                width: "100%",

                margin: 12,
                height: "70%",
              }}
            >
              <img
                src="https://rotoplas.com.mx/wp-content/uploads/2020/02/tanque_negro_10000L.png"
                alt="Descripción de la imagen"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div
              style={{
                width: "90%",

                margin: 4,
                height: "8%",
              }}
            >
              {" "}
              <Typography
                variant="p"
                sx={{
                  marginTop: "2px",
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "500",
                  fontSize: "20px",
                  fontFamily: "Raleway",
                }}
              >
                TANQUE 5000 L
              </Typography>
            </div>
            <div
              style={{
                width: "90%",

                margin: 20,
                height: "10%",
                display: "flex",
                justifyContent: "center",
                paddingBottom: "32px",
              }}
            >
              <Button
                onClick={() => navigate(`/Tienda/${categoria}/producto`)}
                sx={{ borderRadius: "25px" }}
                variant="contained"
              >
                Ver producto
              </Button>
            </div>
          </div>{" "}
          <div className="CardsCategorias">
            {" "}
            <div
              style={{
                width: "100%",

                margin: 12,
                height: "70%",
              }}
            >
              <img
                src="https://rotoplas.com.mx/wp-content/uploads/2020/02/tanque_negro_10000L.png"
                alt="Descripción de la imagen"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div
              style={{
                width: "90%",

                margin: 4,
                height: "8%",
              }}
            >
              {" "}
              <Typography
                variant="p"
                sx={{
                  marginTop: "2px",
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "500",
                  fontSize: "20px",
                  fontFamily: "Raleway",
                }}
              >
                TANQUE 5000 L
              </Typography>
            </div>
            <div
              style={{
                width: "90%",

                margin: 20,
                height: "10%",
                display: "flex",
                justifyContent: "center",
                paddingBottom: "32px",
              }}
            >
              <Button
                onClick={() => navigate(`/Tienda/${categoria}/producto`)}
                sx={{ borderRadius: "25px" }}
                variant="contained"
              >
                Ver producto
              </Button>
            </div>
          </div>{" "}
          <div className="CardsCategorias">
            {" "}
            <div
              style={{
                width: "100%",

                margin: 12,
                height: "70%",
              }}
            >
              <img
                src="https://rotoplas.com.mx/wp-content/uploads/2020/02/tanque_negro_10000L.png"
                alt="Descripción de la imagen"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div
              style={{
                width: "90%",

                margin: 4,
                height: "8%",
              }}
            >
              {" "}
              <Typography
                variant="p"
                sx={{
                  marginTop: "2px",
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "500",
                  fontSize: "20px",
                  fontFamily: "Raleway",
                }}
              >
                TANQUE 5000 L
              </Typography>
            </div>
            <div
              style={{
                width: "90%",

                margin: 20,
                height: "10%",
                display: "flex",
                justifyContent: "center",
                paddingBottom: "32px",
              }}
            >
              <Button
                onClick={() => navigate(`/Tienda/${categoria}/producto`)}
                sx={{ borderRadius: "25px" }}
                variant="contained"
              >
                Ver producto
              </Button>
            </div>
          </div>{" "}
          <div className="CardsCategorias">
            {" "}
            <div
              style={{
                width: "100%",

                margin: 12,
                height: "70%",
              }}
            >
              <img
                src="https://rotoplas.com.mx/wp-content/uploads/2020/02/tanque_negro_10000L.png"
                alt="Descripción de la imagen"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div
              style={{
                width: "90%",

                margin: 4,
                height: "8%",
              }}
            >
              {" "}
              <Typography
                variant="p"
                sx={{
                  marginTop: "2px",
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "500",
                  fontSize: "20px",
                  fontFamily: "Raleway",
                }}
              >
                TANQUE 5000 L
              </Typography>
            </div>
            <div
              style={{
                width: "90%",

                margin: 20,
                height: "10%",
                display: "flex",
                justifyContent: "center",
                paddingBottom: "32px",
              }}
            >
              <Button
                onClick={() => navigate(`/Tienda/${categoria}/producto`)}
                sx={{ borderRadius: "25px" }}
                variant="contained"
              >
                Ver producto
              </Button>
            </div>
          </div>{" "}
          <div className="CardsCategorias">
            {" "}
            <div
              style={{
                width: "100%",

                margin: 12,
                height: "70%",
              }}
            >
              <img
                src="https://rotoplas.com.mx/wp-content/uploads/2020/02/tanque_negro_10000L.png"
                alt="Descripción de la imagen"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div
              style={{
                width: "90%",

                margin: 4,
                height: "8%",
              }}
            >
              {" "}
              <Typography
                variant="p"
                sx={{
                  marginTop: "2px",
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "500",
                  fontSize: "20px",
                  fontFamily: "Raleway",
                }}
              >
                TANQUE 5000 L
              </Typography>
            </div>
            <div
              style={{
                width: "90%",

                margin: 20,
                height: "10%",
                display: "flex",
                justifyContent: "center",
                paddingBottom: "32px",
              }}
            >
              <Button
                onClick={() => navigate(`/Tienda/${categoria}/producto`)}
                sx={{ borderRadius: "25px" }}
                variant="contained"
              >
                Ver producto
              </Button>
            </div>
          </div>{" "}
          <div className="CardsCategorias">
            {" "}
            <div
              style={{
                width: "100%",

                margin: 12,
                height: "70%",
              }}
            >
              <img
                src="https://rotoplas.com.mx/wp-content/uploads/2020/02/tanque_negro_10000L.png"
                alt="Descripción de la imagen"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div
              style={{
                width: "90%",

                margin: 4,
                height: "8%",
              }}
            >
              {" "}
              <Typography
                variant="p"
                sx={{
                  marginTop: "2px",
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "500",
                  fontSize: "20px",
                  fontFamily: "Raleway",
                }}
              >
                TANQUE 5000 L
              </Typography>
            </div>
            <div
              style={{
                width: "90%",

                margin: 20,
                height: "10%",
                display: "flex",
                justifyContent: "center",
                paddingBottom: "32px",
              }}
            >
              <Button
                onClick={() => navigate(`/Tienda/${categoria}/producto`)}
                sx={{ borderRadius: "25px" }}
                variant="contained"
              >
                Ver producto
              </Button>
            </div>
          </div>{" "}
          <div className="CardsCategorias">
            {" "}
            <div
              style={{
                width: "100%",

                margin: 12,
                height: "70%",
              }}
            >
              <img
                src="https://rotoplas.com.mx/wp-content/uploads/2020/02/tanque_negro_10000L.png"
                alt="Descripción de la imagen"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div
              style={{
                width: "90%",

                margin: 4,
                height: "8%",
              }}
            >
              {" "}
              <Typography
                variant="p"
                sx={{
                  marginTop: "2px",
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "500",
                  fontSize: "20px",
                  fontFamily: "Raleway",
                }}
              >
                TANQUE 5000 L
              </Typography>
            </div>
            <div
              style={{
                width: "90%",

                margin: 20,
                height: "10%",
                display: "flex",
                justifyContent: "center",
                paddingBottom: "32px",
              }}
            >
              <Button
                onClick={() => navigate(`/Tienda/${categoria}/producto`)}
                sx={{ borderRadius: "25px" }}
                variant="contained"
              >
                Ver producto
              </Button>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Categorias;
