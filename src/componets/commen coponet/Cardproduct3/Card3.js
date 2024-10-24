import React from 'react';
import './Card3.css';
import person_icon from '../../images/icons/person.png'
import Button from '../botton/botton';
import Arrow from '../../images/icons/Aerrow.png'
import { useNavigate } from 'react-router-dom';

function Card3(props) {
    const navi = useNavigate();

    const handelon = (item) => {
      localStorage.setItem("Items", JSON.stringify(item)); 
      navi('/blog_single'); 
    };
    return (
        <>
            <div className='card_main_2'>
                <img src={props.src} className='w-100 card_1' alt="" />
                <div className='date d-flex '>
                    <h4 className='color date_2'>25 Nov</h4>
                </div>
                <div className='card_text'>
                    <div className='d-flex gap-2'>
                        <div>
                            <img src={person_icon} className='person_icon' alt="" />
                        </div>
                        <p className='color font_family_roboto'>By Rachi Card</p>
                    </div>
                    <div className='card_details'onClick={() => handelon(props)}>
                        <h5 className='color font_family_roboto mb-0'>The Benefits of Vitamin D & How to Get It</h5>
                        <p className='color dummy_text'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        <Button style={"#EFD372"} name={"Read More"} color={"#274C5B"} font={"700"} icon={Arrow} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card3