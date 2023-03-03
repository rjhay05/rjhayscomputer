import React from 'react'

import style from './StarsBackground.module.css';

function StarsBackground() {
  return (
    <div className={style.container}>
        <div className={style.stars1}></div>
        <div className={style.stars2}></div>
        <div className={style.stars3}></div>
    </div>
  )
}

export default StarsBackground