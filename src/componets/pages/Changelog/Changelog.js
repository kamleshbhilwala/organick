import React from 'react';
import "./Changelog.css";
import img1 from '../../images/Changelog.jpg';
import Subscribe from '../../commen coponet/Subscribe/Subscribe';
const Changelog = () => {

    return (
        <>
          
                <section className='Changelog_sec_1'>
                    <div className='Changelog_bg'>
                        <div className='container heading'>
                            <h1 className='color text-center'>Changelog</h1>
                        </div>
                    </div>
                </section>

                <section className='Changelog_sec_2'>
                    <div className='container d-flex justify-content-center align-items-center'>
                        <div className='box d-flex gap-2 align-items-center justify-content-center'>
                            <img src={img1} className='img' alt="" />
                            <div className='d-flex align-items-center  gap-2'>
                                <h2 className='color font_family_roboto font_weigth'>v.1</h2>
                                <p className='dummy_text'>Initial Organick Webflow Template Release</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='container section_10'>
                    <Subscribe />
                </section>
           
        </>
    )
}

export default Changelog