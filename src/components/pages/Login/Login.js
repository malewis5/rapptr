import "./Login.css";

// Assets
import logo from "../../../assets/logo.png";

// Custom Components
import { LoginForm } from "../../molecules/LoginForm/LoginForm";

export const Login = () => {
  return (
    <div className="Login">
      <img className="Login-logo" src={logo} alt="Rapptr Logo" />
      <LoginForm />
    </div>
  );
};
