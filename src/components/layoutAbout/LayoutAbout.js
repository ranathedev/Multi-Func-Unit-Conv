import About from "../about";
import Footer from "../footer";

import stl from "./LayoutAbout.module.scss";

const LayoutAbout = ({ changeComp }) => {
  return (
    <div className={stl.container}>
      <About changeComp={changeComp} />
      <Footer changeComp={changeComp} />
    </div>
  );
};

export default LayoutAbout;
