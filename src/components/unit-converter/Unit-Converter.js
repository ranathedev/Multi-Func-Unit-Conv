import { useEffect } from "react";
import DropdownIcon from "../../assets/dropdown-arr.svg";

import stl from "./Unit-Converter.module.scss";

const UnitConverter = () => {
  return (
    <div className={stl.container}>
      <h1>Unit Converter</h1>
      <div className={stl.dataContain}>
        <div className={stl.input_value}>
          <div className={stl.select}>
            <button>Open DropDown</button>
            <ul>
              <li>example1</li>
              <li>example2</li>
              <li>example3</li>
              <li>example4</li>
              <li>example5</li>
            </ul>
          </div>
          <input type="number" placeholder="Enter value to Convert..." />
        </div>
        <div className={stl.output_value}>
          <div className={stl.select}>
            <button>Open DropDown</button>
            <ul>
              <li>example1</li>
              <li>example2</li>
              <li>example3</li>
              <li>example4</li>
              <li>example5</li>
            </ul>
          </div>
          <span className={stl.output}>0</span>
        </div>
      </div>
      <div className={stl.Btn}>
        <button className={stl.convBtn}>Convert</button>
      </div>
    </div>
  );
};

export default UnitConverter;
