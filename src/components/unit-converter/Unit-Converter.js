import { useEffect, useState, useRef } from "react";
import axios from "axios";

import LoadingScreen from "../loaingScreen/Loading";
import useClickOnOutside from "../../lib/hooks";

import DropdownIcon from "../../assets/dropdown-arr.svg";

import stl from "./Unit-Converter.module.scss";

const UnitConverter = ({ type, data, customClass }) => {
  // const [ConvType, setConvType] = useState(type);
  const [res, setRes] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const [inputValue, setInputValue] = useState("Select...");
  const [outputValue, setOutputValue] = useState("Select...");
  const [value, setValue] = useState(1);

  // useEffect(() => {
  //   setInputValue("Select...");
  //   setOutputValue("Select...");
  // }, [ConvType]);

  const inputValueRef = useRef();
  const outputValueRef = useRef();

  const config = {
    headers: {
      Authorization: "Bearer 373|5muD1RjjZDqrhmJk628CK0b17ky0K6SlMFnAYxkX",
    },
  };

  const convert = (value, inputVal, outputVal, type) => {
    axios
      .get(
        `https://zylalabs.com/api/189/measurement+unit+conversion+api/202/unit+converter?value=${value}&from=${inputVal}&to=${outputVal}&measure=${type}`,
        config
      )
      .then(function (response) {
        const data = response.data.value;
        console.log(data);
        setRes(data);
      })
      .catch(function (error) {
        console.log(error);
      });

    setIsLoading(false);
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
      {(isLoading && <LoadingScreen />) || (
        <div className={clsx(stl.container, customClass)}>
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
                <button
                  onClick={openDropDownOutput}
                  className={stl.dropDownBtn}
                >
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
              <span className={stl.output}>{res}</span>
            </div>
          </div>
          <div className={stl.Btn}>
            <button
              onClick={() => {
                convert(value, inputValue, outputValue, type);
              }}
              className={stl.convBtn}
            >
              Convert
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UnitConverter;
