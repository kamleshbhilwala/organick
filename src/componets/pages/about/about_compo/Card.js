import React from 'react';

function Card({about_card}) {
    return (
        <>
            <div className='card_main'>
                <div className='icon_main d-flex align-items-center justify-content-center'>
                    <img src={about_card.icons} alt="" />
                </div>
                <h4 className='color font_family_roboto mt-3 text-center font_weigth'>{about_card.heading}</h4>
                <p className='text-center card_dummy'>{about_card.text}</p>
            </div>
        </>
    )
}

export default Card