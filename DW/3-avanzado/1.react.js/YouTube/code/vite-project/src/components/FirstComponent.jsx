import PropTypes from "prop-types";

const FirstComponent = ({
  title,
  subtitle = "Props section",
}) => {
  return (
    <>
      <h1> {title}</h1>
      <h2>{subtitle} </h2>
    </>
  );
};

FirstComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

/* FirstComponent.defaultProps = {
  title: "React course",
  subtitle: "Props section",
}; */

export { FirstComponent };
