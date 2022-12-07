import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import axios from "axios";

import LoadingScreen from "../loaingScreen/Loading";
import useClickOnOutside from "../../lib/hooks";

import DropdownIcon from "../../assets/dropdown-arr.svg";

import stl from "./Unit-Converter.module.scss";

const UnitConverter = ({ type, val, data, customClass }) => {
  const [res, setRes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [inputName, setInputName] = useState("");
  const [outputName, setOutputName] = useState("");
  const [value, setValue] = useState(1);

  const inputValueRef = useRef();
  const outputValueRef = useRef();

  const config = {
    headers: {
      Authorization: "Bearer 411|zmgWPDtA2DsgTnirjaR2qK0fIlze1TMWGu0MhIV2",
    },
  };

  useEffect(() => {
    setInputName(val);
    setOutputName(val);
    setInputValue("");
    setOutputValue("");
  }, [type]);

  const convert = (value, inputVal, outputVal, type) => {
    axios
      .get(
        `https://zylalabs.com/api/189/measurement+unit+conversion+api/202/unit+converter?value=${value}&from=${inputVal}&to=${outputVal}&measure=${type}`,
        config
      )
      .then((response) => {
        const data = response.data.value;
        console.log(data);
        setRes(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  useClickOnOutside(closeDropDownInput, inputValueRef);
  useClickOnOutside(closeDropDownOutput, outputValueRef);

  return (
    (isLoading && <LoadingScreen />) || (
      <div className={clsx(stl.container, customClass)}>
        <h1>{type}</h1>
        <div className={stl.dataContain}>
          <div className={stl.input_value}>
            <div className={stl.select}>
              <button onClick={openDropDownInput} className={stl.dropDownBtn}>
                {inputName} <DropdownIcon />
              </button>
              <ul
                ref={inputValueRef}
                id="dropDownInput"
                className={stl.dropDown_input}
              >
                {data.map((unit, i) => {
                  return (
                    <li
                      key={i}
                      onClick={() => {
                        closeDropDownInput();
                        setInputValue(unit.symbol);
                        setInputName(unit.name);
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
                {outputName} <DropdownIcon />
              </button>
              <ul
                ref={outputValueRef}
                id="dropDownOutput"
                className={stl.dropDown_output}
              >
                {data.map((unit, i) => {
                  return (
                    <li
                      key={i}
                      onClick={() => {
                        closeDropDownOutput();
                        setOutputValue(unit.symbol);
                        setOutputName(unit.name);
                      }}
                    >
                      {unit.name} <span>({unit.symbol})</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <span className={stl.output}>{res}</span>
          </div>
        </div>
        <div className={stl.Btn}>
          <button
            type="submit"
            onClick={() => {
              convert(value, inputValue, outputValue, type);
            }}
            className={stl.convBtn}
          >
            Convert
          </button>
        </div>
      </div>
    )
  );
};

UnitConverter.propTypes = {
  type: PropTypes.string,
  data: PropTypes.array,
  val: PropTypes.string,
};

export default UnitConverter;
