import React, { useContext } from 'react'
import Icon from "../../shared/Icon/Icon"
import icon from "../../shared/images/about.png"
import AppContext from '../../../store/app-context'
import style from './AboutIcon.module.css'
function AboutIcon() {
  const ctx = useContext(AppContext)
  const showAboutHandler = () => {
    ctx.showAboutHandler(true)
  }
  return (
    <Icon
        image={icon}
        className={style.icon}
        alt="About"
        onDoubleClick={showAboutHandler}
        title='About me'
      />
  )
}

export default AboutIcon