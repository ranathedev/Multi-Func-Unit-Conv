import clsx from "clsx";

import stl from "./Homepage.module.scss";

const Homepage = ({ customClass }) => {
  return (
    <div className={clsx(stl.container, customClass)}>
      <h1>Unit Converter</h1>
      <h4>Simple Multi Function</h4>
    </div>
  );
};

export default Homepage;
