import { useEffect, useState, useRef } from "react";

import convert from "../convert/Convert";
import useClickOnOutside from "../../lib/hooks";

import DropdownIcon from "../../assets/dropdown-arr.svg";

import stl from "./Unit-Converter.module.scss";

let result;

export const getRes = (res) => {
  result = res;
};

const UnitConverter = ({ type, data, customClass }) => {
  // const [ConvType, setConvType] = useState(type);
  const [inputValue, setInputValue] = useState("Select...");
  const [outputValue, setOutputValue] = useState("Select...");
  const [value, setValue] = useState(1);

  // useEffect(() => {
  //   setInputValue("Select...");
  //   setOutputValue("Select...");
  // }, [ConvType]);

  console.log(result);

  const inputValueRef = useRef();
  const outputValueRef = useRef();

  const runConvert = async () => {
    const val = await convert(value, inputValue, outputValue, type);
    console.log(val);
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
    console.log(result);
  };
  const closeDropDownOutput = () => {
    const dropMenu = document.getElementById("dropDownOutput");
    dropMenu.style.display = "none";
    console.log(result);
  };

  const removePlaceholder = (e) => {
    e.target.placeholder = "";
  };

  useClickOnOutside(closeDropDownInput, inputValueRef);
  useClickOnOutside(closeDropDownOutput, outputValueRef);

  return (
    <>
      {/* <div className={stl.test}>
        <ul>
          <li
            onClick={() => {
              setConvType("acceleration");
            }}
          >
            acceleration
          </li>
          <li
            onClick={() => {
              setConvType("angle");
            }}
          >
            angle
          </li>
          <li
            onClick={() => {
              setConvType("apparentPower");
            }}
          >
            apparentPower
          </li>
          <li
            onClick={() => {
              setConvType("area");
            }}
          >
            area
          </li>
          <li
            onClick={() => {
              setConvType("charge");
            }}
          >
            charge
          </li>
          <li
            onClick={() => {
              setConvType("digtal");
            }}
          >
            digital
          </li>
          <li
            onClick={() => {
              setConvType("each");
            }}
          >
            each
          </li>
          <li
            onClick={() => {
              setConvType("energy");
            }}
          >
            energy
          </li>
          <li
            onClick={() => {
              setConvType("force");
            }}
          >
            force
          </li>
          <li
            onClick={() => {
              setConvType("frequency");
            }}
          >
            frequency
          </li>
          <li
            onClick={() => {
              setConvType("illuminance");
            }}
          >
            illuminance
          </li>
          <li
            onClick={() => {
              setConvType("length");
            }}
          >
            length
          </li>
          <li
            onClick={() => {
              setConvType("mass");
            }}
          >
            mass
          </li>
          <li
            onClick={() => {
              setConvType("pace");
            }}
          >
            pace
          </li>
          <li
            onClick={() => {
              setConvType("partsPer");
            }}
          >
            partsPer
          </li>
          <li
            onClick={() => {
              setConvType("pieces");
            }}
          >
            pieces
          </li>
          <li
            onClick={() => {
              setConvType("power");
            }}
          >
            power
          </li>
          <li
            onClick={() => {
              setConvType("pressure");
            }}
          >
            pressure
          </li>
          <li
            onClick={() => {
              setConvType("reactiveEnergy");
            }}
          >
            reactiveEnergy
          </li>
          <li
            onClick={() => {
              setConvType("reactivePower");
            }}
          >
            reactivePower
          </li>
          <li
            onClick={() => {
              setConvType("speed");
            }}
          >
            speed
          </li>
          <li
            onClick={() => {
              setConvType("temperature");
            }}
          >
            temperature
          </li>
          <li
            onClick={() => {
              setConvType("time");
            }}
          >
            time
          </li>
          <li
            onClick={() => {
              setConvType("voltage");
            }}
          >
            voltage
          </li>
          <li
            onClick={() => {
              setConvType("volume");
            }}
          >
            volume
          </li>
          <li
            onClick={() => {
              setConvType("volumeFlowRate");
            }}
          >
            volumeFlowRate
          </li>
        </ul>
      </div> */}
      <div className={stl.container}>
        <h1>{type}</h1>
        <div className={stl.dataContain}>
          <div className={stl.input_value}>
            <div className={stl.select}>
              <button onClick={openDropDownInput} className={stl.dropDownBtn}>
                {inputValue} <DropdownIcon />
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
                      }}
                    >
                      {unit.name} <span>({unit.symbol})</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <span className={stl.output}>{result}</span>
          </div>
        </div>
        <div className={stl.Btn}>
          <button
            onClick={() => {
              runConvert();
            }}
            className={stl.convBtn}
          >
            Convert
          </button>
        </div>
      </div>
    </>
  );
};

export default UnitConverter;
