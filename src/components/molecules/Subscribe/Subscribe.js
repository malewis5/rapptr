import "./Subscribe.css";
import { useState } from "react";

// Custom Components
import { Field } from "../../atoms/Field/Field";
import { Button } from "../../atoms/Button/Button";

export const Subscribe = () => {
  const [email, setEmail] = useState("test@rapptrlabs.com");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("email", email);
    let request = new XMLHttpRequest();

    // Open request
    request.open(
      "POST",
      "http://dev.rapptrlabs.com/Tests/scripts/add-email.php"
    );

    // Sent request
    request.send(formData);

    // Handle response
    request.onload = () => {
      request.status === 200 ? handleSuccess() : handleError();
    };

    request.onerror = () => {
      handleError();
    };
  };

  const handleSuccess = () => {
    setLoading(false);
    document.getElementById("success").style.display = "flex";
  };

  const handleError = () => {
    setLoading(false);
    alert("Please enter a valid email.");
  };
  return (
    <div className="subscribe">
      <div id="success">
        Thanks for subscribing! <span className="check">&#10003;</span>
        <span
          onClick={() =>
            (document.getElementById("success").style.display = "none")
          }
          className="sub-again"
        >
          (Subscribe Again)
        </span>
      </div>
      <Field
        placeholder="Your Email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        onClick={handleSubmit}
        action={loading ? "LOADING..." : "SUBSCRIBE"}
      />
    </div>
  );
};
