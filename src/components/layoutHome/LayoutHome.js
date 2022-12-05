import Navbar from "../navbar";
import Home from "../homepage";

import stl from "./LayoutHome.module.scss";

const LayoutHome = () => {
  return (
    <div className={stl.container}>
      <Navbar />
      <Home />
    </div>
  );
};

export default LayoutHome;
