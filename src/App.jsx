import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ProductListingPage from "./pages/ProductListingPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
