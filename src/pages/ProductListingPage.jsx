import { useSelector } from 'react-redux';
import PlantCard from '../components/PlantCard';
import '../styles/ProductListingPage.css';

const ProductListingPage = () => {
  const plants = useSelector((state) => state.products);

  return (
    <div className="product-listing-page">
      <h2>Our Plants</h2>
      <div className="plant-categories">
        {Object.keys(plants)?.map(category => (
          <div key={category} className="plant-category">
            <h3>{category}</h3>
            <div className="plant-list">
              {plants[category]?.map(plant => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
