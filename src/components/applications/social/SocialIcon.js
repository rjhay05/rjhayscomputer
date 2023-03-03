import React from 'react'
import FolderIcon from '../../shared/UIelements/folder/FolderIcon'
import style from './SocialIcon.module.css'

function SocialIcon() {
  return (
    <FolderIcon
    className={style.icon}
    alt='Social'
    title="Social folder"
    />
  )
}

export default SocialIcon