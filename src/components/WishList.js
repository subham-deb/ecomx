import { useSelector } from "react-redux";
import Product from "./Product";
import { Alert, AlertTitle } from "@mui/material";
import { useMemo } from "react";

const WishList = () => {
  const { wishListProducts } = useSelector((state) => state.wishList);

  return (
    <div className="container mx-auto my-4">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
        {wishListProducts &&
          wishListProducts.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              img={product.img}
              productName={product.productName}
              description={product.description}
              price={product.price}
              color={product.color}
              rating={product.rating}
              category={product.category}
              showMetaCard={true}
              addToCartProduct={product.addToCartProduct}
              addToWishListProduct={product.addToWishListProduct}
            />
          ))}
      </div>
      {wishListProducts.length === 0 && (
        <div className="flex justify-center items-center">
          <Alert severity="info">
            <AlertTitle>Info</AlertTitle>
            No product to show!{" "}
            <strong>Please add product to wishlist from dashboard!</strong>
          </Alert>
        </div>
      )}
    </div>
  );
};
export default WishList;
