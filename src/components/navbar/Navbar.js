import PropTypes from "prop-types";
import { useState, useRef } from "react";
import clsx from "clsx";

import DropdownArr from "../../assets/dropdown-arr.svg";
import Logo from "../../assets/logo.svg";
import Icon from "../../assets/menu.svg";

import useClickOnOutside from "../../lib/hooks";

import stl from "./Navbar.module.scss";
import Link from "next/link";

const Navbar = ({
  homeLink,
  aboutLink,
  contactLink,
  mostUsedList,
  unitConvLink,
  mostUsedLiHandler,
  customClass,
}) => {
  const [isOpenCommon, setIsOpenCommon] = useState(true);
  const [isOpenEngineer, setIsOpenEngineer] = useState(true);
  const [shortList, setShortList] = useState(false);

  const close1 = () => {
    setIsOpenCommon(true);
    const drp1 = document.getElementById("drpdwn1");
    drp1.style.width = "0";
    drp1.style.padding = "0";
    drp1.style.height = "0";
    drp1.style.opacity = "0";
  };

  const close2 = () => {
    setIsOpenEngineer(true);
    const drp2 = document.getElementById("drpdwn2");
    drp2.style.width = "0";
    drp2.style.padding = "0";
    drp2.style.height = "0";
    drp2.style.opacity = "0";
  };

  const base = useRef();
  const mostUsed = useRef();

  useClickOnOutside(close1, base);
  useClickOnOutside(close2, mostUsed);

  const showHide = () => {
    const ele = document.getElementById("shortList");
    if (!shortList) {
      ele.style.display = "flex";
      setShortList(true);
    } else if (shortList) {
      ele.style.display = "none";
      setShortList(false);
    }
  };

  console.log(customClass);

  return (
    <div className={clsx(stl.container, stl[`${customClass}`])}>
      <div className={stl.logo}>
        <Link href={`${homeLink}`}>
          <Logo />
        </Link>
      </div>
      <ul className={clsx(stl.mainList, stl.collapse)}>
        <Link href={`${homeLink}`}>
          <li>Home</li>
        </Link>
        <Link href={`${unitConvLink}`}>
          <li>Unit Converter</li>
        </Link>
        <li
          ref={mostUsed}
          id="mostUsed_conv"
          className={stl.engineer_conv}
          onClick={() => {
            if (isOpenEngineer) {
              setIsOpenEngineer(!isOpenEngineer);
              const drp2 = document.getElementById("drpdwn2");
              drp2.style.width = "100%";
              drp2.style.padding = "1rem";
              drp2.style.height = "400px";
              drp2.style.opacity = "1";
            } else if (!isOpenEngineer) {
              close2();
            }
          }}
        >
          Most Used Converters <DropdownArr />
          <ul ref={mostUsed} id="drpdwn2" className={stl.drownDown}>
            {mostUsedList.map((option, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    mostUsedLiHandler(option);
                  }}
                >
                  {option}
                </li>
              );
            })}
          </ul>
        </li>
        <Link href={`${aboutLink}`}>
          <li>About</li>
        </Link>
        <Link href={`${contactLink}`}>
          <li>Contact</li>
        </Link>
      </ul>
      <div className={stl.exp_col_Btn}>
        <div
          onClick={() => {
            showHide();
          }}
        >
          <Icon />
        </div>
        <ul id="shortList">
          <Link href={`${homeLink}`}>
            <li>Home</li>
          </Link>
          <Link href={`${aboutLink}`}>
            <li>About</li>
          </Link>
          <Link href={`${contactLink}`}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

Navbar.defaultProps = {
  homeLink: "#",
  aboutLink: "#",
  contactLink: "#",
  unitConvLink: "#",
  mostUsedList: ["Area", "Force", "Energy", "Power", "Speed", "Volume"],
  mostUsedLiHandler: () => {
    console.log("clicked...");
  },
};

Navbar.propTypes = {
  homeLink: PropTypes.string,
  aboutLink: PropTypes.string,
  contactLink: PropTypes.string,
  unitConvLink: PropTypes.string,
  mostUsedList: PropTypes.array,
  mostUsedLiHandler: PropTypes.func,
  customClass: PropTypes.string,
};

export default Navbar;
