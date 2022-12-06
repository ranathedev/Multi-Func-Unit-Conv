import Navbar from "../navbar";
import Sidebar from "../sidebar";
import UnitConverter from "../unit-converter";

import stl from "./LayoutUnitConv.module.scss";

import acceleration from "../../../pages/stories/unit-converter";

const LayoutUnitConv = () => {
  return (
    <div className={stl.container}>
      <Navbar customClass="navbar" />
      <Sidebar />
      <UnitConverter data={[acceleration]} customClass={stl.unit_conv} />
    </div>
  );
};

export default LayoutUnitConv;
