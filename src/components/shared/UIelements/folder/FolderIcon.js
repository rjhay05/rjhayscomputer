import React from "react";
import { useContext } from "react";
import AppContext from "../../../../store/app-context";
import Icon from "../../Icon/Icon";
import icon from "../../images/folder.png";

function FolderIcon(props) {
    const ctx = useContext(AppContext)
    const showFolderHandler = () => ctx.showFolderHandler(true);
  return (
    <Icon
      className={props.className}
      image={icon}
      alt={props.alt}
      onDoubleClick={showFolderHandler}
      title={props.tooltip}
    />
  );
}

export default FolderIcon;
