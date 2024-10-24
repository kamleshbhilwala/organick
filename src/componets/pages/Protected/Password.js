import React from 'react';
import './Password.css';
import img1 from "../../images/protect.jpg";
import Button from "../../commen coponet/botton/botton";
import Arrow from "../../images/icons/Aerrow.png";
import Subscribe from "../../commen coponet/Subscribe/Subscribe";

function Password() {
    return (
        <>
                <section className='protect_sec_1'>
                    <div className='bkg_img'>
                        <h1 className='text-center color font_weigth protect'>Protected Page</h1>
                    </div>
                </section>

                <section className='protect_sec_2'>
                    <div className='container d-flex justify-content-center align-items-center main'>
                        <div className='main_box p-4'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <img src={img1} className='main_img mt-3' alt="" />
                                </div>
                                <div className='col-md-9'>
                                    <div className='mt-4'>
                                        <p className='color font_family_roboto pass'>Password</p>
                                        <input type="text" className='form-control email mb-4' placeholder='Enter Your Password' />
                                        <Button style={"#274C5B"} name={"Shop Now"} font={"700"} color={"white"} icon={Arrow} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section_10 container'>
                    <Subscribe />

                </section>
           
        </>
    )
}

export default Password