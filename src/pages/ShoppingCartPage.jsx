import { useSelector } from 'react-redux';
import ShoppingCartItem from '../components/ShoppingCartItem';
import '../styles/ShoppingCartPage.css';
import { Link } from 'react-router-dom';

const ShoppingCartPage = () => {
  const { items, totalItems, totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="shopping-cart-page">
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: {totalPrice} USD</p>
      <button>Checkout (Coming Soon)</button>
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
      <div className="shopping-cart-items">
        {items.map(item => (
          <ShoppingCartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ShoppingCartPage;
