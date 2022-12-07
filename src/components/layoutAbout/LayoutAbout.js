import Navbar from "../navbar";
import About from "../about";
import Footer from "../footer";

import stl from "./LayoutAbout.module.scss";

const LayoutAbout = () => {
  return (
    <div className={stl.container}>
      <About />
      <Navbar
        homeLink="/"
        contactLink="/Contact"
        unitConvLink="/UnitConverter"
        about="active"
      />
      <Footer
        homeLink="/"
        contactLink="/Contact"
        unitConvLink="/UnitConverter"
      />
    </div>
  );
};

export default LayoutAbout;
