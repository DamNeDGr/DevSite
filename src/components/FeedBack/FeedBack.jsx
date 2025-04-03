import React from 'react'
import './FeedBack.css'
import CommentBlock from './CommentBlock/CommentBlock'


export default function FeedBack() {
  return (
    <>
        <div className="container">
            <h1 className="feedback__title">Отзывы:</h1>
            <div className="feedback__content">
                <CommentBlock Username={'Алеся Шайморданова'} Message={'Loremawdawdawdawdawdawdawdwadawdddawawdwadawdawdawdawdawddwadawdawd awd'}/>
                <CommentBlock Username={'Алеся Шайморданова'} Message={'Тестовый отзыв'}/>          
            </div>
        </div>
    </>
  )
}
