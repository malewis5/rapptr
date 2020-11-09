import "./Button.css";

export const Button = (props) => {
  return (
    <div className="button" onClick={props.onClick}>
      <input value={props.action} type="submit" />
    </div>
  );
};
