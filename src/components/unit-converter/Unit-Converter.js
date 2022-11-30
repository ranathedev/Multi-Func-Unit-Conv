import { useState } from "react";
import DropdownIcon from "../../assets/dropdown-arr.svg";

import stl from "./Unit-Converter.module.scss";

const UnitConverter = ({ type, units }) => {
  const [inputValue, setInputValue] = useState("Select...");
  const [outputValue, setOutputValue] = useState("Select...");
  const [value, setValue] = useState(1);

  const openDropDownInput = () => {
    const dropMenu = document.getElementById("dropDownInput");
    dropMenu.style.display = "flex";
  };

  const openDropDownOutput = () => {
    const dropMenu = document.getElementById("dropDownOutput");
    dropMenu.style.display = "flex";
  };

  const closeDropDownInput = () => {
    const dropMenu = document.getElementById("dropDownInput");
    dropMenu.style.display = "none";
  };
  const closeDropDownOutput = () => {
    const dropMenu = document.getElementById("dropDownOutput");
    dropMenu.style.display = "none";
  };

  const removePlaceholder = (e) => {
    e.target.placeholder = "";
  };

  return (
    <div className={stl.container}>
      <h1>{type}</h1>
      <div className={stl.dataContain}>
        <div className={stl.input_value}>
          <div className={stl.select}>
            <button onClick={openDropDownInput} className={stl.dropDownBtn}>
              {inputValue} <DropdownIcon />
            </button>
            <ul id="dropDownInput" className={stl.dropDown_input}>
              {units.map((unit, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => {
                      closeDropDownInput();
                      setInputValue(unit.name);
                    }}
                  >
                    {unit.name} <span>({unit.symbol})</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <input
            type="number"
            placeholder="Enter value to Convert..."
            onChange={(e) => setValue(e.target.value)}
            onFocus={(e) => removePlaceholder(e)}
          />
        </div>
        <div className={stl.output_value}>
          <div className={stl.select}>
            <button onClick={openDropDownOutput} className={stl.dropDownBtn}>
              {outputValue} <DropdownIcon />
            </button>
            <ul id="dropDownOutput" className={stl.dropDown_output}>
              {units.map((unit, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => {
                      closeDropDownOutput();
                      setOutputValue(unit.name);
                    }}
                  >
                    {unit.name} <span>({unit.symbol})</span>
                  </li>
                );
              })}
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
