import React, { useReducer } from "react";

import style from "./ProjectList.module.css";

import Project1 from "./project-items/Project1";
import Project2 from "./project-items/Project2";
import Project3 from "./project-items/Project3";
import Project4 from "./project-items/Project4";

const projectsReducer = (state, action) => {
  if (action.type === "PROJECT_1") {
    return {
      project1: action.val,
      project2: false,
      project3: false,
      project4: false,
    };
  }

  if (action.type === "PROJECT_2") {
    return {
      project1: false,
      project2: action.val,
      project3: false,
      project4: false,
    };
  }

  if (action.type === "PROJECT_3") {
    return {
      project1: false,
      project2: false,
      project3: action.val,
      project4: false,
    };
  }

  if (action.type === "PROJECT_4") {
    return {
      project1: false,
      project2: false,
      project3: false,
      project4: action.val,
    };
  }


  return initVal;
};

const initVal = {
  project1: true,
  project2: null,
  project3: null,
  project4: null,
};

function ProjectsList() {
  const [state, dispatch] = useReducer(projectsReducer, initVal);

  const showProject1Handler = () => {
    dispatch({
      type: "PROJECT_1",
      val: true,
    });
  };

  const showProject2Handler = () => {
    dispatch({
      type: "PROJECT_2",
      val: true,
    });
  };

  const showProject3Handler = () => {
    dispatch({
      type: "PROJECT_3",
      val: true,
    });
  };

  const showProject4Handler = () => {
    dispatch({
      type: "PROJECT_4",
      val: true,
    });
  };

  return (
    <>
      <div className={style["card_left"]}>
        <ul>
          <li
            onClick={showProject1Handler}
            className={state.project1 ? `${style.active}` : ""}
          >
            Ask the Universe
          </li>
          <li
            onClick={showProject2Handler}
            className={state.project2 ? `${style.active}` : ""}
          >
            Userly
          </li>
          <li
            onClick={showProject3Handler}
            className={state.project3 ? `${style.active}` : ""}
          >
            Expensinator
          </li>
          <li
            onClick={showProject4Handler}
            className={state.project4 ? `${style.active}` : ""}
          >
            Betty's Kitchen
          </li>
        </ul>
      </div>
      <div className={style["card_right"]}>
        {state.project1 && <Project1 />}
        {state.project2 && <Project2 />}
        {state.project3 && <Project3 />}
        {state.project4 && <Project4 />}
      </div>
    </>
  );
}

export default ProjectsList;
