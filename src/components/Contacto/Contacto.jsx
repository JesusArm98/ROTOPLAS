import { useForm, Controller } from "react-hook-form";
import { TextField, Button, MenuItem, Box } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const contactOptions = [
  { value: "expresate", label: "Expresate" },
  { value: "sugerencias o quejas", label: "Sugerencias o Quejas" },
  {
    value: "recursos humanos o reclutamiento",
    label: "Recursos Humanos O Reclutamiento",
  },
  {
    value: "¿quieres ser nuestro proveedor?",
    label: "¿Quieres Ser Nuestro Proveedor?",
  },
  { value: "asesoria en Pozos", label: "Asesoria En Pozos" },
  { value: "cotizaciones", label: "Cotizaciones" },
  // Agrega más opciones aquí...
];

const sucursalOptions = [
  { value: "Matriz", label: "Matriz" },
  { value: "Culiacán", label: "Culiacán" },
  { value: "Hermosillo", label: "Hermosillo" },
  { value: "Mexicali", label: "Mexicali" },
  { value: "Tijuana", label: "Tijuana" },
  { value: "Monterrey", label: "Monterrey" },
  { value: "Pesquería", label: "Pesquería" },
  { value: "Cd. Obregón", label: "Cd. Obregón" },
  { value: "Querétaro", label: "Querétaro" },
  { value: "Guadalajara", label: "Guadalajara" },
  { value: "Chihuahua", label: "Chihuahua" },
  { value: "Torreón", label: "Torreón" },
  { value: "Ensenada", label: "Ensenada" },
  { value: "Mazatlán", label: "Mazatlán" },
  // Agrega más opciones aquí...
];

// Esquema de validación
const schema = yup
  .object({
    Tipo: yup.string().required("El tipo de contacto es obligatorio."),
    Nombre: yup
      .string()
      .required("El nombre es obligatorio.")
      .min(3, "El nombre debe tener al menos 3 caracteres."),
    Correo: yup
      .string()
      .email("Debe ser un correo válido.")
      .required("El correo es obligatorio."),
    Sucursal: yup.string().required("La sucursal es obligatoria."),
    Telefono: yup
      .string()
      .matches(/^[0-9]+$/, "Debe contener solo números.")
      .min(10, "Debe tener al menos 10 dígitos.")
      .required("El teléfono es obligatorio."),
    Mensaje: yup
      .string()
      .min(20, "El mensaje debe tener al menos 20 caracteres.")
      .required("El mensaje es obligatorio."),
  })
  .required();

export default function ContactForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset(); // Aquí llamamos a reset para vaciar los campos del formulario
  };

  return (
    <Box
      component="form"
      noValidate
      id="contacto"
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        overflow: "hidden",
      }}
    >
      <h1 style={{ marginTop: "48px", color: "#07417B", fontSize: " 2.25em" }}>
        Contáctanos
      </h1>
      <h2>
        Nos interesa responder tus dudas o inquietudes. No dudes en
        contactarnos.
      </h2>
      <p>Los campos marcados con * son obligatorios.</p>
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "center",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <Controller
          name="Tipo"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              select
              label="Contacto"
              helperText={
                errors.Tipo
                  ? errors.Tipo.message
                  : "Ingresa tu tipo de contacto"
              }
              error={!!errors.Tipo}
              sx={{
                width: {
                  xs: "100%",
                  sm: "500px",
                  md: "367px",
                  lg: "492px",
                  xl: "592px",
                },
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: "15px",
                    boxShadow: "rgba(100, 100, 111, 0.3) 0px 7px 29px 0px",
                  },
                },
              }}
            >
              {contactOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
        <Controller
          name="Nombre"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Nombre"
              helperText={
                errors.Nombre
                  ? errors.Nombre.message
                  : "Ingresa nombre completo"
              }
              error={!!errors.Nombre}
              sx={{
                width: {
                  xs: "100%",
                  sm: "500px",
                  md: "367px",
                  lg: "492px",
                  xl: "592px",
                },
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: "15px",
                    boxShadow: "rgba(100, 100, 111, 0.3) 0px 7px 29px 0px",
                  },
                },
              }}
            />
          )}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <Controller
          name="Correo"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              type="email"
              label="Correo"
              helperText={
                errors.Correo ? errors.Correo.message : "Ingresa tu correo"
              }
              error={!!errors.Correo}
              sx={{
                width: {
                  xs: "90%",
                  sm: "500px",
                  md: "239px",
                  lg: "322px",
                  xl: "390px",
                },
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: "15px",
                    boxShadow: "rgba(100, 100, 111, 0.3) 0px 7px 29px 0px",
                  },
                },
              }}
            />
          )}
        />

        <Controller
          name="Telefono"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Telefono"
              helperText={
                errors.Telefono
                  ? errors.Telefono.message
                  : "Ingresa tu telefono"
              }
              error={!!errors.Telefono}
              sx={{
                width: {
                  xs: "90%",
                  sm: "500px",
                  md: "239px",
                  lg: "322px",
                  xl: "390px",
                },
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: "15px",
                    boxShadow: "rgba(100, 100, 111, 0.3) 0px 7px 29px 0px",
                  },
                },
              }}
            />
          )}
        />
        <Controller
          name="Sucursal"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              select
              label="Sucursal"
              helperText={
                errors.Sucursal
                  ? errors.Sucursal.message
                  : "Ingresa tu sucursal"
              }
              error={!!errors.Sucursal}
              sx={{
                width: {
                  xs: "90%",
                  sm: "500px",
                  md: "239px",
                  lg: "322px",
                  xl: "390px",
                },
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: "15px",
                    boxShadow: "rgba(100, 100, 111, 0.3) 0px 7px 29px 0px",
                  },
                },
              }}
            >
              {sucursalOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
      </div>
      <Controller
        name="Mensaje"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            multiline
            rows={7}
            label="Mensaje"
            helperText={
              errors.Mensaje ? errors.Mensaje.message : "Ingresa un mensaje"
            }
            error={!!errors.Mensaje}
            sx={{
              height: "200px",
              width: {
                xs: "90%",
                sm: "500px",
                md: "750px",
                lg: "1000px",
                xl: "1200px",
              },
              borderRadius: "8px",

              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  height: "200px",
                  borderRadius: "15px",
                  boxShadow: "rgba(100, 100, 111, 0.3) 0px 7px 29px 0px",
                },
              },
            }}
          />
        )}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        p={2}
      >
        <Button
          sx={{
            borderRadius: "25px",
            marginBottom: "48px",
            backgroundColor: "#002C72",
            width: "120px",
            "&:hover": { backgroundColor: "#021E4A" },
          }}
          type="submit"
          color="primary"
          variant="contained"
          disabled={!isValid}
        >
          Enviar
        </Button>
      </Box>
    </Box>
  );
}
