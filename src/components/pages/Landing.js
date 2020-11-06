import "./Landing.css";

// Custom Components
import { Hero } from "../organisms/Hero";
import { About } from "../organisms/About";

export const Landing = () => {
  return (
    <div className="Landing">
      <Hero />
      <About />
    </div>
  );
};
