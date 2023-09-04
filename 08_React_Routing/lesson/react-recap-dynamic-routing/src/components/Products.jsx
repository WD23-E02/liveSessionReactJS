import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  //on mounting fetch data from external api
  useEffect(() => {
    //execute only once
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      });
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <div>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Link to={`/products/${product.id}`} state={product}>
                <h4>{product.title}</h4>
                <img src={product.thumbnail} width={"100px"} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}
