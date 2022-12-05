import PropTypes from "prop-types";
import clsx from "clsx";

import stl from "./Homepage.module.scss";

const Homepage = ({ customClass }) => {
  return (
    <div className={clsx(stl.container, customClass)}>
      <h1>Unit Converter</h1>
      <h4>Multi Functional</h4>
    </div>
  );
};

Homepage.propTypes = {
  customClass: PropTypes.string,
};

export default Homepage;
