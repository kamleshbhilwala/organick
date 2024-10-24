import React from 'react'
import './Subscribe.css'

function Subscribe() {
    return (
        <>
            <div className='Subscribe_main d-flex align-items-center'>
                <div className='container'> 
                    <div className='row d-flex align-items-center justify-content-between'>
                        <div className='col-lg-4 col-md-12 px-xl-5 text-lg-start text-center'>
                            <h1 className='font_family_roboto text-white Subscribe_text'>Subscribe to our Newsletter</h1>
                        </div>
                        <div className='col-lg-6 col-md-12'>           
                            <div className='d-sm-flex gap-2 input_main align-items-center d-block justify-content-center'>
                                <input type="text" className='form-control' placeholder='Your Email Address' />
                                <button className='btn Subscribe_btn text-white'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subscribe