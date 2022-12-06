import PropTypes from "prop-types";
import clsx from "clsx";

import stl from "./Homepage.module.scss";

const Homepage = ({ customClass }) => {
  return (
    <div className={clsx(stl.container, customClass)}>
      <div className={stl.main}>
        <h1>Unit</h1>
        <h1>Converter</h1>
      </div>
      <div className={stl.slogan}>
        <h4>Multi</h4>
        <h4>Functional</h4>
      </div>
    </div>
  );
};

Homepage.propTypes = {
  customClass: PropTypes.string,
};

export default Homepage;
