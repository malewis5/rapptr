import "./OurApp.css";

export const App = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <div className="OurApp">
        <img src={props.img} alt={props.alt} />
        <h5>{props.name}</h5>
      </div>
    </a>
  );
};
