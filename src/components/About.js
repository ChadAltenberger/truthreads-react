import React, { useEffect } from 'react';

export default () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className='container'>
        <div className='row justify-content-center'>
          <img
            id='aboutPhoto'
            className='img-fluid'
            src='./assets/images/about-photo2.jpg'
            alt='Truthreads Logo'
            width='450px'
          />
        </div>
        <div id='descriptionTitle' className='row justify-content-center'>
          <div className='col text-center'>
            <h1>Our Story</h1>
          </div>
        </div>
        <hr id='aboutBreak' />
        <div className='row'>
          <div id='descriptionContent' className='col-9 mx-auto'>
            <p className='lead'>
              TruThreads started in 2013 with the goal of providing great
              service and a great product, while keeping prices low. We have
              grown every year by following these values.​
            </p>
            <p className='lead'>
              We're a family owned business that works hard, and loves what we
              do. We have a passion for ministries, small businesses, and
              helping people in any way we can. Our regular customers can attest
              that they receive an old fashioned service with modern techniques.
              What we quote for custom prints, is what you'll pay. We don't add
              on surprise fees after the fact. That means no screen fees, set up
              fees, or any other extra fees not outlined in the quote. We are
              dedicated to offering the highest value, while benefitting the
              customer first and foremost.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
