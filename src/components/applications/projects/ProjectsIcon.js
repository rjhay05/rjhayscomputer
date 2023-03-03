import React from "react";
import { useContext } from "react";
import AppContext from "../../../store/app-context";
import Icon from "../../shared/Icon/Icon";
import icon from "../../shared/images/project.png";
import style from './ProjectsIcon.module.css'

function ProjectsIcon() {
    const ctx = useContext(AppContext);
    const showProjectsHandler = () => {
      ctx.showProjectsHandler(true);
    }
  return (
    <Icon
      image={icon}
      className={style.icon}
      alt="Projects"
      onDoubleClick={showProjectsHandler}
      title="Projects"
    />
  );
}

export default ProjectsIcon;
