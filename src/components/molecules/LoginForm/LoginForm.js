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
      {/*Check status of user*/}
      {newUser ? (
        <div className="input-container">
          <img src={ic_username} alt="username icon" />
          <Field type="text" placeholder="Username" />
        </div>
      ) : null}
      <div className="input-container">
        <img src={ic_email} alt="email icon" />
        <Field type="text" placeholder="Email" />
      </div>
      <div className="input-container">
        <img src={ic_password} alt="password icon" />
        <Field type="text" placeholder="Password" />
      </div>
      <Button action={newUser ? "SIGN UP" : "LOGIN"} />{" "}
    </div>
  );
};
