import React, { useState } from 'react'
import { Button } from '@mui/material';
import './addReviews.css'
import ReCAPTCHA from 'react-google-recaptcha';

export default function AddReviews({addReview}) {

    const recaptchaRef = React.createRef();

    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const [dsblBtn, setDsblBtn] = useState(true);

    const [captchaVerified, setCaptchaVerified] = useState(false);
    
    const handleCaptchaChange = (value) => {
      setCaptchaVerified(!!value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(captchaVerified && author.trim() && text.trim()) {
            addReview(author, text);
            setAuthor('');
            setText('');
            setDsblBtn(false);
            setCaptchaVerified(false);

        } 
    };

    
     const handleChangeUsername = (event) => {
      setAuthor(event.target.value);
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
              onChange={handleChangeUsername}
            />
            <textarea
              className="addReview__content-text"
              maxLength={100}
              placeholder="Введите отзыв"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
              onChange={handleCaptchaChange}
              ref={recaptchaRef}
              onExpired={() => {
                recaptchaRef.current.reset();
              }}
            />
            {!captchaVerified ? (
              <Button 
                variant="contained" 
                type="submit"
                >
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
