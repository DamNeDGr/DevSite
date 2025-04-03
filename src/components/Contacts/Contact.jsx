import React from 'react'

import './contact.css'

export default function Contact() {
  return (
    <>
        <div className='contact_container'>
            <div className='contact__title'>
                <h1 className='contact__title-text'>Контакты</h1>
            </div>
            <ul className='contact__list'>
                <li className='contact__item'><a href='https://vk.com/mir_detej63' className='contact__link'>Вконтакте</a></li>
                <li className='contact__item'><a href='https://t.me/Alisa93mirdetstva' className='contact__link'>Telegram</a></li>
                <li className='contact__item'><a href='https://wa.me/+79874425519' className='contact__link'>WhatsApp</a></li>
            </ul>
        </div>
    </>
  )
}
