import "./LoginForm.css";
import { useState } from "react";

// Assets
import background from "../../../assets/gpc_loginBg@2x.png";
import ic_email from "../../../assets/ic_email@2x.png";
import ic_username from "../../../assets/ic_username@2x.png";
import ic_password from "../../../assets/ic_password@2x.png";

// Custom Components
import { Field } from "../../atoms/Field/Field";
import { Button } from "../../atoms/Button/Button";

export const LoginForm = () => {
  const [newUser, setNewUser] = useState(true);
  const [email, setEmail] = useState("test@rapptrlabs.com");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUsername("");
      setEmail("test@rapptrlabs.com");
      setPassword("");
    }, 1000);
  };

  return (
    <div className="Login-form">
      <img className="bg" src={background} alt="background" />
      <div className="header">
        <h3
          className={newUser ? "active" : "inactive"}
          onClick={() => setNewUser(true)}
        >
          Sign Up
        </h3>
        <h3
          className={!newUser ? "active" : "inactive"}
          onClick={() => setNewUser(false)}
        >
          Login
        </h3>
      </div>

      <form onSubmit={handleSubmit}>
        {/*Check status of user*/}
        {newUser ? (
          <div className="input-container">
            <img src={ic_username} alt="username icon" />
            <Field
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        ) : null}
        <div className="input-container">
          <img src={ic_email} alt="email icon" />
          <Field
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <img src={ic_password} alt="password icon" />
          <Field
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          action={loading ? "Loading..." : newUser ? "SIGN UP" : "LOGIN"}
        />{" "}
      </form>
    </div>
  );
};
