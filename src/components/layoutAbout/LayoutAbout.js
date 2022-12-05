import Navbar from "../navbar";
import About from "../about";
import Footer from "../footer";

import stl from "./LayoutAbout.module.scss";

const LayoutAbout = () => {
  return (
    <div className={stl.container}>
      <About />
      <Navbar customClass="navbar" />
      <Footer />
    </div>
  );
};

export default LayoutAbout;
