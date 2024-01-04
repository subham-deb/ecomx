import { useDispatch, useSelector } from "react-redux";
import { emptyCart, removeFromCart } from "../store/slices/cartSlice";

const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = products?.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 0);

  const removeFromCartProduct = (product) => {
    console.log(product);
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className="container p-8 mx-auto mt-12 bg-white">
      <div className="w-full overflow-x-auto">
        <div className="my-2">
          <h3 className="text-xl font-bold tracking-wider">
            Shopping Cart {products.length || 0} item
          </h3>
        </div>
        <table className="w-full shadow-inner">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 font-bold whitespace-nowrap">Product</th>
              <th className="px-6 py-3 font-bold whitespace-nowrap">Price</th>
              <th className="px-6 py-3 font-bold whitespace-nowrap">Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <tr key={index}>
                  <td className="p-4 px-6 text-center whitespace-nowrap">
                    <div className="flex flex-row items-center justify-start">
                      <div className="w-10 h-10">
                        <img
                          className="w-full h-full "
                          alt=""
                          src={product.img}
                        />
                      </div>
                      <p className="ml-2">{product.productName}</p>
                    </div>
                  </td>
                  <td className="p-4 px-6 text-center whitespace-nowrap">
                    ${product.price}
                  </td>
                  <td className="p-4 px-6 text-center whitespace-nowrap">
                    <button
                      onClick={() => removeFromCartProduct(product)}
                      className="px-2 py-0 text-red-100 bg-red-600 rounded"
                    >
                      x
                    </button>
                  </td>
                </tr>
              );
            })}

            <tr>
              <td className="p-4 px-6 text-center whitespace-nowrap">
                <div className="font-bold">Total Qty - {products?.length}</div>
              </td>
              <td className="p-4 px-6 font-extrabold text-center whitespace-nowrap">
                Total - {totalPrice} (include tax)
              </td>
              <td className="p-4 px-6 text-center whitespace-nowrap">
                <button
                  onClick={() => dispatch(emptyCart())}
                  className="px-4 py-1 text-red-600 bg-red-100"
                >
                  Clear All
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end mt-4 space-x-2">
          <button
            className="
            px-6
            py-3
            text-sm text-gray-800
            bg-gray-200
            hover:bg-gray-400
          "
          >
            Cannel
          </button>
          <button
            className="
            px-6
            py-3
            text-sm text-white
            bg-indigo-500
            hover:bg-indigo-600
          "
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
