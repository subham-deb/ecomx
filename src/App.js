import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Suspense, lazy } from "react";
import Fallback from "./components/Fallback";

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
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
