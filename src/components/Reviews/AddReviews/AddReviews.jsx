import React, { useState } from 'react'
import { Button } from '@mui/material';
import './addReviews.css'
import ReCAPTCHA from 'react-google-recaptcha';

export default function AddReviews({addReview}) {

    const grecaptchaObject = window.grecaptcha;

    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const [dsblBtn, setDsblBtn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(author.trim() && text.trim()) {
            addReview(author, text);
            setAuthor('');
            setText('');
            setDsblBtn(false);
        } 
    };

    function onChange() {
      setDsblBtn(true);
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
              grecaptcha={grecaptchaObject}
            />
            {dsblBtn ? (
              <Button variant="contained" type="submit">
                Добавить отзыв
              </Button>
            ) : (
              <Button variant="contained" type="submit" disabled>
                Добавить отзыв
              </Button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
