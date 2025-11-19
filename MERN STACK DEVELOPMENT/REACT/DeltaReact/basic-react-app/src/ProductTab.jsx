import Product from "./Product";

function Products() {
  return (
    <div>
      <Product title="laptop" price={30000} />
      <Product title="mobile" price={78000} />
      <Product title="pen" />
    </div>
  );
}

export default Products;
