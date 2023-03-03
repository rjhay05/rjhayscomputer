import React, { useContext } from "react";
import AppContext from "../../../store/app-context";
import Card from "../../shared/UIelements/card/Card";
import File from "../../file/resume.docx";
import Button from "../../shared/UIelements/button/Button";
import style from "./ResumeCard.module.css";

function ResumeCard() {
  const ctx = useContext(AppContext);

  const closeResumeHandler = () => ctx.closeResumeHandler(false);
  return (
    <Card
      title="Resume"
      className={style["resume-card"]}
      onClick={closeResumeHandler}
      show={ctx.isShowResume}
    >
      <div className={style.content}>
        <p>You are about to download a file.</p>
        <i className="bi bi-file-earmark-arrow-down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-file-earmark-arrow-down"
            viewBox="0 0 16 16"
          >
            <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z" />
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
          </svg>
        </i>
      </div>
      <div className={style.action}>
        <a href={File} download="Resume">
          <Button>Download</Button>
        </a>
      </div>
    </Card>
  );
}

export default ResumeCard;
