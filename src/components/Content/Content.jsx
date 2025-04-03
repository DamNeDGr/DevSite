import React from 'react'
import Avatar from './img/image.jpg'
import TrAvatar from './img/image1.png'
import './content.css'
export default function Content() {
  return (
    <>
      <main>
        <div className='container'>
          <div className='content'>
            <div className='content__image'>
              <img className='content__image-img' src={TrAvatar} alt='Avatar' loading='lazy'></img>
            </div>
            <div className='content__title'>
              <h1 className='content__title'>Специалист по Детской Реабилитации</h1>
            </div>
            <div className='content__descript'><p className='content__descript-text'>Шайморданова Алеся Равильевна</p></div>
          </div>
        </div>
      </main>
    </>
  )
}
