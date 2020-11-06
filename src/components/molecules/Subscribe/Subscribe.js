import "./Subscribe.css";

// Custom Components
import { Field } from "../../atoms/Field/Field";
import { Button } from "../../atoms/Button/Button";

export const Subscribe = () => {
  const handleSubmit = () => {
    console.log("Clicked");
  };
  return (
    <div className="subscribe">
      <Field placeholder="Your Email" />
      <Button onClick={handleSubmit} action="SUBSCRIBE" />
    </div>
  );
};
