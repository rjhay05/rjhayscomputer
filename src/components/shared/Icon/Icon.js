import React from 'react'

import style from './Icon.module.css';

function Icon(props) {
    const classes = props.className
    return (
        <div
            className={`${style.icon} ${classes}`}
            onDoubleClick={props.onDoubleClick}
            onClick={props.onClick}
            title={props.title}
            tabIndex={0}

        >
          <a href={props.href} target='_blank' rel='noreferrer'>
              <img src={props.image} alt='About' loading='eager'/>
          </a>
        </div>
    )
}

export default Icon