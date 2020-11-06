import "./Login.css";
import { Link } from "react-router-dom";

// Assets
import logo from "../../../assets/logo.png";

// Custom Components
import { LoginForm } from "../../molecules/LoginForm/LoginForm";

export const Login = () => {
  return (
    <div className="Login">
      <Link to="/">
        <img className="Login-logo" src={logo} alt="Rapptr Logo" />
      </Link>
      <LoginForm />
    </div>
  );
};
