import React from 'react';
import './Licenses.css';
import Subscribe from '../../commen coponet/Subscribe/Subscribe';

const Licenses = () => {

    return (
        <>
        
            <section className='Licenses_sec_1'>
                <div className='Licenses_bg'>
                    <h1 className='color font_family_roboto font_weigth text-center heading'>Licenses</h1>
                </div>
            </section>

            <section className='Licenses_sec_2'>
                <div className='container'>
                    <div className='row mb-4'>
                        <div className='col-md-3'>
                            <h3 className='color font_weigth font_family_roboto ms-4'>Icon & Graphics</h3>
                        </div>
                        <div className='col-md-1'>
                        </div>
                        <div className='col-md-7'>
                            <p className='dummy_text mb-4'>Icons and Graphics are manually designed by the <span className='flow'>VictorFlow</span> Templates team. You may download these and edit them to fit your website without asking for permission or providing credit.</p>
                            <p className='dummy_text'>Upon purchasing Software UI Kit Template our team grants you a nonexclusive, worldwide copyright license to download, copy, modify, and use the icons.</p>
                        </div>
                        <div className='col-md-1'>
                        </div>
                    </div>
                    <div className='row mb-4'>
                        <div className='col-md-3'>
                            <h3 className='color font_weigth font_family_roboto ms-4'>Photography</h3>
                        </div>
                        <div className='col-md-1'>
                        </div>
                        <div className='col-md-7'>
                            <p className='dummy_text mb-4'>All images used in the Organick Webflow Template are licensed for free personal and commercial use. If you'd like to use any specific image, you can check the licenses and download the images for free on Unsplash, Pexels‍. And Freepik.</p>
                            <h4 className='color font_family_roboto font_weigth'>Unsplash</h4>
                            <p className='dummy_text mb-4'>Image 1,  Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17, Image 18, Image 19, Image 20, Image 21, Image 22, Image 23, Image 24, Image 25,</p>
                            <h4 className='color font_family_roboto font_weigth'>Pixcel</h4>
                            <p className='dummy_text'>Image 1,  Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17, </p>
                        </div>
                        <div className='col-md-1'>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-3'>
                            <h3 className='color font_weigth font_family_roboto ms-4'>Font</h3>
                        </div>
                        <div className='col-md-1'>
                        </div>
                        <div className='col-md-7'>
                            <p className='dummy_text'>Organick template uses free licensed Google Fonts. Please check <span className='color font_weigth'>Roboto, Yellowtail</span> and <span className='color font_weigth'>Open Sans.</span></p>
                        </div>
                        <div className='col-md-1'>
                        </div>
                    </div>
                </div>
            </section>

            <div className='container section_10'>
                <Subscribe />
            </div>
        </>
    )
}

export default Licenses;