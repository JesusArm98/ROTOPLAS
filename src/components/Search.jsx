import {
  TextField,
  Autocomplete,
  IconButton,
  Dialog,
  DialogContent,
} from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function Search({ open, onClose }) {
  const [inputValue, setInputValue] = useState("");

  const products = [
    {
      id: 1,
      cate: "Basicas",
      title: "Cisterna 5000 LT",
      description: "Descripción del Producto 1",
      category: "Cisternas",
      tag: "5000 LT",
      image: "/images/MegaMenu/icon-cisterna.svg",
      tipo: "cisternas",
    },
    {
      id: 2,
      cate: "Equipadas",
      title: "Cisterna 10000 LT",
      description: "Descripción del Producto 1",
      category: "Cisternas",
      tag: "10000 LT",
      image: "/images/MegaMenu/icon-cisterna.svg",
      tipo: "cisternas",
    },
    {
      id: 3,
      cate: "Equipadas",
      title: "Cisterna 5000 LT",
      description: "Descripción del Producto 1",
      category: "Cisternas",
      tag: "5000 LT",
      image: "/images/MegaMenu/icon-cisterna.svg",
      tipo: "cisternas",
    },
    {
      id: 4,
      cate: "Basicas",
      title: "Cisterna 10000 LT",
      description: "Descripción del Producto 1",
      category: "Cisternas",
      tag: "10000 LT",
      image: "/images/MegaMenu/icon-cisterna.svg",
      tipo: "cisternas",
    },
    {
      id: 5,
      title: "Tanque de Almacenamiento 5000 LT",
      description: "Descripción del Producto 2",
      category: "Tanques de Almacenamiento",
      tag: "5000 LT",
      image: "/images/MegaMenu/icon-tanques.svg",
      tipo: "tanques",
    },
    {
      id: 6,
      title: "Tanque de Almacenamiento 5001 LT",
      description: "Descripción del Producto 2",
      category: "Tanques de Almacenamiento",
      tag: "5001 LT",
      image: "/images/MegaMenu/icon-tanques.svg",
      tipo: "tanques",
    },
    {
      id: 7,
      title: "Tanque de Almacenamiento 10000 LT",
      description: "Descripción del Producto 2",
      category: "Tanques de Almacenamiento",
      tag: "10000 LT",
      image: "/images/MegaMenu/icon-tanques.svg",
      tipo: "tanques",
    },
    {
      id: 8,
      title: "Tanque de Almacenamiento 10001 LT",
      description: "Descripción del Producto 2",
      category: "Tanques de Almacenamiento",
      tag: "10000 LT",
      image: "/images/MegaMenu/icon-tanques.svg",
      tipo: "tanques",
    },
    {
      id: 9,
      title: "Tanque de Almacenamiento 15000 LT",
      description: "Descripción del Producto 2",
      category: "Tanques de Almacenamiento",
      tag: "15000 LT",
      image: "/images/MegaMenu/icon-tanques.svg",
      tipo: "tanques",
    },
    {
      id: 10,
      title: "Tanque de Almacenamiento 22000 LT",
      description: "Descripción del Producto 2",
      category: "Tanques de Almacenamiento",
      tag: "22000 LT",
      image: "/images/MegaMenu/icon-tanques.svg",
      tipo: "tanques",
    },
    {
      id: 11,
      title: "Tanque de Almacenamiento 25000 LT",
      description: "Descripción del Producto 2",
      category: "Tanques de Almacenamiento",
      tag: "25000 LT",
      image: "/images/MegaMenu/icon-tanques.svg",
      tipo: "tanques",
    },
    {
      id: 12,
      title: "Tolva 7000 LT",
      description: "Descripción del Producto 3",
      category: "Tolvas",
      tag: "7000 LT",
      image: "/images/MegaMenu/icon-tolvas.svg",
      tipo: "tolvas",
    },
    {
      id: 13,
      title: "Tolva 14000 LT",
      description: "Descripción del Producto 3",
      category: "Tolvas",
      tag: "14000 LT",
      image: "/images/MegaMenu/icon-tolvas.svg",
      tipo: "tolvas",
    },
    {
      id: 14,
      title: "Nodriza 5000 LT",
      description: "Descripción del Producto 4",
      category: "Nodrizas",
      tag: "5000 LT",
      image: "/images/MegaMenu/icon-nodrizas.svg",
      tipo: "nodrizas",
    },
    {
      id: 15,
      title: "Captador Plubial Rural 5000 LT",
      description: "Descripción del Producto 5",
      category: "Captador Plubial Rural",
      tag: "5000 LT",
      image: "/images/MegaMenu/icon-captador.svg",
      tipo: "captador",
    },
    {
      id: 16,
      title: "Captador Plubial Rural 10000 LT",
      description: "Descripción del Producto 5",
      category: "Captador Plubial Rural",
      tag: "10000 LT",
      image: "/images/MegaMenu/icon-captador.svg",
      tipo: "captador",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.title.toUpperCase().includes(inputValue.toUpperCase())
  );

  const handleInputChange = (event, newInputValue) =>
    setInputValue(newInputValue);

  return (
    <Dialog open={open} onClose={onClose} hideBackdrop fullWidth maxWidth="md">
      <DialogContent
        sx={{
          position: "relative",
          height: "30vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 16, right: 16, color: "#002C72" }}
        >
          <HighlightOffIcon />
        </IconButton>
        <Autocomplete
          freeSolo
          inputValue={inputValue}
          onInputChange={handleInputChange}
          options={filteredProducts.map((product) => product.title)}
          renderOption={(props, option) => (
            <li
              {...props}
              style={{
                fontFamily: "Raleway",
                fontWeight: "500",
                fontSize: "16px",
              }}
            >
              {option}
            </li>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              placeholder="Busca un producto aquí..."
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <IconButton>
                    <SearchIcon style={{ color: "#009FE3" }} />
                  </IconButton>
                ),
              }}
              sx={{
                ".MuiInputBase-input": {
                  fontFamily: "Raleway",
                  color: "black",
                },
                ".MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#009FE3",
                    borderRadius: "30px",
                  },
                },
                "input::placeholder": {
                  color: "#000",
                  opacity: 1, // Para asegurar que el color personalizado sea visible
                },
              }}
            />
          )}
          sx={{
            width: "80%",
            ".MuiAutocomplete-option": {
              fontFamily: "Raleway",
              fontSize: "16px",
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
}

export default Search;
