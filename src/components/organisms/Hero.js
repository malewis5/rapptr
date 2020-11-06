import "./Hero.css";
import { Link } from "react-router-dom";

// Assets
import logo from "../../assets/logo.png";

export const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero-login">
        <Link to="/Login">Login</Link>
      </div>
      <div className="Hero-container">
        <div className="Hero-logo">
          <img src={logo} alt="Rapptr Logo" />
          <h2 className="Hero-tagline">APP DESIGN AND DEVELOPMENT AGENCY</h2>
        </div>
      </div>
    </div>
  );
};
