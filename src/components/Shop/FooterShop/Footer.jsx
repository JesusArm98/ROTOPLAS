import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Grid } from "@mui/material";

import "./Footer.css";
import LoginForm from "../../SignIn";

function FooterShop() {
  const [aviso, setAviso] = useState(false);
  const [termino, setTermino] = useState(false);
  const [envio, setEnvio] = useState(false);
  const [preguntas, setPreguntas] = useState(false);
  const [devoluciones, setDevoluciones] = useState(false);

  const [loginOpen, setLoginOpen] = useState(false);

  const handleLoginDialogOpen = () => {
    setLoginOpen(true);
  };
  const handleLoginDialogClose = () => {
    setLoginOpen(false);
  };

  const handleCloseDevoluciones = () => {
    setDevoluciones(false);
  };

  const handleOpenDevoluciones = () => {
    setDevoluciones(true);
  };

  const handleClosePreguntas = () => {
    setPreguntas(false);
  };

  const handleOpenPreguntas = () => {
    setPreguntas(true);
  };

  const handleCloseEnvio = () => {
    setEnvio(false);
  };

  const handleOpenEnvio = () => {
    setEnvio(true);
  };

  const handleCloseTermino = () => {
    setTermino(false);
  };

  const handleOpenTermino = () => {
    setTermino(true);
  };

  const handleClosePrivacidad = () => {
    setAviso(false);
  };

  const handleOpenPrivacidad = () => {
    setAviso(true);
  };

  return (
    <div className="footer-container">
      <Grid className="footerShop" container sx={{ padding: "0", margin: "0" }}>
        <Grid item xs={12} md={4} style={{ height: "85%" }}>
          <div className="seccionProductos">
            <div className="productosLista">
              <h2 style={{ color: "white" }}>Productos de Almacenamiento</h2>
              <a href="#sucursal">Cisternas</a>
              <a href="#coordinaciones">Tanques de Almacenamiento</a>
              <a href="#sucursal">Tolvas</a>
              <a href="#coordinaciones">Nodrizas</a>
              <a href="#sucursal">Captador Plubial Rural</a>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4} style={{ height: "85%" }}>
          <div className="seccionServicios">
            <div className="servicios">
              <h2 style={{ color: "white" }}>Servicios</h2>
              <a onClick={handleOpenTermino}>Terminos y Condiciones</a>
              <Dialog
                open={termino}
                onClose={handleCloseTermino}
                fullWidth
                maxWidth="xl"
              >
                <DialogTitle
                  style={{
                    textAlign: "center",
                    backgroundColor: "#1B1C3C",
                    color: "white",
                  }}
                >
                  <h2>TERMINOS Y CONDICIONES</h2>
                </DialogTitle>
                <DialogContent style={{ textAlign: "justify" }} id="dialog">
                  <h3>Información general</h3>
                  <p>
                    El presente aviso de privacidad celebrado entre Tuberías y
                    Válvulas del Noroeste, S.A. de C.V. (“TUVANOSA”) y el
                    titular de la información, establece la manera en que será
                    tratada su información por parte de TUVANOSA, así como la
                    finalidad para la que fue recabada, lo anterior de
                    conformidad con los artículos 15 y 16 de la Ley Federal de
                    Protección de Datos Personales en Posesión de los
                    particulares (la “Ley”).
                  </p>
                </DialogContent>
              </Dialog>
              <a onClick={handleOpenEnvio}>Condiciones de envio y entrega</a>
              <Dialog
                open={envio}
                onClose={handleCloseEnvio}
                fullWidth
                maxWidth="xl"
              >
                <DialogTitle
                  style={{
                    textAlign: "center",
                    backgroundColor: "#1B1C3C",
                    color: "white",
                  }}
                >
                  <h2>CONDICIONES DE ENVIO Y ENTREGA</h2>
                </DialogTitle>
                <DialogContent style={{ textAlign: "justify" }} id="dialog">
                  <h3>Información general</h3>
                  <p>
                    El presente aviso de privacidad celebrado entre Tuberías y
                    Válvulas del Noroeste, S.A. de C.V. (“TUVANOSA”) y el
                    titular de la información, establece la manera en que será
                    tratada su información por parte de TUVANOSA, así como la
                    finalidad para la que fue recabada, lo anterior de
                    conformidad con los artículos 15 y 16 de la Ley Federal de
                    Protección de Datos Personales en Posesión de los
                    particulares (la “Ley”).
                  </p>
                </DialogContent>
              </Dialog>
              <a onClick={handleOpenPreguntas}>Preguntas frecuentes</a>
              <Dialog
                open={preguntas}
                onClose={handleClosePreguntas}
                fullWidth
                maxWidth="xl"
              >
                <DialogTitle
                  style={{
                    textAlign: "center",
                    backgroundColor: "#1B1C3C",
                    color: "white",
                  }}
                >
                  <h2>PREGUNTAS FRECUENTES</h2>
                </DialogTitle>
                <DialogContent style={{ textAlign: "justify" }} id="dialog">
                  <h3>Información general</h3>
                  <p>
                    El presente aviso de privacidad celebrado entre Tuberías y
                    Válvulas del Noroeste, S.A. de C.V. (“TUVANOSA”) y el
                    titular de la información, establece la manera en que será
                    tratada su información por parte de TUVANOSA, así como la
                    finalidad para la que fue recabada, lo anterior de
                    conformidad con los artículos 15 y 16 de la Ley Federal de
                    Protección de Datos Personales en Posesión de los
                    particulares (la “Ley”).
                  </p>
                </DialogContent>
              </Dialog>
              <a onClick={handleOpenDevoluciones}>
                Devoluciones, garantias y cancelaciones
              </a>
              <Dialog
                open={devoluciones}
                onClose={handleCloseDevoluciones}
                fullWidth
                maxWidth="xl"
              >
                <DialogTitle
                  style={{
                    textAlign: "center",
                    backgroundColor: "#1B1C3C",
                    color: "white",
                  }}
                >
                  <h2>DEVOLUCIONES, GARANTIAS Y CANCELACIONES</h2>
                </DialogTitle>
                <DialogContent style={{ textAlign: "justify" }} id="dialogShop">
                  <h3>Información general</h3>
                  <p>
                    El presente aviso de privacidad celebrado entre Tuberías y
                    Válvulas del Noroeste, S.A. de C.V. (“TUVANOSA”) y el
                    titular de la información, establece la manera en que será
                    tratada su información por parte de TUVANOSA, así como la
                    finalidad para la que fue recabada, lo anterior de
                    conformidad con los artículos 15 y 16 de la Ley Federal de
                    Protección de Datos Personales en Posesión de los
                    particulares (la “Ley”).
                  </p>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4} style={{ height: "85%" }}>
          <div className="seccionContactosShop">
            <div className="contactosShop">
              <h2 id="tituloRedesShop" style={{ color: "white" }}>
                Redes Sociales
              </h2>
              <div className="redesShop">
                <a href="https://www.facebook.com/tuvanosaMX" target="_blank">
                  <button aria-label="Visita nuestra página de Facebook">
                    <img
                      src="images\FooterShop\facebook-icon.svg"
                      alt="Facebook"
                    />
                  </button>
                </a>
                <a
                  href="https://www.youtube.com/channel/UC-dwYOS5W67L3OSuCoIE9Tw"
                  target="_blank"
                >
                  <button aria-label="Visita nuestra página de LinkedIn">
                    <img
                      src="\images\FooterShop\linkedin-icon.svg"
                      alt="LinkedIn"
                    />
                  </button>
                </a>
              </div>
              <div className="inicioFooter">
                <button onClick={handleLoginDialogOpen}>
                  <img
                    src="\images\FooterShop\user-icon.svg"
                    alt="Iniciar Sesion"
                  />
                  INICIAR SESION
                </button>
                <LoginForm open={loginOpen} onClose={handleLoginDialogClose} />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={12} style={{ height: "15%" }}>
          <div className="avisoPrivacidadShop">
            <button onClick={handleOpenPrivacidad} style={{ fontSize: "10px" }}>
              AVISO DE PRIVACIDAD - TUVANOSA 2024 - TODOS LOS DERECHOS
              RESERVADOS
            </button>
            <Dialog
              open={aviso}
              onClose={handleClosePrivacidad}
              fullWidth
              maxWidth="xl"
            >
              <DialogTitle
                style={{
                  textAlign: "center",
                  backgroundColor: "#1B1C3C",
                  color: "white",
                }}
              >
                <h2>Aviso de privacidad Tuvanosa</h2>
              </DialogTitle>
              <DialogContent style={{ textAlign: "justify" }} id="dialog">
                <h3>Información general</h3>
                <p>
                  El presente aviso de privacidad celebrado entre Tuberías y
                  Válvulas del Noroeste, S.A. de C.V. (“TUVANOSA”) y el titular
                  de la información, establece la manera en que será tratada su
                  información por parte de TUVANOSA, así como la finalidad para
                  la que fue recabada, lo anterior de conformidad con los
                  artículos 15 y 16 de la Ley Federal de Protección de Datos
                  Personales en Posesión de los particulares (la “Ley”).
                </p>
                <p>
                  TUVANOSA respeta su derecho a la privacidad y protección de
                  sus datos personales, los cuales son amparados por la Ley. La
                  base de datos en donde se guarda su información es
                  responsabilidad de TUVANOSA cuya oficina matriz está ubicada
                  en Calzada Aeropuerto #9016 Pte. Colonia Nuevo Bachigualato en
                  Culiacán, Sinaloa, México, C.P. 80135, asimismo su información
                  se encuentra debidamente resguardada conforme a las
                  disposiciones de seguridad administrativa, técnica, y física,
                  establecidas en la Ley de la materia, para protegerla de los
                  posibles daños, perdidas, alteración o acceso no autorizado.
                </p>
                <h3>Información que recolectamos</h3>
                <p>
                  Los datos personales que recabamos, cuando así aplique, están
                  dentro de las siguientes categorías: , identificación (nombre,
                  domicilio, teléfono, correo electrónico, firma, RFC, CURP,
                  fecha de nacimiento, edad, nacionalidad, estado civil, etc.);
                  laborales (puesto, domicilio, correo electrónico y teléfono
                  del trabajo); patrimoniales (información fiscal, historial
                  crediticio, cuentas bancarias, ingresos y egresos, etc.).
                </p>
                <h3>
                  Derechos de acceso, rectificación, cancelación u oposición
                </h3>
                <p>
                  El titular podrá ejercer los derechos de acceso,
                  rectificación, cancelación u oposición, respecto a los datos
                  personales que le concierne, enviando una solicitud a TUVANOSA
                  al correo LFPDPPP@TUVANOSA.COM será necesario que indique su
                  nombre y domicilio completo y un documento que permita su
                  identificación, así como el objetivo de su solicitud y/o
                  tramite a efectuar. Lo anterior se deberá realizar en base a
                  la Ley y su reglamento.
                </p>
                <h3>Uso de la informacion</h3>
                <p>
                  Sus datos personales o historial generado con nosotros serán
                  utilizados por TUVANOSA, o por cualquiera de sus subsidiarias
                  y/o filiales, y quedarán registrados en nuestra base de datos,
                  así como cualquier otra información personal, sensible o de
                  cualquier otra índole, siempre que se cumpla con lo
                  establecido en la Ley y su Reglamento respecto a cada tipo de
                  información. Esta información puede ser utilizada por TUVANOSA
                  para evaluación de línea de crédito, alta de cliente y/o
                  proveedor, registro de facturación, cobros o pagos, así como
                  ofrecerle productos y servicios, ya sea de manera telefónica,
                  física, electrónica o por cualquier otra tecnología o medio
                  que esté al alcance de TUVANOSA.
                </p>
                <h3>Transferencia de datos</h3>
                <p>
                  Sus datos personales o historial generado con nosotros serán
                  utilizados por TUVANOSA, o por cualquiera de sus subsidiarias
                  y/o filiales, y quedarán registrados en nuestra base de datos,
                  así como cualquier otra información personal, sensible o de
                  cualquier otra índole, siempre que se cumpla con lo
                  establecido en la Ley y su Reglamento respecto a cada tipo de
                  información. Esta información puede ser utilizada por TUVANOSA
                  para evaluación de línea de crédito, alta de cliente y/o
                  proveedor, registro de facturación, cobros o pagos, así como
                  ofrecerle productos y servicios, ya sea de manera telefónica,
                  física, electrónica o por cualquier otra tecnología o medio
                  que esté al alcance de TUVANOSA.
                </p>
                <p>
                  Estas terceras partes seleccionadas tendrán acceso a su
                  información con la finalidad de realizar las tareas
                  especificadas en el contrato de servicios aplicable que haya
                  suscrito con TUVANOSA. Si TUVANOSA determina que este no está
                  cumpliendo con las obligaciones pactadas, tomará
                  inmediatamente las acciones pertinentes.
                </p>
                <p>
                  Si el titular, ya no acepta la transmisión de sus datos
                  personales de conformidad con lo estipulado en el párrafo
                  anterior, puede ponerse en contacto con TUVANOSA, por
                  cualquiera de los medios establecidos en el presente Aviso de
                  Privacidad.
                </p>
                <p>
                  Adicionalmente y de conformidad con lo estipulado en los
                  artículos 10, 37 y demás relativos de la Ley y Reglamento,
                  TUVANOSA quedará exceptuado de las obligaciones referentes al
                  consentimiento para el tratamiento y trasferencia de sus
                  datos, cuando:
                </p>
                <p>
                  1. Este previsto en la Ley. <br /> 2. Los datos figuren en
                  fuentes de acceso público. <br />
                  3. Los datos personales se someterá a un procedimiento previo
                  de disociación. <br /> 4. Tenga el propósito de cumplir
                  obligaciones derivadas de una relación jurídica entre el
                  titular y el responsable. <br /> 5. Exista una situación de
                  emergencia que potencialmente puede dañar a un individuo en su
                  persona o en sus bienes. <br /> 6. Sean indispensables para la
                  atención para la atención médica, la prevención, diagnóstico,
                  la presentación de asistencia sanitaria, tratamientos médicos
                  o la gestión de servicios sanitarios. <br /> 7. se dice
                  resolución de autoridad competente. <br /> 8. cuando la
                  trasferencia sea precisa para el reconocimiento, ejercicio o
                  defensa de un derecho en proceso judicial. <br /> 9. Cuando la
                  trasferencia sea precisa para el mantenimiento o cumplimiento
                  de una relación jurídica entre el responsable y el titular.
                </p>
                <h3>Cambios en el aviso de privacidad</h3>
                <p>
                  Ambas partes, en este instrumento, acuerdan de manera
                  irrevocable, que en caso de que se requiera alguna
                  modificación en lo estipulado en el presente aviso de
                  privacidad, TUVANOSA se obliga a hacer del conocimiento los
                  cambios que en su caso se requiera, por cualquier medio,
                  incluido los electrónicos , previo aviso que se le dé a usted
                  para que se manifieste por su parte, lo que a su derecho
                  convenga, ya que de no recibir negativa expresa y por escrito
                  de su parte, o bien respuesta alguna, se entenderá que usted
                  acepta de conformidad los cambios realizados.
                </p>
              </DialogContent>
            </Dialog>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default FooterShop;
