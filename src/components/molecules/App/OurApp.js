import "./OurApp.css";

export const App = (props) => {
  return (
    <div className="OurApp">
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.img} alt={props.alt} />
      </a>
      <h5>
        <a href={props.link} target="_blank" rel="noreferrer">
          {props.name}
        </a>
      </h5>
    </div>
  );
};
