import { useState, useEffect } from "react";
import "./ProductFilter.css";
import { Box, Typography } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { useParams } from "react-router-dom";

const ProductFilter = ({ products, setImagenes, descripcion }) => {
  const [ref, setRef] = useState("SIN REF"); // Puede ser '20%', '40%' o 'SIN REF'
  const [color, setColor] = useState("Negro"); // Puede ser 'Negro', 'Neutro', o 'Azul'
  const [equipada, setEquipada] = useState("EQUIPADA");

  const { key_word } = useParams();

  const containsCisterna =
    key_word
      ?.split(",")
      .some((keyword) => keyword.toLowerCase().includes("cisterna")) || false;

  // Obtener valores únicos de refuerzo
  const uniqueRefuerzos = !containsCisterna
    ? Array.from(
        new Set(
          products.map((product) => {
            if (product.refuerzo === "STD") {
              return "SIN REF";
            }
            return product.refuerzo;
          })
        )
      )
    : [];

  // Obtener valores únicos de colores
  const availableColors = Array.from(
    new Set(products.map((product) => product.color))
  );

  // Obtener valores únicos de colores
  const availableCisternas = Array.from(
    new Set(products.map((product) => product.nombre))
  );

  console.log(availableCisternas);
  console.log(availableColors);

  const filtrarProducto = (productos, ref, color) => {
    if (containsCisterna) {
      // Lógica alternativa si containsCisterna es true
      return productos.find(
        (producto) => producto.nombre.toUpperCase() === equipada.toUpperCase()
      );
    } else {
      // Lógica original si containsCisterna es false
      return productos.find(
        (producto) =>
          (ref === "SIN REF"
            ? producto.refuerzo === "STD"
            : producto.refuerzo === ref) &&
          producto.color.toUpperCase() === color.toUpperCase()
      );
    }
  };

  useEffect(() => {
    const productoFiltrado = filtrarProducto(products, ref, color);
    if (productoFiltrado) {
      setImagenes(productoFiltrado.imagenes);
    } else {
      setImagenes([]);
    }
  }, [ref, color, products]);

  const productoFiltrado = filtrarProducto(products, ref, color);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(amount);
  };

  const precioConFormato = formatCurrency(productoFiltrado.precio.cantidad);

  return (
    <div style={{ marginLeft: "48px" }}>
      {console.log(productoFiltrado)}
      {productoFiltrado ? (
        <div>
          <Typography
            component={"h1"}
            sx={{
              fontFamily: "Raleway",
              fontWeight: "Bold",
              fontSize: "30px",
              marginTop: "88px",
              color: "#002C72",
            }}
            className="TituloLanding"
          >
            {productoFiltrado.nombre_completo
              .split(" ")
              .map((word) =>
                word.length === 1
                  ? word.toUpperCase()
                  : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ")}
          </Typography>
          <Typography
            sx={{
              width: "800px",
              color: "#002C72",
              fontFamily: "Raleway",
              fontWeight: "Regular",
              fontSize: "20px",
            }}
            className="DescripcionLanding"
          >
            {descripcion}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "16px",
              marginBottom: "8px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Raleway",
                color: "#009FE3",
                fontWeight: "600",
              }}
            >
              Referencia:
            </Typography>
            <Typography
              sx={{
                fontFamily: "Raleway",
                color: "#002C72",
                marginLeft: "5px",
              }}
            >
              {productoFiltrado.referencia_id}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "16px",
              marginBottom: "8px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Raleway",
                fontSize: "38px",
                marginBottom: "14px",
                fontWeight: "Bold",

                color: "#002C72",
              }}
              className="PrecioLanding"
            >
              {precioConFormato}
            </Typography>

            <Box
              sx={{
                marginLeft: "56px",
                alignItems: "center",
                display: "flex",
                gap: "10px",
              }}
            >
              <LocalShippingOutlinedIcon
                sx={{ fontSize: "34px", color: "#009FE3" }}
              />
              <Typography
                sx={{
                  fontFamily: "Raleway",
                  fontSize: "14px",
                  color: "#002C72",
                  fontWeight: "Regular",
                }}
              >
                Entrega estimada: 15 días hábiles
              </Typography>
            </Box>
          </Box>

          <div>
            <Typography
              component={"label"}
              sx={{
                fontFamily: "Raleway",
                color: "#009FE3",
                fontWeight: "600",
              }}
            >
              {containsCisterna ? (
                <>
                  Tipos de Cisterna:
                  <div className="refuerzo-selector">
                    {availableCisternas.map((refuerzo) => (
                      <button
                        key={refuerzo}
                        className={`ref-button ${
                          ref === refuerzo ? "selected" : ""
                        }`}
                        onClick={() => setEquipada(refuerzo)}
                      >
                        {` ${refuerzo}`}
                      </button>
                    ))}
                  </div>
                </>
              ) : null}

              {containsCisterna ? null : (
                <>
                  Tipos de tanque:
                  <div className="refuerzo-selector">
                    {uniqueRefuerzos.map((refuerzo) => (
                      <button
                        key={refuerzo}
                        className={`ref-button ${
                          ref === refuerzo ? "selected" : ""
                        }`}
                        onClick={() => setRef(refuerzo)}
                      >
                        {refuerzo === "SIN REF"
                          ? "ESTANDAR"
                          : `REF ${refuerzo}`}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </Typography>
            <Typography component={"label"} sx={{ fontFamily: "Raleway" }}>
              {/* {productoFiltrado.color} */}

              <Box
                className="color-selector"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography
                  component={"label"}
                  sx={{
                    fontFamily: "Raleway",
                    color: "#009FE3",
                    fontWeight: "600",
                  }}
                >
                  Color:
                </Typography>

                {availableColors.includes("Negro") && (
                  <button
                    className={`color-button ${
                      color === "Negro" ? "selected" : ""
                    }`}
                    style={{ backgroundColor: "#000000" }}
                    onClick={() => setColor("Negro")}
                  />
                )}
                {availableColors.includes("Neutro") && (
                  <button
                    className={`color-button ${
                      color === "Neutro" ? "selected" : ""
                    }`}
                    style={{ backgroundColor: "#F9EFD5" }}
                    onClick={() => setColor("Neutro")}
                  />
                )}
                {availableColors.includes("Azul") && (
                  <button
                    className={`color-button ${
                      color === "Azul" ? "selected" : ""
                    }`}
                    style={{ backgroundColor: "#0000FF" }}
                    onClick={() => setColor("Azul")}
                  />
                )}
              </Box>
            </Typography>
          </div>
        </div>
      ) : (
        <p>
          No se encontró un producto que coincida con los filtros seleccionados.
        </p>
      )}
    </div>
  );
};

export default ProductFilter;
