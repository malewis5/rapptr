import "./Landing.css";

// Custom Components
import { Hero } from "../../organisms/Hero/Hero";
import { About } from "../../organisms/About/About";
import { Apps } from "../../organisms/Apps/Apps";
import { Newsletter } from "../../organisms/NewsLetter/Newsletter";

export const Landing = () => {
  return (
    <div className="Landing">
      <Hero />
      <About />
      <Apps />
      <Newsletter />
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
};
