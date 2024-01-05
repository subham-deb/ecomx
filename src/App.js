import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Suspense, lazy } from "react";
import Fallback from "./components/Fallback";
import ViewProduct from "./components/ViewProduct";
import WishList from "./components/WishList";

const Dashboard = lazy(() => import("./components/Dashboard"));
const Cart = lazy(() => import("./components/Cart"));

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/:id/product" element={<ViewProduct />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
