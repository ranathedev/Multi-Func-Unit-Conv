import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

import useClickOnOutside from "../../lib/hooks";
import useWindowDimensions from "../usewindowdimensions";

import ArrowIcon from "../../assets/navigate_next_FILL0_wght400_GRAD0_opsz24.svg";
import MenuIcon from "../../assets/menu.svg";

import stl from "./Sidebar.module.scss";

const Sidebar = ({ list, liClickHandler, customClass }) => {
  const [id, setId] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const { width } = useWindowDimensions();

  const breakpoint = 850;

  useEffect(() => {
    const id = localStorage.getItem("id");
    setId(id);
  }, []);

  const expandSidebar = () => {
    const sidebar = document.getElementById("sidebar");

    if (width <= breakpoint) {
      if (!isOpen) {
        sidebar.classList.remove(stl.sdbarCollapse);

        if (width <= breakpoint) {
          sidebar.style.width = " 30vw";
        } else if (width > breakpoint) {
          sidebar.style.width = " 20vw";
        }

        setIsOpen(true);
      } else if (isOpen) {
        sidebar.classList.add(stl.sdbarCollapse);

        setIsOpen(false);
      }
    } else {
      setIsOpen(false);
    }
  };

  if (typeof window !== "undefined") {
    setTimeout(() => {
      console.log("running");
      const sidebar = document.getElementById("sidebar");

      if (width <= breakpoint && !isOpen) {
        sidebar.classList.add(stl.sdbarCollapse);
        sidebar.style.width = "70px";
      } else if (width > breakpoint) {
        sidebar.classList.remove(stl.sdbarCollapse);
        sidebar.style.width = "20vw";
      }
    }, 100);

    useEffect(() => {
      width >= breakpoint && setIsOpen(false);
    }, [width]);
  }

  const openList = (id) => {
    const list = document.getElementById(id);
    list.style.width = "100%";
    list.style.opacity = "1";
  };
  const closeList = () => {
    const id = localStorage.getItem("id");
    if (typeof window !== "undefined") {
      const list = document.getElementById(id || 0);
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
          {list.map((option, index) => {
            return (
              <li key={index}>
                <p
                  onClick={() => {
                    openList(index);
                    localStorage.setItem("id", index);
                  }}
                >
                  {option.name} {<ArrowIcon />}
                </p>
                <ul ref={ref} id={index} className={stl.childList}>
                  {option.list.map((opt, i) => {
                    return (
                      <li
                        key={i}
                        className={opt.class}
                        id={opt.id}
                        onClick={() => {
                          liClickHandler();
                          closeList();
                        }}
                      >
                        {opt.name}
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

Sidebar.defaultProps = {
  list: [
    {
      name: "Area",
      list: [
        { name: "Angle", class: "li1", id: "li1" },
        { name: "Area", class: "li1", id: "li1" },
        { name: "Length", class: "li1", id: "li1" },
      ],
    },
    {
      name: "Electrical",
      list: [
        { name: "Charge", class: "li2", id: "li2" },
        { name: "Current", class: "li2", id: "li2" },
        { name: "Illuminance", class: "li2", id: "li2" },
        { name: "Voltage", class: "li2", id: "li2" },
      ],
    },
    {
      name: "Power",
      list: [
        { name: "Apparent Power", class: "li3", id: "li3" },
        { name: "Energy", class: "li3", id: "li3" },
        { name: "Power", class: "li3", id: "li3" },
        { name: "Reactive Energy", class: "li3", id: "li3" },
        { name: "Reactive Power", class: "li3", id: "li3" },
      ],
    },
    {
      name: "Quantity",
      list: [
        { name: "Digital", class: "li4", id: "li4" },
        { name: "Each", class: "li4", id: "li4" },
        { name: "Mass", class: "li4", id: "li4" },
        { name: "PartsPer", class: "li4", id: "li4" },
        { name: "Pieces", class: "li4", id: "li4" },
      ],
    },
    {
      name: "Speed",
      list: [
        { name: "Acceleration", class: "li5", id: "li5" },
        { name: "Pace", class: "li5", id: "li5" },
        { name: "Speed", class: "li5", id: "li5" },
      ],
    },
    {
      name: "Volume",
      list: [
        { name: "Volume", class: "li5", id: "li5" },
        { name: "Volume Flow Rate", class: "li5", id: "li5" },
      ],
    },
    {
      name: "Others",
      list: [
        { name: "Force", class: "li5", id: "li5" },
        { name: "Frequency", class: "li5", id: "li5" },
        { name: "Pressure", class: "li5", id: "li5" },
        { name: "Temperature", class: "li5", id: "li5" },
        { name: "Time", class: "li5", id: "li5" },
      ],
    },
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
