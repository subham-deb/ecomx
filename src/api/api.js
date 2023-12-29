export const getProducts = async () => {
  const response = await fetch(`https://fakestoreapi.com/products`)
    .then((res) => res.json())
    .then((json) => json);
  console.log(response);
  return response;
};
