import Layout from "./components/Layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Pizzas from "./pages/Pizzas";
import PizzaDetails from "./pages/PizzaDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Admin from "./pages/admin/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";

import OpenOrders from "./pages/admin/pages/OpenOrders";
import ClosedOrders from "./pages/admin/pages/ClosedOrders";
import RejectedOrders from "./pages/admin/pages/RejectedOrders";
import CancelledOrders from "./pages/admin/pages/CancelledOrders";
import AcceptedOrders from "./pages/admin/pages/AcceptedOrders";
import Revenue from "./pages/admin/pages/Revenue";

function App() {
  return <Routes>
    <Route path="/admin" element={<Admin />} >
      <Route path="/admin/revenue" element={<Revenue />} />
      <Route path="/admin/openorders" element={<OpenOrders />} />
      <Route path="/admin/closedorders" element={<ClosedOrders />} />
      <Route path="/admin/rejectedorders" element={<RejectedOrders />} />
      <Route path="/admin/cancelledOrders" element={<CancelledOrders />} />
      <Route path="/admin/acceptedOrders" element={<AcceptedOrders />} />
    </Route>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/" element={<Layout />} >
      <Route path="/" element={<Navigate to="/login" />} />
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
