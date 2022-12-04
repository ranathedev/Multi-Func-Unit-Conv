import { useState, useRef, useEffect } from "react";
import useClickOnOutside from "../../lib/hooks";

import ArrowIcon from "../../assets/navigate_next_FILL0_wght400_GRAD0_opsz24.svg";
import MenuIcon from "../../assets/menu.svg";

import stl from "./Sidebar.module.scss";

const Sidebar = ({ list, customClass }) => {
  const [id, setId] = useState();
  const ref = useRef();

  useEffect(() => {
    const id = localStorage.getItem("id");
    setId(id);
  }, []);

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
    <div className={stl.container}>
      <div className={stl.sidebarTitle}>
        <MenuIcon />
        <h2>Menu</h2>
      </div>
      <div className={stl.sidebarList}>
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
