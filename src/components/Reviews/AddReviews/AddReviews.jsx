import React, { useState } from 'react'
import './addReviews.css'
import ReCAPTCHA from 'react-google-recaptcha';

export default function AddReviews({addReview}) {

    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(author.trim() && text.trim()) {
            addReview(author, text);
            setAuthor('');
            setText('');
        } 
    };

    function onChange(value) {
      console.log("Captcha value:", value);
    }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="addReview__content">
            <input
              className="addReview__content-author"
              type="text"
              maxLength={30}
              value={author}
              placeholder="Введите имя"
              onChange={(e) => setAuthor(e.target.value)}
            />
            <textarea
              className="addReview__content-text"
              maxLength={100}
              placeholder="Введите отзыв"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <ReCAPTCHA
              sitekey="6LeHNgkrAAAAAO5XKDfa3aTpjvBNuIU5PIVYyeHo"
              onChange={onChange}
            />
            <button className="addReview__content-btn" type="submit">
              Добавить отзыв
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
