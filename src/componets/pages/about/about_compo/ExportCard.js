import React from 'react'

function ExportCard({expert}) {
    return (
        <>
            <div className='exp_bg mb-4'>
            <img src={expert.img}  className='w-100 expert_img' alt="" />
            <div className='p-3'>
                <h5 className='color mb-0 font_family_roboto font_weigth ms-3'>{expert.heading}</h5>
              <div className='d-flex gap-4 align-items-center justify-content-between'>
              <h6 className='farmer'>{expert.job}</h6>
              <div className='d-flex gap-3 icon_main'>
                <img src={expert.instagram} className='w-100' alt="" />
                <img src={expert.facebook} className='w-100' alt="" />
                <img src={expert.twiter} className='w-100' alt="" />
              </div>
              </div>
            </div>
            </div>
        </>
    )
}

export default ExportCard