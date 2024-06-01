import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

const MarkerDetailsDialog = ({ open, onClose, marker }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>{marker.ciudad}</DialogTitle>
      <DialogContent>
        <img
          src={marker.imagen}
          style={{
            width: "100%",
            height: "150px",
            display: "block",
            margin: "auto",
          }}
          alt={marker.ciudad}
        />
        <Accordion style={{ margin: "0px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ margin: "0px" }}
          >
            <Typography
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <PhoneIcon style={{ marginRight: "8px" }} /> Teléfonos
              Corporativos
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {marker.telefonosOne.map((telefono, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={
                      <a
                        href={telefono.tel}
                        style={{
                          color: "#333333",
                          textDecoration: "none",
                        }}
                      >
                        {telefono.telDesc}
                      </a>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ margin: "0px", marginTop: "10px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            style={{ margin: "0px" }}
          >
            <Typography
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <QueryBuilderIcon style={{ marginRight: "8px" }} /> Horarios de
              Atención
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {marker.horarios.map((horario, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={`${horario.dia}: ${horario.horario}`}
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
        <Typography
          variant="h6"
          style={{ textAlign: "center", marginTop: "25px" }}
        >
          Dirección
        </Typography>
        <Typography variant="body1" style={{ textAlign: "center" }}>
          {marker.direccion}
        </Typography>
        <a
          href={marker.maps}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            textAlign: "center",
            marginTop: "10px",
            paddingBottom: "20px",
          }}
        >
          Cómo llegar
        </a>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MarkerDetailsDialog;
