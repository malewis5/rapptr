import "./Landing.css";

// Custom Components
import { Hero } from "../organisms/Hero/Hero";
import { About } from "../organisms/About/About";
import { Apps } from "../organisms/Apps/Apps";

export const Landing = () => {
  return (
    <div className="Landing">
      <Hero />
      <About />
      <Apps />
    </div>
  );
};
