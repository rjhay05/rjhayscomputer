import React from 'react'
import Icon from '../../shared/Icon/Icon';
import icon from '../../shared/images/mail.png'


import style from './ContactIcon.module.css'

function ContactIcon() {

    const showContactHandler = () => {
        window.open('mailto:rjhaydev@outlook.com')
    }

    return (
        <Icon
            image={icon}
            alt='Contact'
            className={style.icon}
            onDoubleClick={showContactHandler}
            title='Send an email'
        />
    )
}

export default ContactIcon