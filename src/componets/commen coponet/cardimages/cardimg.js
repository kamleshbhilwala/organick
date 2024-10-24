import React from 'react';
import './cardimg.css'

function Cardimg({ card }) {
  return (
    <>
      <div className='card border-0 p-5' style={{ backgroundImage: `url(${card.img})` }}>
        <div className='row'>
          <div className='col-md-12 '>
            <div className='mt-0'>
            <span className='title_card' style={{ color: card.color }}>{card.title}</span>
            <h3 className='head_card' style={{ color: card.headcolor }}>{card.heading}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cardimg