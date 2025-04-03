import React from 'react'
import './reviewsList.css'

export default function ReviewsList({ onDelete, Auth, reviews }) {
    
  return (
    <>
      <div className="container">
        {reviews.map((item) => (
          <div key={item.id} className="review__content">
            <div className="review__list-content">
              <div className="review__list-author">
                <h4 className="review__list-author-text">{item.author}</h4>
              </div>
              <div className="review__list-text">
                <p className="review__list-text-text">{item.text}</p>
              </div>
              {Auth ? <button className="review__list-btn" onClick={() => onDelete(item.id)} >Удалить отзыв</button> : <></>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
