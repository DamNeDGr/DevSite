import React, { useState } from 'react'
import ReviewsList from './ReviewsList/ReviewsList';
import './reviews.css'
import AddReviews from './AddReviews/AddReviews';
import ReviewsCard from './ReviewsCard/ReviewsCard';


export default function Reviews() {
    const [reviews, setReviews] = useState([
        { id: 1, author: 'Anna', text: 'Очень полезный сайт'},
        { id: 2, author: 'Denis', text: 'Рекомендую этот сайт'},
    ]);

    const [isAuth, setIsAuth] = useState(false);

    const addReview = (author, text) => {
        const newReview = {
            id: reviews.length + 1,
            author,
            text,
        };
        setReviews([...reviews, newReview]);
        
        
    };
   
    const deleteReview = (id) => {
        setReviews(reviews.filter((review) => review.id !== id));
    }
  return (
    <div className="container">
        <div className="reviews__content">
            <h1 className="reviews__title">Отзывы :</h1>
        </div>
        <ReviewsCard reviews={reviews} isAuth={isAuth} onDelete={deleteReview}/>
        <AddReviews addReview={ addReview }/>
    </div>
  )
}
