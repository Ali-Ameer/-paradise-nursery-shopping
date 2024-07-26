import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <header>
      <Link to="/" className="logo">
        <h1>Plant Shop</h1>
      </Link>
      <nav>
        <Link to="/cart" className="cart">
          <img src="/icons/shopping-cart.png" className="cartIcon" />

          <span className="qty">{totalItems}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
