import React from 'react'
const Card2 = ({offer}) => {
    return (
        <>
            <div className='opop'>
                <img src={offer.img} className='w-100 img_com mb-3' alt="" />
                <h5 className='font_family_roboto text-center text-white'>{offer.heading}</h5>
            </div>
        </>
    )
}

export default Card2