import React, { useContext } from "react";

import Card from "../../shared/UIelements/card/Card";
import style from "./ProjectsCard.module.css";
import AppContext from "../../../store/app-context";
import ProjectsList from "./sub-components/ProjectsList";

function ProjectsCard() {
  const ctx = useContext(AppContext);
  const closeProjectsHandler = () => ctx.closeProjectsHandler(false);

  return (
      <Card
        className={style["project-card"]}
        onClick={closeProjectsHandler}
        title="Projects"
        show={ctx.isShowProjects}
        contentStyle={style.content}
      >
        <ProjectsList />
      </Card>
  );
}

export default ProjectsCard;
