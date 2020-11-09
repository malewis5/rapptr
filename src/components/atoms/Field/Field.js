import "./Field.css";

export const Field = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      required={props.required}
    />
  );
};

Field.defaultProps = {
  required: true,
};
