import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Screens
import { ProductScreen } from "./screens/ProductScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { CartScreen } from "./screens/CartScreen";
// Components
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      {/* SideDrawer */}
      {/* Backdrop */}
      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/product/:id" element={<ProductScreen />} />
          <Route exact path="/cart" element={<CartScreen />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
