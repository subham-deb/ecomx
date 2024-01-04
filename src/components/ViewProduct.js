import { useParams } from "react-router-dom";
import Product from "./Product";
import { useEffect, useState } from "react";
import { getSingleProduct } from "../api/api";
import Fallback from "./Fallback";

const ViewProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    getSingleProduct(params?.id)
      .then((response) => {
        console.log(response);
        setProduct(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!product) return <Fallback />;

  return (
    <div className="mt-8 p-4">
      {product && (
        <Product
          id={params.id}
          img={product.image}
          productName={product.title}
          description={product.description}
          price={product.price}
          rating={product.rating}
          category={product.category}
          showMetaCard={false}
        />
      )}
    </div>
  );
};
export default ViewProduct;
