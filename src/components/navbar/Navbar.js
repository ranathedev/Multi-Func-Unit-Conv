import PropTypes from "prop-types";
import { useState, useRef } from "react";
import clsx from "clsx";

import Logo from "../../assets/logo.svg";
import ContactIcon from "../../assets/contact.svg";
import HomeIcon from "../../assets/home.svg";
import AboutIcon from "../../assets/about.svg";

import useClickOnOutside from "../../lib/hooks";

import stl from "./Navbar.module.scss";
import Link from "next/link";

const Navbar = ({
  homeLink,
  aboutLink,
  contactLink,
  unitConvLink,
  customClass,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const showHide = () => {
    const list = document.getElementById("list");
    if (isOpen) {
      list.style.display = "none";
      setIsOpen(false);
    } else {
      list.style.display = "flex";
      setIsOpen(true);
    }
  };

  const close = () => {
    const list = document.getElementById("list");
    list.style.display = "none";
  };

  const ref = useRef();

  useClickOnOutside(close, ref);

  return (
    <div className={clsx(stl.container, customClass)}>
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
        <Link href={`${aboutLink}`}>
          <li>About</li>
        </Link>
        <Link href={`${contactLink}`}>
          <li>Contact</li>
        </Link>
      </ul>
      <div className={stl.exp_col_Btn}>
        <div className={stl.left}>
          <Link href={`${homeLink}`}>
            <HomeIcon />
          </Link>
        </div>
        <div className={stl.middle}>
          <Link href={`${unitConvLink}`}>
            <h2>Unit Converter</h2>
          </Link>
        </div>
        <div className={stl.right}>
          <Link href={`${contactLink}`}>
            <ContactIcon />
          </Link>
          <Link href={`${aboutLink}`}>
            <AboutIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

Navbar.defaultProps = {
  homeLink: "",
  aboutLink: "",
  contactLink: "",
  unitConvLink: "",
};

Navbar.propTypes = {
  homeLink: PropTypes.string,
  aboutLink: PropTypes.string,
  contactLink: PropTypes.string,
  unitConvLink: PropTypes.string,
};

export default Navbar;
