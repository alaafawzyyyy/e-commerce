import { Routes, Route } from "react-router-dom";
import {
  Home,
  Collection,
  About,
  Contact,
  Login,
  Cart,
  Product,
  PlaceOrder,
  Orders,
} from "./pages";
function App() {
  return (
    <div className="px-4 sm:px-[5vm] md:px[7vm] lg:px-[9vm]">
      <Routes>
        <Route path="/" element={<Home />} />,
        <Route path="/collection" element={<Collection />} />,
        <Route path="/about" element={<About />} />,
        <Route path="/contact" element={<Contact />} />,
        <Route path="/login" element={<Login />} />,
        <Route path="/cart" element={<Cart />} />,
        <Route path="/product/:productId" element={<Product />} />,
        <Route path="/place-order" element={<PlaceOrder />} />,
        <Route path="/orders" element={<Orders />} />,
      </Routes>
    </div>
  );
}

export default App;
