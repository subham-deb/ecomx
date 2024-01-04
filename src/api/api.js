export const getProducts = async () => {
  const response = await fetch(`https://fakestoreapi.com/products`)
    .then((res) => res.json())
    .then((json) => json);
  return response;
};

export const getSingleProduct = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((json) => json);
  return response;
};
