import Layout from "./components/Layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Pizzas from "./pages/Pizzas";
import PizzaDetails from "./pages/PizzaDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Admin from "./pages/admin/Admin";

function App() {
  return <Routes>
    <Route path="/admin" element={<Admin />} />
    <Route path="/" element={<Layout />} >
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/pizzas" element={<Pizzas />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/pizzas/:id" element={<PizzaDetails />} />
    </Route>
  </Routes>

}

export default App;
