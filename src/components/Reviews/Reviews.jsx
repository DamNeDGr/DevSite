import React, { useState } from 'react'
import ReviewsList from './ReviewsList/ReviewsList';
import './reviews.css'
import AddReviews from './AddReviews/AddReviews';
import ReviewsCard from './ReviewsCard/ReviewsCard';


export default function Reviews() {
    const [reviews, setReviews] = useState([
      {
        id: 1,
        author: "Ольга Капитурова",
        text: "Замечательный центр, ребенок посещает с удовольствием, результаты очень хорошие. Для родителей тоже созданы все условия - есть удобные места для ожидания, можно выпить чай или кофе. Внимательный персонал с профессиональным подходом, видно, что детей здесь любят и к каждому ребенку находят индивидуальный подход.",
      },
      {
        id: 2,
        author: "Галина",
        text: "Выражаю огромною благодарность логопеду Надежде Владимировне. Ходим на занятия с сентября 2024 года, результат появился буквально через месяц) Сейчас сынок уже болтает во всю, даже предложениями🤗 Ещё у нас добавились занятия АФК с Олесей Равильевной, была неправильная постановка стопы, через пару занятий тоже есть заметные улучшения👍 Спасибо Вам огромное, будем ходить и дальше🥰🌸",
      },
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
