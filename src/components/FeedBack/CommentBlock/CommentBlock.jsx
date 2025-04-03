import React from 'react'
import './CommentBlock.css'
import Avatar from '../../Content/img/image.jpg'

export default function CommentBlock({Username, Message}) {
    const comments = {
        id: 1,
        Name: 'Test Test',
        Message: 'TestMessage'
    };

    console.log(comments);
    
  return (
    <div className="comment__block">
        <div className="comment__content">
            <div className="comment__avatar">
                <img src={Avatar} alt="" width='50' height='50' className="avatar" />
            </div>
            <div className="comment__content-text">
                <div className="comment__content-username">
                    <p className='username-text'>{Username}</p>
                    <p className='message-text'>{Message}</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}
