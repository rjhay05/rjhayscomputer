import React, { useContext } from "react";
import Card from "../../shared/UIelements/card/Card";
import style from "./AboutCard.module.css";
import AppContext from "../../../store/app-context";

function AboutCard() {
  const ctx = useContext(AppContext);

  const closeAboutHandler = () => {
    ctx.closeAboutHandler(false);
  };
 

  return (
    <>
      <Card
        id='card'
        className={style["about-card"]}
        onClick={closeAboutHandler}
        title="About"
        show={ctx.isShowAbout}
      >
        <p>
          Hi there, my name is Rjhay, I am a front-end developer, sometimes I do
          full-stack. I am currently looking for a job. If you are interested in
          working with me, I have a shortcut of my resume hanging in the desktop
          or you could click Contact to email me directly.
        </p>
      </Card>
    </>
  );
}

export default AboutCard;
