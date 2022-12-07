import PropTypes from "prop-types";
import clsx from "clsx";

import Logo from "../../assets/logo.svg";
import ContactIcon from "../../assets/contact.svg";
import HomeIcon from "../../assets/home.svg";
import AboutIcon from "../../assets/about.svg";

import stl from "./Navbar.module.scss";
import Link from "next/link";

const Navbar = ({
  homeLink,
  aboutLink,
  contactLink,
  unitConvLink,
  home,
  about,
  contact,
  unitConv,
  customClass,
}) => {
  return (
    <div className={clsx(stl.container, customClass)}>
      <div className={stl.logo}>
        <Link href={`${homeLink}`}>
          <Logo />
        </Link>
      </div>
      <ul className={clsx(stl.mainList, stl.collapse)}>
        <Link href={`${homeLink}`}>
          <li className={stl[`${home}`]}>Home</li>
        </Link>
        <Link href={`${unitConvLink}`}>
          <li className={stl[`${unitConv}`]}>Unit Converter</li>
        </Link>
        <Link href={`${aboutLink}`}>
          <li className={stl[`${about}`]}>About</li>
        </Link>
        <Link href={`${contactLink}`}>
          <li className={stl[`${contact}`]}>Contact</li>
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
  home: "",
  about: "",
  contact: "",
  unitConv: "",
};

Navbar.propTypes = {
  homeLink: PropTypes.string,
  aboutLink: PropTypes.string,
  contactLink: PropTypes.string,
  unitConvLink: PropTypes.string,
  home: PropTypes.string,
  about: PropTypes.string,
  contact: PropTypes.string,
  unitConv: PropTypes.string,
};

export default Navbar;
