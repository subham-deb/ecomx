import { sum } from "lodash";
import { useSelector } from "react-redux";

const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  const totalPrice = products?.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 0);

  return (
    <div class="container p-8 mx-auto mt-12 bg-white">
      <div class="w-full overflow-x-auto">
        <div class="my-2">
          <h3 class="text-xl font-bold tracking-wider">
            Shopping Cart {products.length || 0} item
          </h3>
        </div>
        <table class="w-full shadow-inner">
          <thead>
            <tr class="bg-gray-100">
              <th class="px-6 py-3 font-bold whitespace-nowrap">Product</th>
              <th class="px-6 py-3 font-bold whitespace-nowrap">Price</th>
              <th class="px-6 py-3 font-bold whitespace-nowrap">Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <tr key={index}>
                  <td class="p-4 px-6 text-center whitespace-nowrap">
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
                  <td class="p-4 px-6 text-center whitespace-nowrap">
                    ${product.price}
                  </td>
                  <td class="p-4 px-6 text-center whitespace-nowrap">
                    <button class="px-2 py-0 text-red-100 bg-red-600 rounded">
                      x
                    </button>
                  </td>
                </tr>
              );
            })}

            <tr>
              <td class="p-4 px-6 text-center whitespace-nowrap">
                <div class="font-bold">Total Qty - {products?.length}</div>
              </td>
              <td class="p-4 px-6 font-extrabold text-center whitespace-nowrap">
                Total - {totalPrice} (include tax)
              </td>
              <td class="p-4 px-6 text-center whitespace-nowrap">
                <button class="px-4 py-1 text-red-600 bg-red-100">
                  Clear All
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-end mt-4 space-x-2">
          <button
            class="
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
            class="
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
