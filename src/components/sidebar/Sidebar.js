import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

import useClickOnOutside from "../../lib/hooks";
import useWindowDimensions from "../usewindowdimensions";

import ArrowIcon from "../../assets/navigate_next_FILL0_wght400_GRAD0_opsz24.svg";
import MenuIcon from "../../assets/menu.svg";

import stl from "./Sidebar.module.scss";

const Sidebar = ({ list, customClass }) => {
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

export default Sidebar;
