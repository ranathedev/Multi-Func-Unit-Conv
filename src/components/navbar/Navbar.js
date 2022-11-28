import { useState } from "react";
import DropdownArr from "../../assets/dropdown-arr.svg";

import stl from "./Navbar.module.scss";

const Navbar = () => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className={stl.container}>
      <ul className={stl.mainList}>
        <li>Home</li>
        <li
          id="common_conv"
          className={stl.common_conv}
          onClick={() => {
            if (isOpen1) {
              setIsOpen1(!isOpen1);
              const drp1 = document.getElementById("drpdwn1");
              drp1.style.width = "100%";
              drp1.style.padding = "1rem";
              drp1.style.height = "220px";
              drp1.style.opacity = "1";
              console.log("true");
            } else if (!isOpen1) {
              setIsOpen1(true);
              const drp1 = document.getElementById("drpdwn1");
              drp1.style.width = "0";
              drp1.style.padding = "0";
              drp1.style.height = "0";
              drp1.style.opacity = "0";
              console.log("false");
            }
          }}
        >
          Common Converters <DropdownArr />
          <ul id="drpdwn1" className={stl.drownDown}>
            <li>example</li>
            <li>example</li>
            <li>example</li>
          </ul>
        </li>
        <li
          id="engineer_conv"
          className={stl.engineer_conv}
          onClick={() => {
            if (isOpen2) {
              setIsOpen2(!isOpen2);
              const drp2 = document.getElementById("drpdwn2");
              drp2.style.width = "100%";
              drp2.style.padding = "1rem";
              drp2.style.height = "220px";
              drp2.style.opacity = "1";
              console.log("true");
            } else if (!isOpen2) {
              setIsOpen2(true);
              const drp2 = document.getElementById("drpdwn2");
              drp2.style.width = "0";
              drp2.style.padding = "0";
              drp2.style.height = "0";
              drp2.style.opacity = "0";
              console.log("false");
            }
          }}
        >
          Engineer Converters <DropdownArr />
          <ul id="drpdwn2" className={stl.drownDown}>
            <li>example</li>
            <li>example</li>
            <li>example</li>
          </ul>
        </li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
