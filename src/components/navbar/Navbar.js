import { useState, useRef } from "react";
import DropdownArr from "../../assets/dropdown-arr.svg";

import useClickOnOutside from "../../lib/hooks";

import stl from "./Navbar.module.scss";

const Navbar = ({ list1, list2, customClass }) => {
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

  const common_ref = useRef();
  const engineer_ref = useRef();

  useClickOnOutside(close1, common_ref);
  useClickOnOutside(close2, engineer_ref);

  return (
    <div className={stl.container}>
      <ul className={stl.mainList}>
        <li>Home</li>
        <li
          ref={common_ref}
          id="common_conv"
          className={stl.common_conv}
          onClick={() => {
            if (isOpenCommon) {
              setIsOpenCommon(!isOpenCommon);
              const drp1 = document.getElementById("drpdwn1");
              drp1.style.width = "100%";
              drp1.style.padding = "1rem";
              drp1.style.height = "220px";
              drp1.style.opacity = "1";
              console.log("Common-List-true");
            } else if (!isOpenCommon) {
              close1();
            }
          }}
        >
          Common Converters <DropdownArr />
          <ul ref={common_ref} id="drpdwn1" className={stl.drownDown}>
            {list1.map((option) => {
              return <li>{option}</li>;
            })}
          </ul>
        </li>
        <li
          ref={engineer_ref}
          id="engineer_conv"
          className={stl.engineer_conv}
          onClick={() => {
            if (isOpenEngineer) {
              setIsOpenEngineer(!isOpenEngineer);
              const drp2 = document.getElementById("drpdwn2");
              drp2.style.width = "100%";
              drp2.style.padding = "1rem";
              drp2.style.height = "220px";
              drp2.style.opacity = "1";
              console.log("Engineer-List-true");
            } else if (!isOpenEngineer) {
              close2();
            }
          }}
        >
          Engineer Converters <DropdownArr />
          <ul ref={engineer_ref} id="drpdwn2" className={stl.drownDown}>
            {list2.map((option) => {
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
