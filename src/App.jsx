import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { PizzaProvider } from "./context/PizzaContext";
import Home from "./views/Home";
import Cart from "./views/Cart";
import NotFound from "./views/NotFound";
import PizzaDetails from "./views/PizzaDetail";

function App() {
  return (
    <PizzaProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<PizzaDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </PizzaProvider>
  );
}

export default App;