import { useState, useEffect } from "react";
import { Product } from "../models/Product";
import ProductList from "./ProductList";

function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <ProductList products={products} />
    </>
  );
}

export default Catalog;
