import About from "../about";
import Footer from "../footer";

import stl from "./LayoutAbout.module.scss";

const LayoutAbout = () => {
  return (
    <div className={stl.container}>
      <About />
      <Footer
        homeLink="/"
        contactLink="/Contact"
        unitConvLink="/UnitConverter"
      />
    </div>
  );
};

export default LayoutAbout;
