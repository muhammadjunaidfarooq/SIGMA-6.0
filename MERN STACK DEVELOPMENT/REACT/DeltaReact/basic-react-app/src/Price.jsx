export default function Price({ oldPrice, newPrice }) {
  let styles = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    backgroundColor: "#e9a562ff",
    marginTop: "5px",
    borderRadius: "0 0 20px 20px",
    bottom: "0",
  };
  return (
    <div style={styles}>
      <h3 style={{ color: "gray", textDecorationLine: "line-through" }}>&#8360; {oldPrice}</h3>
      <h3>&#8360; {newPrice}</h3>
    </div>
  );
}
