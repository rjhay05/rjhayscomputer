import React, { useContext } from "react";
import AppContext from "../../../../store/app-context";

import Card from "../card/Card";


import style from "./FolderCard.module.css";
import CardNav from "../card/CardNav";

function FolderCard(props) {
  const ctx = useContext(AppContext);

  const closeFolderHandler = () => ctx.closeFolderHandler(false);
  return (
      <Card
        title={props.title}
        className={style.card}
        onClick={closeFolderHandler}
        show={ctx.isShowFolder}
      >
        <CardNav url={props.url} />
        <div className={style.content}>{props.children}</div>
      </Card>
  );
}

export default FolderCard;
