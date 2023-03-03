import React, { useEffect, useRef, useState } from "react";
import Clock from "./sub-components/clock/Clock";
import Menu from "./sub-components/menu/Menu";

import style from "./TaskBar.module.css";

function TaskBar() {
  const closeRef = useRef();

  const [showDrawer, setShowDrawer] = useState(false);
  const [mountComponent, setMountComponent] = useState(false);

  useEffect(() => {
    if (showDrawer) {
      setMountComponent(true);
      closeRef.current.style.display = "inline";
      closeRef.current.style["z-index"] = "1";
    } else if (!showDrawer) {
      setMountComponent(false);
      closeRef.current.style.display = "none";
      closeRef.current.style["z-index"] = "-1";
    }

    return () => {
      setMountComponent(false);
    };
  }, [showDrawer, mountComponent]);

  const showDrawerHandler = () => {
    setShowDrawer(true);
  };

  const closeDrawerHandler = () => {
    setShowDrawer(false);
  };

  return (
    <>
      {mountComponent && <Menu onClose={closeDrawerHandler} />}
      <nav className={style["nav-container"]}>
        <div className={style["button-container"]}>
          <button className={style["start-button"]} onClick={showDrawerHandler}>
            <i className="bi bi-house-door-fill">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-house-door-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
              </svg>
            </i>
          </button>
          <span
            className={style["close-drawer"]}
            ref={closeRef}
            onClick={closeDrawerHandler}
          ></span>
        </div>
        <div className={style["task-bar-container"]}></div>
        <div className={style["clock-container"]}>
          <Clock />
        </div>
      </nav>
    </>
  );
}

export default TaskBar;
