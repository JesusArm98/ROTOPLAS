import ImageCarousel from "../ImageCarrousel/ImageCarrousel";

const Alianzas = () => {
  return (
    <div
      style={{
        height: "340px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ marginTop: "48px", color: "#07417B", fontSize: " 2.25em" }}>
        Nuestras alianzas
      </h1>

      <div style={{ width: "100%", marginTop: "72px", overflow: "hidden" }}>
        <ImageCarousel />
      </div>
    </div>
  );
};

export default Alianzas;
