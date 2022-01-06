import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
  const onClick = () => {
    console.log("click");
  };
  return (
    <header className="header">
      <h1 /*style={headingStyle{color:'orange', backgroundColor:'black'}}*/>
        {props.title}
      </h1>
      <Button onClick={onClick} color="orange" text="Add" />
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
/* onst headingStyle={
    color:'orange',
    backgroundColor:'black'
} */
export default Header;
