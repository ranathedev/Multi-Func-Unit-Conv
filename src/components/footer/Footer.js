import PropTypes from "prop-types";
import clsx from "clsx";

import useWindowDimensions from "../../components/usewindowdimensions";

import Logo from "../../assets/logo-footer.svg";
import Logo2 from "../../assets/logo-footer2.svg";
import FacebookIcon from "../../assets/facebook-footer.svg";
import TwitterIcon from "../../assets/twitter-footer.svg";
import EmailIcon from "../../assets/mail-footer.svg";

import stl from "./Footer.module.scss";
import Link from "next/link";

const Footer = ({
  priv_po_Link,
  term_cond_Link,
  homeLink,
  aboutLink,
  contactLink,
  customClass,
}) => {
  const { width } = useWindowDimensions();

  let flag = true;

  if (typeof window !== "undefined") {
    const breakpoint = 340;
    if (width <= breakpoint) {
      flag = false;
    }
  }

  return (
    <div className={clsx(stl.container, customClass)}>
      <div className={stl.row1}>
        <Link href={`${homeLink}`}>
          <div className={stl.logo}>{flag ? <Logo /> : <Logo2 />}</div>
        </Link>
        <div className={stl.connectBtns}>
          <a
            href="https://www.facebook.com/profile.php?id=100088339993655"
            target="_blank"
          >
            <FacebookIcon />
          </a>
          <a href="https://twitter.com/intizar47426" target="_blank">
            <TwitterIcon />
          </a>
          <a href="mailto:intizaralirana2@gmail.com" target="_blank">
            <EmailIcon />
          </a>
        </div>
      </div>
      <div className={stl.row2}>
        <div className={stl.left}>
          <Link href={`${priv_po_Link}`}>
            <h3>Privacy & Policy</h3>
          </Link>
          <Link href={`${term_cond_Link}`}>
            {" "}
            <h3>Terms & Conditions</h3>
          </Link>
        </div>
        <div className={stl.right}>
          <Link href={`${homeLink}`}>
            <h3>Home</h3>
          </Link>
          <Link href={`${aboutLink}`}>
            <h3>About</h3>
          </Link>
          <Link href={`${contactLink}`}>
            <h3>Contact</h3>
          </Link>
        </div>
      </div>
      <div className={stl.divider}></div>
      <p>Copyright 2022. All Rights Reserved</p>
    </div>
  );
};

Footer.defaultProps = {
  priv_po_Link: "#",
  term_cond_Link: "#",
  homeLink: "#",
  aboutLink: "#",
  contactLink: "#",
};

Footer.propTypes = {
  priv_po_Link: PropTypes.string,
  term_cond_Link: PropTypes.string,
  homeLink: PropTypes.string,
  aboutLink: PropTypes.string,
  contactLink: PropTypes.string,
  customClass: PropTypes.string,
};

export default Footer;
