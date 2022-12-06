import { useEffect, useState } from "react";

import Navbar from "../navbar";
import Sidebar from "../sidebar";
import UnitConverter from "../unit-converter";

import changeValue from "../changeValue";

import stl from "./LayoutUnitConv.module.scss";
import { angle } from "../changeValue/ChangeValue";

const LayoutUnitConv = () => {
  const type = angle;

  const [typeOfUnit, setTypeOfUnit] = useState(type);

  const changeType = (type) => {
    const value = changeValue(type);
    setTypeOfUnit(value);
  };

  return (
    <div className={stl.container}>
      <Navbar homeLink="/" aboutLink="/About" contactLink="/Contact" />
      <Sidebar liClickHandler={changeType} />
      <UnitConverter
        type={typeOfUnit.type}
        val="Select..."
        data={[...typeOfUnit.data]}
        customClass={stl.unit_conv}
      />
    </div>
  );
};

export default LayoutUnitConv;
