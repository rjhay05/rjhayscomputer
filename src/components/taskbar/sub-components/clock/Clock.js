import React, { useEffect, useState } from "react";

import style from "./Clock.module.css";

function Clock() {
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [unit, setUnit] = useState();

  useEffect(() => {
    const interval = setInterval(time, 10);

    if (hours >= 12) {
      setUnit("PM");
    } else {
      setUnit("AM");
    }

    return () => {
      clearInterval(interval);
    };
  }, [hours, minutes]);

  const time = () => {
    const dateTime = new Date();
    setHours(dateTime.getHours());
    setMinutes(dateTime.getMinutes());
  };

  return (
    <>
      <span className={style.hrs}> {hours < 10 ? `0${hours}` : hours}:</span>
      <span className={style.min}>
        {minutes < 10 ? `0${minutes}` : minutes}{" "}
      </span>
      <span className={style.units}>{unit}</span>
    </>
  );
}

export default Clock;
