import React, { useState, useEffect, Suspense } from "react";
import Product from "./Product";
import { Pagination } from "@mui/material";
import Fallback from "./Fallback";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../store/thunkActions/productThunk";
import { addToCart } from "../store/slices/cartSlice";

const ProductList = () => {
  // const [products, setProducts] = useState([]);
  const { products, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAction());
  }, []);

  const addToCartProduct = (product) => {
    console.log(product);
    dispatch(addToCart(product));
  };

  if (isLoading) return <Fallback />;

  return (
    <div className="container mx-auto my-4">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
        {products &&
          products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              img={product.image}
              productName={product.title}
              description={product.description}
              price={product.price}
              color={product.color}
              rating={product.rating}
              category={product.category}
              showMetaCard={true}
              addToCartProduct={addToCartProduct}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
