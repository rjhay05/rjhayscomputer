import React from "react";
import ComputerIcon from "../../../../shared/images/computer.png";
import GalleryIcon from "../../../../shared/images/image.png";
import DocumentsIcon from "../../../../shared/images/empty-folder.png";
import ShutDownIcon from "../../../../shared/images/power-button.png";
import Icon from "../../../../shared/Icon/Icon";

import style from "./LeftIcons.module.css";

function LeftIcons() {
  return (
    <>
      <div className={style.icons}>
        <Icon image={ComputerIcon} alt="My Computer" title="My Computer" />
        <Icon image={GalleryIcon} alt="Gallery" title="Images" />
        <Icon image={DocumentsIcon} alt="Documents" title="Documents" />
      </div>
      <div className={style["power-options"]}>
        <Icon
          image={ShutDownIcon}
          alt="Shutdown"
          title="Turn off computer"
          className={style["power-options"]}
        />
      </div>
    </>
  );
}

export default LeftIcons;
