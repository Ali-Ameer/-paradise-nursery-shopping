/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { addItem, deleteItem, removeItem } from '../features/cart/cartSlice';

const ShoppingCartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="shopping-cart-item">
      <div className='leftSide'>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      </div>
      <div className='rightSide'>
      <p>{item.price} USD</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => dispatch(addItem(item))}>Increase</button>
      <button onClick={() => dispatch(removeItem(item))}>Decrease</button>
      <button onClick={() => dispatch(deleteItem(item))}>Delete</button>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
