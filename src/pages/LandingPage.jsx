import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="content">
        <h1>Welcome to Plant Shop</h1>
        <p>We offer a variety of beautiful houseplants to brighten up your home.</p>
        <Link to="/products">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
