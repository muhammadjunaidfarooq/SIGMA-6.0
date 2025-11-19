import "./Product.css";

function Product({ title, price = 10 }) {
  let isDiscount = price > 30000;
  let styles = {backgroundColor: isDiscount ? "lime" : ""};
  return (
    <div className="Product" style={styles}>
      <h3>{title}</h3>
      <p>Rs. {price}</p>
      {isDiscount && <p>Discount of 5%</p>}
    </div>
  );
}

export default Product;
