import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Draggable from "react-draggable";

import style from "./Card.module.css";

const Card = React.forwardRef((props, ref) => {
  const nodeRef = useRef();
  const classes = props.className;
  const contentClasses = `${style.content} ${props.contentStyle}`;

  const focusHandler = () => {
    nodeRef.current.style.zIndex = 100;
  };
  const blurHandler = () => {
    nodeRef.current.style.zIndex = 99;
  };

  return (
    <CSSTransition
      classNames="flash-window"
      in={props.show}
      timeout={60}
      mountOnEnter
      unmountOnExit
      nodeRef={nodeRef}
    >
      <Draggable bounds="parent" nodeRef={nodeRef} handle=".handle">
        <div
          className={`${style.card} ${classes}`}
          ref={nodeRef}
          onFocus={focusHandler}
          onBlur={blurHandler}
          tabIndex={0}
        >
          <div ref={ref}>
            <div className={`${style.header} handle`}>
              <div className={style.title}>
                <strong>{props.title}</strong>
              </div>
              <div className={style.actions}>
                <button>_</button>
                <button className={style["exit-icon"]} onClick={props.onClick}>
                  X
                </button>
              </div>
            </div>
            <div className={contentClasses}>{props.children}</div>
          </div>
        </div>
      </Draggable>
    </CSSTransition>
  );
});
export default Card;
