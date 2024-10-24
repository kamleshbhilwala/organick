import React from 'react';
import './slider1.css';
import slick1 from '../../images/slick1.jpg';
import star from '../../images/Star.png';

const Slider1 = () => {
  return (
    <div>
      <div className=''>
        <img src={slick1} className='mx-auto rounded-circle mb-3' alt="Profile" />
        <img src={star} className='mx-auto mb-4 aa' alt="Star rating" />
        <p className='dummy_text mb-12'>
          Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
        </p>
        <h4 className='text-center color mb-0'>Sara Taylor</h4>
        <p className='text-center customer mb-0'>Consumer</p>
      </div>
    </div>
  );
}

export default Slider1;
