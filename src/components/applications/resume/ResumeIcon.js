import React from "react";
import { useContext } from "react";
import AppContext from "../../../store/app-context";
import Icon from "../../shared/Icon/Icon";
import icon from "../../shared/images/cv.png";
import style from './ResumeIcon.module.css'

function ResumeIcon() {
    const ctx = useContext(AppContext)
  const showResumeHandler = () => ctx.showResumeHandler(true);
  return (
    <Icon
      image={icon}
      alt="Resume"
      onDoubleClick={showResumeHandler}
      className={style.icon}
      title="Download Resume"
    />
  );
}

export default ResumeIcon;
