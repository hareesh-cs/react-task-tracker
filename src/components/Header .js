import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1 /*style={headingStyle{color:'orange', backgroundColor:'black'}}*/>
        {title}
      </h1>
      <Button
        color={showAdd ? "red" : "orange"}
        text={showAdd ? "close" : "Add"}
        onClick={onAdd}
      />
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
