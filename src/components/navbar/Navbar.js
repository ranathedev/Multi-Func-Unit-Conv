import { useState, useRef } from "react";
import DropdownArr from "../../assets/dropdown-arr.svg";

import useClickOnOutside from "../../lib/hooks";

import stl from "./Navbar.module.scss";

const Navbar = ({ baseList, mostUsedList, customClass }) => {
  const [isOpenCommon, setIsOpenCommon] = useState(true);
  const [isOpenEngineer, setIsOpenEngineer] = useState(true);

  const close1 = () => {
    setIsOpenCommon(true);
    const drp1 = document.getElementById("drpdwn1");
    drp1.style.width = "0";
    drp1.style.padding = "0";
    drp1.style.height = "0";
    drp1.style.opacity = "0";
    console.log("Common-List-false");
  };

  const close2 = () => {
    setIsOpenEngineer(true);
    const drp2 = document.getElementById("drpdwn2");
    drp2.style.width = "0";
    drp2.style.padding = "0";
    drp2.style.height = "0";
    drp2.style.opacity = "0";
    console.log("Engineer-List-false");
  };

  const base = useRef();
  const mostUsed = useRef();

  useClickOnOutside(close1, base);
  useClickOnOutside(close2, mostUsed);

  return (
    <div className={stl.container}>
      <ul className={stl.mainList}>
        <li>Home</li>
        <li
          ref={base}
          id="common_conv"
          className={stl.common_conv}
          onClick={() => {
            if (isOpenCommon) {
              setIsOpenCommon(!isOpenCommon);
              const drp1 = document.getElementById("drpdwn1");
              drp1.style.width = "100%";
              drp1.style.padding = "1rem";
              drp1.style.height = "275px";
              drp1.style.opacity = "1";
              console.log("Common-List-true");
            } else if (!isOpenCommon) {
              close1();
            }
          }}
        >
          Base Converters <DropdownArr />
          <ul ref={base} id="drpdwn1" className={stl.drownDown}>
            {baseList.map((option) => {
              return <li>{option}</li>;
            })}
          </ul>
        </li>
        <li
          ref={mostUsed}
          id="engineer_conv"
          className={stl.engineer_conv}
          onClick={() => {
            if (isOpenEngineer) {
              setIsOpenEngineer(!isOpenEngineer);
              const drp2 = document.getElementById("drpdwn2");
              drp2.style.width = "100%";
              drp2.style.padding = "1rem";
              drp2.style.height = "400px";
              drp2.style.opacity = "1";
              console.log("Engineer-List-true");
            } else if (!isOpenEngineer) {
              close2();
            }
          }}
        >
          Most Used Converters <DropdownArr />
          <ul ref={mostUsed} id="drpdwn2" className={stl.drownDown}>
            {mostUsedList.map((option) => {
              return <li>{option}</li>;
            })}
          </ul>
        </li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
