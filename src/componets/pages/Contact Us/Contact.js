import React from 'react';
import './Contact.css';
import img1 from "../../images/contact-info-image.jpg";
import email from '../../images/icons/email_icon.png';
import phone from '../../images/icons/call_icon.png';
import insta from "../../images/icons/Instagram.png";
import face from '../../images/icons/facebook.png';
import twitter from "../../images/icons/Twiter.png";
import print from '../../images/icons/P.png';
import Button from '../../commen coponet/botton/botton';
import Subscribe from '../../commen coponet/Subscribe/Subscribe'
import locationIcon from '../../images/icons/location.png';
const Contact = () => {
    return (
        <>
            
            <section className='Contact_sec_1'>
                <div className='Contact_bg'>
                    <div className='main'>
                        <h1 className='color font_family_roboto font_weight text-center'>Contact Us</h1>
                    </div>
                </div>
            </section>

            <section className='Contact_sec_2'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div>
                                <img src={img1} className='banna_img w-100' alt="Contact Information" />
                            </div>
                        </div>
                        <div className='col-md-6 left_main2'>
                            <div className='mt-4 left_main3'>
                                <h1 className='color font_weight font_family_roboto heading'>We'd love to talk about how we can work together.</h1>
                                <p className='dummy_text mb-4'>
                                    Simply dummy text of the printing and typesetting industry. Lorem has ceased to be the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                                </p>
                                <div className='message_main mb-3'>
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <div className='email_main d-flex align-items-center justify-content-center mt-2'>
                                                <img src={email} alt="Email Icon" />
                                            </div>
                                        </div>
                                        <div className='col-md-9'>
                                            <div className='ms-3 mt-3'>
                                                <h5 className='color font_family_roboto mb-0'>Message</h5>
                                                <p className='dummy_text'>support@organic.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='message_main mb-4'>
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <div className='email_main d-flex align-items-center justify-content-center mt-2'>
                                                <img src={phone} alt="Phone Icon" />
                                            </div>
                                        </div>
                                        <div className='col-md-9'>
                                            <div className='ms-3 mt-3 mb-4'>
                                                <h5 className='color font_family_roboto mb-0'>Contact Us</h5>
                                                <p className='dummy_text'>+01 123 456 789</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex gap-4'>
                                    <div className='icon_main d-flex align-items-center justify-content-center'>
                                        <img src={insta} alt="Instagram Icon" />
                                    </div>
                                    <div className='icon_main d-flex align-items-center justify-content-center'>
                                        <img src={face} alt="Facebook Icon" />
                                    </div>
                                    <div className='icon_main d-flex align-items-center justify-content-center'>
                                        <img src={twitter} alt="Twitter Icon" />
                                    </div>
                                    <div className='icon_main d-flex align-items-center justify-content-center'>
                                        <img src={print} alt="Print Icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='Contact_sec_3'>
                <div className='container'>
                    <div className='tree_bg'>
                        <div className='row'>
                            <div className='col-md-6'>
                            </div>
                            <div className='col-md-6'>
                                <div className='box_main'>
                                    <h3 className='location mb-0'>Location</h3>
                                    <h1 className='color font_family_roboto font_weight'>Our Farms</h1>
                                    <p className='dummy_text mb-4'>
                                        Established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </p>
                                    <div className='d-flex gap-2'>
                                        <div>
                                            <img src={locationIcon} alt="Location Icon" />
                                        </div>
                                        <div>
                                            <p className='location'><span className='address'>New York, USA: </span>299 Park Avenue, New York, New York 10171</p>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-2'>
                                        <div>
                                            <img src={locationIcon} alt="Location Icon" />
                                        </div>
                                        <div>
                                            <p className='location'><span className='address'>Los Angeles, USA: </span>1200 Wilshire Blvd, Los Angeles, CA 90017</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='Contact_sec_4'>
                <div className='Con'>
                <div className='container'>
                    <div className='row iu'>
                        <div className='col-md-6'>
                            <div>
                                <label htmlFor="fullName" className='color font_family_roboto font_weight d-block mb-3'>Full Name*</label>
                                <input type="text" className='form-control input_common font_family_roboto' id="fullName" placeholder='Enter Your Name' />

                                <label htmlFor="companyName" className='color font_family_roboto font_weight d-block mb-3'>Company*</label>
                                <input type="text" className='form-control input_common font_family_roboto' id="companyName" placeholder='Enter Your Company Name Here' />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div>
                                <label htmlFor="email" className='color font_family_roboto font_weight d-block mb-3'>Your Email*</label>
                                <input type="email" className='form-control input_common font_family_roboto' id="email" placeholder='Your Email Address' />

                                <label htmlFor="subject" className='color font_family_roboto font_weight d-block mb-3'>Subject*</label>
                                <input type="text" className='form-control input_common font_family_roboto' id="subject" placeholder='How Can We Help' />
                            </div>
                        </div>
                    </div>
                    <div className='text_main'>
                        <label htmlFor="message" className='color font_family_roboto font_weight mb-3'>Message*</label>
                        <textarea id="message" cols="30" rows="10" className='form-control text_area' placeholder='Hello there, I would like to talk about how to...'></textarea>
                    </div>
                    <Button style={"#274C5B"} name={"Send Message"} font={"700"} color={"white"} />
                </div>
                </div>
            </section>

            <section className='section_10 container'>
                <Subscribe />
            </section>
        </>
    );
}

export default Contact;