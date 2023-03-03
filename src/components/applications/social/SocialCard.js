import React from "react";
import LinkedInIcon from "../../shared/images/linkedin.png";
import FacebookIcon from "../../shared/images/facebook.png";
import GithubIcon from "../../shared/images/github.png";
import style from "./SocialCard.module.css";
import Icon from "../../shared/Icon/Icon";
import FolderCard from "../../shared/UIelements/folder/FolderCard";

function SocialCard() {
  return (
    <FolderCard url="E:\Portfolio\windows-portfolio" title='Social'>
      <Icon
        image={LinkedInIcon}
        alt="Linkedin"
        className={style["linkedin-icon"]}
        href="https://www.linkedin.com/in/rjhay-costales-648548122/"
      />
      <Icon
        image={GithubIcon}
        alt="GitHub"
        className={style["github-icon"]}
        href="https://github.com/rjhay05"
      />
      <Icon
        image={FacebookIcon}
        alt="LinkedIn"
        className={style["facebook-icon"]}
        href="https://www.facebook.com/RjhayCostales"
      />
    </FolderCard>
  );
}

export default SocialCard;
