import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

import useClickOnOutside from "../../lib/hooks";
import useWindowDimensions from "../usewindowdimensions";
import childList from "../data2";

import ArrowIcon from "../../assets/arrow-right.svg";
import MenuIcon from "../../assets/menu.svg";

import stl from "./Sidebar.module.scss";

const Sidebar = ({ list, liClickHandler, customClass }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [listType, setListType] = useState(0);
  const ref = useRef();

  const { width } = useWindowDimensions();

  const breakpoint = 850;
  const breakpoint2 = 710;
  const breakpoint3 = 540;
  const breakpoint4 = 440;
  const breakpoint5 = 400;

  const expandSidebar = () => {
    const sidebar = document.getElementById("sidebar");

    if (width <= breakpoint) {
      if (!isOpen) {
        sidebar.classList.remove(stl.sdbarCollapse);

        if (width <= breakpoint && width > breakpoint2) {
          sidebar.style.width = " 30vw";
          sidebar.style.borderRadius = "0 100px 0 0";
        } else if (width <= breakpoint2 && width > breakpoint3) {
          sidebar.style.width = "40vw";
          sidebar.style.borderRadius = "0 100px 0 0";
        } else if (width <= breakpoint3 && width > breakpoint4) {
          sidebar.style.width = "50vw";
          sidebar.style.borderRadius = "0 100px 0 0";
        } else if (width <= breakpoint4 && width > breakpoint5) {
          sidebar.style.width = "60vw";
          sidebar.style.borderRadius = "0 100px 0 0";
        } else if (width <= breakpoint5) {
          sidebar.style.width = "60vw";
          sidebar.style.height = "90vh";
          sidebar.style.borderRadius = "0 100px 0 0";
        } else if (width > breakpoint) {
          sidebar.style.width = " 20vw";
          sidebar.style.borderRadius = "0 100px 0 0";
        }

        setIsOpen(true);
      } else if (isOpen) {
        sidebar.classList.add(stl.sdbarCollapse);

        if (width <= breakpoint5) {
          sidebar.style.height = "11.5vh";
          sidebar.style.top = "3%";
          sidebar.style.borderRadius = "0 50px 50px 0";
        }

        setIsOpen(false);
      }
    } else {
      setIsOpen(false);
    }
  };

  if (typeof window !== "undefined") {
    setTimeout(() => {
      const sidebar = document.getElementById("sidebar");

      if (width <= breakpoint && !isOpen) {
        sidebar.classList.add(stl.sdbarCollapse);
        sidebar.style.width = "70px";
      } else if (width > breakpoint) {
        sidebar.classList.remove(stl.sdbarCollapse);
        sidebar.style.width = "20vw";
        sidebar.style.height = "90vh";
        sidebar.style.top = "0 100px 0 0";
      }
    }, 100);

    useEffect(() => {
      width >= breakpoint && setIsOpen(false);
    }, [width]);
  }

  const openList = () => {
    const list = document.getElementById("childList");
    list.style.width = "100%";
    list.style.opacity = "1";
  };
  const closeList = () => {
    if (typeof window !== "undefined") {
      const list = document.getElementById("childList");
      list.style.width = "0";
      list.style.opacity = "0";
    }
  };

  useClickOnOutside(closeList, ref);

  return (
    <div className={clsx(stl.container, customClass)} id="sidebar">
      <div className={stl.sidebarTitle}>
        <MenuIcon onClick={expandSidebar} />
        <h2 id="sdbarTit">Menu</h2>
      </div>
      <div className={stl.sidebarList} id="sidebarList">
        <ul className={stl.mainList} id="mainList">
          {list.map((option, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  setListType(i);
                  openList();
                }}
              >
                {option} {<ArrowIcon />}
              </li>
            );
          })}
        </ul>
        <ul ref={ref} id="childList" className={stl.childList}>
          {childList[listType].map((option) => (
            <li
              onClick={() => {
                liClickHandler(option);
                closeList();
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Sidebar.defaultProps = {
  list: [
    "Area",
    "Electrical",
    "Power",
    "Quantity",
    "Speed",
    "Volume",
    "Others",
  ],
  liClickHandler: () => {
    console.log("clicked...");
  },
};

Sidebar.propTypes = {
  list: PropTypes.array,
  liClickHandler: PropTypes.func,
  customClass: PropTypes.string,
};

export default Sidebar;
