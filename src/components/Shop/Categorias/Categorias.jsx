import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Categorias.css";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import axios from "axios";
import TuneIcon from "@mui/icons-material/Tune";

const Categorias = ({ categoria }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Estados para los filtros
  const [selectedCategories, setSelectedCategories] = useState(["todo"]);
  const [selectedCapacities, setSelectedCapacities] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedUses, setSelectedUses] = useState([]);

  // Mapas para mostrar los textos adecuados en los filtros
  const categoryMap = {
    tanque: "Tanque de Almacenamiento",
    cisterna: "Cisterna",
    tolva: "Tolva",
    nodriza: "Nodriza",
    todo: "Todo",
  };
  const capacityMap = {
    "5000 LT": "5000 Litros",
    "5001 LT": "5001 Litros",
    "10000 LT": "10000 Litros",
    "15000 LT": "15000 Litros",
    "22000 LT": "22000 Litros",
    "25000 LT": "25000 Litros",
  };
  const materialMap = {
    Polietileno: "Polietileno",
    Polipropileno: "Polipropileno",
  };
  const colorMap = {
    Neutro: "Blanco",
    Azul: "Azul",
    Negro: "Negro",
  };
  const useMap = {
    "Almacenamiento de agua": "Almacenamiento de Agua",
    Químicos: "Químicos",
  };

  const getTruncatedText = (text) => {
    const ltIndex = text.indexOf("LT");
    return ltIndex !== -1 ? text.substring(0, ltIndex + 2) : text;
  };

  useEffect(() => {
    if (categoria) {
      navigate(`/Tienda/${categoria.toUpperCase()}`);
    }
  }, [categoria, navigate]);

  useEffect(() => {
    axios
      .get(
        `https://us-central1-tvn-api-store.cloudfunctions.net/app/getAllProducts`
      )
      .then((response) => {
        const allProducts = response.data.map((item) => {
          const firstVariant = item.data.variantes[0].data;
          return {
            ...firstVariant,
            categorias: item.data.categorias.filter(
              (cat) => cat !== "almacenamiento"
            ),
            capacidad: item.data.caracteristicas.capacidad,
            material: item.data.caracteristicas.material,
            uso: item.data.caracteristicas.uso,
          };
        });
        setProductos(allProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleFilterChange = (filter, value) => {
    const setFilter = {
      category: setSelectedCategories,
      capacity: setSelectedCapacities,
      material: setSelectedMaterials,
      color: setSelectedColors,
      use: setSelectedUses,
    }[filter];

    setFilter((prevSelected) => {
      if (prevSelected.includes(value)) {
        const newSelected = prevSelected.filter((item) => item !== value);
        // Si es la categoría y no queda ninguna seleccionada, selecciona "todo"
        if (filter === "category" && newSelected.length === 0) {
          return ["todo"];
        }
        return newSelected;
      } else {
        // Para "todo", limpiamos otros filtros de categorías
        if (filter === "category" && value === "todo") {
          return ["todo"];
        }
        // Si cualquier otra categoría es seleccionada, removemos "todo"
        if (filter === "category") {
          return prevSelected.filter((item) => item !== "todo").concat(value);
        }
        return prevSelected.concat(value);
      }
    });
  };

  const filterProducts = () => {
    return productos.filter((product) => {
      const matchesCategory =
        selectedCategories.includes("todo") ||
        !selectedCategories.length ||
        selectedCategories.some((cat) => product.categorias.includes(cat));
      const matchesCapacity =
        !selectedCapacities.length ||
        selectedCapacities.includes(product.capacidad.trim());
      const matchesMaterial =
        !selectedMaterials.length ||
        selectedMaterials.includes(product.material.trim());
      const matchesColor =
        !selectedColors.length ||
        selectedColors.includes(product.color?.trim()) ||
        selectedColors.length === 0; // Si no hay colores seleccionados, muestra todos
      const matchesUse =
        !selectedUses.length || selectedUses.includes(product.uso?.trim());

      return (
        matchesCategory &&
        matchesCapacity &&
        matchesMaterial &&
        matchesColor &&
        matchesUse
      );
    });
  };

  if (loading) {
    return (
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography color="error">Error: {error.message}</Typography>
      </Box>
    );
  }

  const filteredProducts = filterProducts();

  return (
    <div className="cardCategoria">
      <Box sx={{ height: "auto", width: "100%" }}>
        <div className="textoFranja">
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
                onClick={() => navigate(`/Tienda/${categoria?.toUpperCase()}`)}
                style={{ cursor: "pointer" }}
              >
                Tienda
              </a>
            </Typography>
          </Box>
        </div>
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            height: "100%",
            display: "flex",
            paddingTop: "60px",
          }}
        >
          <div className="filtros">
            <Box
              sx={{
                minWidth: "220px",
                marginLeft: "32px",
                marginTop: "12px",
                position: "absolute",
              }}
            >
              <div className="filtros">
                <Box
                  sx={{
                    minWidth: "220px",
                    marginLeft: "0",
                    marginTop: "12px",
                    position: "fixed",
                  }}
                >
                  <h1 className="TituloBarra">CATEGORÍAS</h1>
                  <ul className="ul-Categoria">
                    {Object.entries(categoryMap).map(([value, label]) => (
                      <li key={value} className="li-Categoria">
                        <label>
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(value)}
                            onChange={() =>
                              handleFilterChange("category", value)
                            }
                          />
                          {label}
                        </label>
                      </li>
                    ))}
                  </ul>
                  <div className="Borde">
                    <h1 className="TituloBarra">CAPACIDAD</h1>
                    <ul className="ul-Categoria">
                      {Object.entries(capacityMap).map(([value, label]) => (
                        <li key={value} className="li-Categoria">
                          <label>
                            <input
                              type="checkbox"
                              checked={selectedCapacities.includes(value)}
                              onChange={() =>
                                handleFilterChange("capacity", value)
                              }
                            />
                            {label}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="Borde">
                    <h1 className="TituloBarra">MATERIAL</h1>
                    <ul className="ul-Categoria">
                      {Object.entries(materialMap).map(([value, label]) => (
                        <li key={value} className="li-Categoria">
                          <label>
                            <input
                              type="checkbox"
                              checked={selectedMaterials.includes(value)}
                              onChange={() =>
                                handleFilterChange("material", value)
                              }
                            />
                            {label}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="Borde">
                    <h1 style={{ color: "#002C72", fontSize: "22px" }}>
                      COLOR
                    </h1>
                    <ul className="ul-Categoria">
                      {Object.entries(colorMap).map(([value, label]) => (
                        <li key={value} className="li-Categoria">
                          <label>
                            <input
                              type="checkbox"
                              checked={selectedColors.includes(value)}
                              onChange={() =>
                                handleFilterChange("color", value)
                              }
                            />
                            {label}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="Borde">
                    <h1 className="TituloBarra">USO</h1>
                    <ul className="ul-Categoria">
                      {Object.entries(useMap).map(([value, label]) => (
                        <li key={value} className="li-Categoria">
                          <label>
                            <input
                              type="checkbox"
                              checked={selectedUses.includes(value)}
                              onChange={() => handleFilterChange("use", value)}
                            />
                            {label}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Box>
              </div>
            </Box>
          </div>
          <div
            className="filtroCategoria"
            style={{
              position: "absolute",
              right: 0,
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <TuneIcon />
          </div>
          <div className="productoGen">
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                marginBottom: "48px",
              }}
            >
              {filteredProducts.map((producto) => (
                <div key={producto.nombre_completo} className="CardsCategorias">
                  <div style={{ width: "100%", margin: 12, height: "70%" }}>
                    <img
                      src={producto.imagenes[0]}
                      alt={producto.nombre_completo}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div style={{ width: "90%", margin: 4, height: "8%" }}>
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
                      {getTruncatedText(producto.nombre_completo)}
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
                      onClick={() =>
                        navigate(`/Tienda/${categoria}/${producto.key_word}`)
                      }
                      sx={{ borderRadius: "25px" }}
                      variant="contained"
                    >
                      Ver producto
                    </Button>
                  </div>
                </div>
              ))}
            </Box>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Categorias;
