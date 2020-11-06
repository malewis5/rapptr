import "./Apps.css";

//Custom components
import { App } from "../../molecules/App/OurApp";

//Assets
import goTenna from "../../../assets/logo_goTenna@2x.png";
import tappingSolution from "../../../assets/logo_tappingSolution@2x.png";
import weightWatchers from "../../../assets/logo_conair@2x.png";
import movo from "../../../assets/logo_movo@2x.png";

export const Apps = () => {
  return (
    <div className="Apps">
      <div className="Apps-header">
        <h2>OUR APPS</h2>
      </div>
      <div className="Apps-container">
        {" "}
        <App name="Movo" img={movo} link="https://movo.me" />
        <App
          name="Conair WeightWatchers"
          img={weightWatchers}
          link="https://itunes.apple.com/us/app/ww-body-analysis-scale-tracker/id1157071126?mt="
        />
        <App
          name="Tapping Solution"
          img={tappingSolution}
          link="https://itunes.apple.com/us/app/the-tapping-solution/id1419815487?mt=8"
        />
        <App name="goTenna" img={goTenna} link="https://www.gotenna.com" />
      </div>
    </div>
  );
};
