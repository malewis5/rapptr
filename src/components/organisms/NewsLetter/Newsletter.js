import "./Newsletter.css";

// Custom components
import { Subscribe } from "../../molecules/Subscribe/Subscribe";

export const Newsletter = () => {
  return (
    <div className="Newsletter">
      <h2>SUBSCRIBE TO NEWSLETTER</h2>
      <Subscribe />
    </div>
  );
};
