import { useState, useEffect } from 'react';
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, TextField, Stack } from '@mui/material';

function LoginForm({ open, onClose }) {
  const [rememberMe, setRememberMe] = useState(false);
  const [view, setView] = useState('login'); // 'login', 'register', o 'reset'
  const [rotate, setRotate] = useState(false);

  const handleLogin = () => {
    console.log("Iniciar sesión");
    onClose();
  };

  const handleRegister = () => {
    console.log("Registrarse");
    onClose();
  };

  const handleReset = () => {
    console.log("Reestablecer contraseña");
    onClose();
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const switchView = (newView) => {
    setRotate(true);
    setTimeout(() => {
      setView(newView);
      setRotate(false);
    }, 300);
  };

  useEffect(() => {
    if (open) {
      setView('login');
    }
  }, [open]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth={'sm'} sx={{ fontFamily: "Raleway" }}>
      <DialogTitle sx={{ backgroundColor: "#fff", color: "black", textAlign: "center", fontFamily: "Raleway", display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 24px'}}>
        {view === 'login' ? "Iniciar Sesión" : view === 'register' ? "Registrarse" : "Restablecer Contraseña"}
        <Button onClick={() => switchView(view === 'login' ? 'register' : 'login')} sx={{ fontFamily: "Raleway", color: "#1B1C3C" }}>
          {view === 'login' ? 'Registrarme' : 'Iniciar Sesión'}
        </Button>
      </DialogTitle>
      <DialogContent sx={{
        transition: 'transform 0.3s, opacity 0.3s',
        transform: rotate ? 'rotateY(180deg)' : 'rotateY(0deg)',
        opacity: rotate ? 0 : 1,
      }}>
        {view === 'login' ? (
          // Login view
          <>
            <h4 style={{ marginBottom: "0" }}>Usuario o correo electrónico</h4>
            <TextField
              autoFocus
              margin="dense"
              id="username-login"
              type="text"
              fullWidth
              variant="outlined"
            />
            <h4 style={{ marginBottom: "0" }}>Contraseña</h4>
            <TextField
              margin="dense"
              id="password-login"
              type="password"
              fullWidth
              variant="outlined"
            />
 <Stack spacing={2}>
  <FormControlLabel
    control={<Checkbox checked={rememberMe} onChange={handleRememberMeChange} color="primary" />}
    label="Recordar contraseña"
  />
  <Button onClick={() => switchView('reset')} sx={{ width: "100%", color: "#1B1C3C", fontFamily: "Raleway" }}>¿Olvidaste tu contraseña?</Button>
</Stack>
          </>
        ) : view === 'register' ? (
          // Register view
          <>
            <h4 style={{ marginBottom: "0" }}>Nombre Completo</h4>
            <TextField
              autoFocus
              margin="dense"
              id="fullname-register"
              type="text"
              fullWidth
              variant="outlined"
            />
            <h4 style={{ marginBottom: "0" }}>Correo Electrónico</h4>
            <TextField
              margin="dense"
              id="email-register"
              type="email"
              fullWidth
              variant="outlined"
            />
            <h4 style={{ marginBottom: "0" }}>Contraseña</h4>
            <TextField
              margin="dense"
              id="password-register"
              type="password"
              fullWidth
              variant="outlined"
            />
          </>
        ) : (
          // Reset view
          <>
            <h4 style={{ marginBottom: "0" }}>Ingrese Correo Electronico</h4>
            <TextField
              autoFocus
              margin="dense"
              id="email-reset"
              type="email"
              fullWidth
              variant="outlined"
            />
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={{ fontFamily: "Raleway", color:"red" }}>Cancelar</Button>
        <Button onClick={view === 'login' ? handleLogin : view === 'register' ? handleRegister : handleReset} sx={{ fontFamily: "Raleway", backgroundColor: "#1B1C3C", color: "white", borderRadius: "20px" }}>
          {view === 'login' ? 'Iniciar Sesión' : view === 'register' ? 'Registrarse' : 'Restablecer'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default LoginForm;
