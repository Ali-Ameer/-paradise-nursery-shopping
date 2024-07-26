/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(plant));
  };

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>{plant.price} USD</p>
      <button onClick={handleAddToCart} disabled={plant.isInCart}>Add to Cart</button>
    </div>
  );
};

export default PlantCard;
