import React from "react";
import style from "./Project.module.css";

function Project(props) {
  let development = props.inDevelopment;
  if (development) {
    development = true;
  }
  return (
    <>
      <h1 className={style.title}>{props.title}</h1>
      {props.subtitle}
      {development ? (
        <p>In development</p>
      ) : (
        <a href={props.projectLink} target="_blank" rel="noreferrer">
          View in demo
        </a>
      )}
      {props.firstContent}
      <div className={style.project}>
        <img src={props.image1} alt={props.title} loading="lazy" />
      </div>
      {props.secondContent}
      <div className={style.project}>
        <img src={props.image2} alt={props.title} loading="lazy" />
      </div>    
      
     
    </>
  );
}

export default Project;
