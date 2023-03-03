import React from "react";
import ReactDOM from "react-dom";

import style from "./Menu.module.css";
import LeftIcons from "./sub-components/LeftIcons";
import RightIcons from "./sub-components/RightIcons";


const MenuOverlay = (props) => {
 
  return (
    <>
      <div className={style.backdrop} onClick={props.onClose}></div>
      <section className={style["bottom-drawer"]}>
        <div className={style["left-section"]}>
          <LeftIcons />
        </div>
        <div className={style["right-section"]}>
          <RightIcons />
        </div>
      </section>
    </>
  );
};

function Menu(props) {
  return ReactDOM.createPortal(
    <MenuOverlay {...props} />,
    document.getElementById("drawer-root")
  );
}

export default Menu;
