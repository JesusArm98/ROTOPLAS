import { useContext } from "react";
import { Box } from "@mui/material";
import { CartContext } from "../../context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./ShoppingCart.css"; // Asegúrate de importar el archivo CSS

const ShoppingCart = () => {
  const { cart, removeFromCart, updateItemQuantity, getTotalQuantity } =
    useContext(CartContext);

  if (!cart || cart.length === 0) {
    return (
      <Box sx={{ minHeight: "100vh", padding: "20px", marginTop: "105px" }}>
        <p>El carrito está vacío.</p>
      </Box>
    );
  }

  const calcularTotal = () => {
    return cart.reduce((total, item) => {
      const precio = item?.data?.variantes?.[0]?.data?.precio?.cantidad || 0;
      return total + precio * item.cantidad;
    }, 0);
  };

  const totalConFormato = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(calcularTotal());

  const totalQuantity = getTotalQuantity();

  return (
    <Box sx={{ minHeight: "90vh", padding: "20px", marginTop: "105px" }}>
      <h2 style={{ color: "#002C72", fontWeight: "700" }}>
        {" "}
        <ShoppingCartIcon style={{ color: "#009FE3" }} /> Carrito
      </h2>
      <ul className="cart-list">
        {cart.map((item, index) => {
          const variant = item?.data?.variantes?.[0]?.data || {};
          const imagen = variant?.imagenes?.[0];
          const nombreCompleto = variant?.nombre_completo;
          const referenciaId = variant?.referencia_id;
          const precioCantidad = variant?.precio?.cantidad;

          const handleQuantityChange = (event) => {
            const newQuantity = parseInt(event.target.value);
            updateItemQuantity(item.id, newQuantity);
          };

          return (
            <li key={`${item.id}-${index}`} className="cart-item">
              {imagen && (
                <img
                  src={imagen}
                  alt={nombreCompleto}
                  className="cart-item-image"
                />
              )}
              <div className="cart-item-details">
                <div className="cart-item-info">
                  <h3
                    style={{
                      fontSize: "20px",
                      color: "#002C72",
                      fontWeight: "400",
                    }}
                  >
                    {nombreCompleto || "Sin nombre"}
                  </h3>
                  <p
                    style={{
                      color: "#009FE3",
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    Referencia:{" "}
                    <h3 style={{ color: "#002C72", fontWeight: "400" }}>
                      {referenciaId || "Sin referencia"}
                    </h3>
                  </p>
                </div>
                <div className="cart-item-actions">
                  <div className="cart-item-quantity">
                    <label>
                      Cantidad:
                      <select
                        value={item.cantidad}
                        onChange={handleQuantityChange}
                        className="quantity-select"
                      >
                        {[...Array(10).keys()].map((i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <div className="cart-item-price">
                    {precioCantidad !== undefined ? (
                      <p className="price">${precioCantidad}</p>
                    ) : (
                      <p className="price">Precio: No disponible</p>
                    )}
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-button"
                  >
                    <DeleteIcon sx={{ color: "#009FE3" }} />
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="cart-summary">
        <h3>Total Productos: {totalQuantity}</h3>
        <h3>Total: {totalConFormato}</h3>
        <button className="checkout-button">Pagar</button>
      </div>
    </Box>
  );
};

export default ShoppingCart;
