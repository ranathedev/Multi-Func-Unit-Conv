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
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [inputName, setInputName] = useState("");
  const [outputName, setOutputName] = useState("");
  const [value, setValue] = useState(0);
  const [Btnlabel, setBtnlabel] = useState("Convert");
  const [isDisabled, setIsDisabled] = useState(false);

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
    if (inputValue === "") {
      alert("Select Input Method");
    } else if (outputValue === "") {
      alert("Select Output Method");
    } else if (value === 0) {
      alert("Enter Value Greater than 0");
    } else {
      setBtnlabel("Calculating");

      setIsDisabled(true);

      setRes("");

      axios
        .get(
          `https://zylalabs.com/api/189/measurement+unit+conversion+api/202/unit+converter?value=${value}&from=${inputVal}&to=${outputVal}&measure=${type}`,
          config
        )
        .then((response) => {
          const data = response.data.value;
          setRes(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    setTimeout(() => setBtnlabel("Convert"), 2000);

    setInputValue("");
    setInputName("Select...");
    setOutputValue("");
    setOutputName("Select...");
    setValue(0);
  };

  useEffect(() => {
    setIsDisabled(false);
  }, [res]);

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
            value={value}
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
          <span className={stl.output}>
            {res} {outputValue}
          </span>
        </div>
      </div>
      <div className={stl.Btn}>
        <button
          disabled={isDisabled}
          type="submit"
          onClick={() => {
            if (Btnlabel !== "Calculating") {
              convert(value, inputValue, outputValue, type);
            }
          }}
          className={stl.convBtn}
        >
          {Btnlabel}
        </button>
      </div>
    </div>
  );
};

UnitConverter.propTypes = {
  type: PropTypes.string,
  data: PropTypes.array,
  val: PropTypes.string,
};

export default UnitConverter;
