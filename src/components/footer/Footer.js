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
  contactLink,
  unitConvLink,
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
        <Link href={`${unitConvLink}`}>
          <h3>Unit Converter</h3>
        </Link>
        <Link href={`${contactLink}`}>
          <h3>Contact</h3>
        </Link>
      </div>
      <div className={stl.divider}></div>
      <p>Copyright 2022. All Rights Reserved</p>
    </div>
  );
};

Footer.defaultProps = {
  priv_po_Link: "",
  term_cond_Link: "",
  homeLink: "",
  unitConvLink: "",
  contactLink: "",
};

Footer.propTypes = {
  priv_po_Link: PropTypes.string,
  term_cond_Link: PropTypes.string,
  homeLink: PropTypes.string,
  unitConvLink: PropTypes.string,
  contactLink: PropTypes.string,
  customClass: PropTypes.string,
};

export default Footer;
