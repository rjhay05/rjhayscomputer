import React from 'react';

import style from './Button.module.css';

function Button(props) {
    const classes = `${style.button} ${props.className}`
    return (
        <button
            className={classes}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button