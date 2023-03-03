import React, { useContext } from "react";

import AboutIcon from "../../../../shared/images/about.png";
import ProjectIcon from "../../../../shared/images/project.png";
import ContactIcon from "../../../../shared/images/mail.png";
import ResumeIcon from "../../../../shared/images/cv.png";
import Icon from "../../../../shared/Icon/Icon";

import style from "./RightIcons.module.css";

import AppContext from "../../../../../store/app-context";

function RightIcons() {
  const aboutCtx = useContext(AppContext);
  const projectsCtx = useContext(AppContext);
  const resumeCtx = useContext(AppContext);

  const showAboutHandler = () => aboutCtx.showAboutHandler(true);
  const showProjectsHandler = () => projectsCtx.showProjectsHandler(true);
  const showContactHandler = () =>
    window.open("mailto:rjhaycostales05@gmail.com");
  const showResumeHandler = () => resumeCtx.showResumeHandler(true);
  return (
    <>
      <div>
        <Icon
          image={AboutIcon}
          className={style["about-icon"]}
          alt="About"
          onClick={showAboutHandler}
        />
      </div>
      <div>
        <Icon
          image={ProjectIcon}
          className={style["projects-icon"]}
          alt="Projects"
          onClick={showProjectsHandler}
        />
      </div>
      <div>
        <Icon
          image={ContactIcon}
          className={style["contact-icon"]}
          alt="Contact"
          onClick={showContactHandler}
        />
      </div>
      <div>
        <Icon
          image={ResumeIcon}
          className={style["resume-icon"]}
          alt="Resume"
          onClick={showResumeHandler}
        />
      </div>
    </>
  );
}

export default RightIcons;
