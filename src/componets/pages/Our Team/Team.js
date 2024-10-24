import React from 'react';
import "./team.css";
import insta from "../../images/icons/Instagram.png";
import face from "../../images/icons/facebook.png";
import twiter from '../../images/icons/Twiter.png';
import expert1 from '../../images/Photo (1).jpg';
import expert2 from '../../images/Photo (2).jpg';
import expert3 from '../../images/Photo (3).jpg';
import expert4 from '../../images/Teamcardimg_4.jpg';
import expert5 from '../../images/Teamcardimg_5.jpg';
import expert6 from '../../images/Teamcardimg_6.jpg';
import ExportCard from '../about/about_compo/ExportCard';
import Subcribe from "../../commen coponet/Subscribe/Subscribe";

const Team = () => {

    const experts = [
        {
            img: expert1,
            Heading: "Giovani Bacardo",
            job: "Farmer",
            instagram: insta,
            facebook: face,
            twiter: twiter
        },
        {
            img: expert2,
            Heading: "Marianne Loreno",
            job: "Designer",
            instagram: insta,
            facebook: face,
            twiter: twiter
        },
        {
            img: expert3,
            Heading: "Riga Pelore",
            job: "Farmer",
            instagram: insta,
            facebook: face,
            twiter: twiter
        },
        {
            img: expert4,
            Heading: "Riga Pelore",
            job: "Farmer",
            instagram: insta,
            facebook: face,
            twiter: twiter
        },
        {
            img: expert5,
            Heading: "Keira Knightley",
            job: "Farmer",
            instagram: insta,
            facebook: face,
            twiter: twiter
        },
        {
            img: expert6,
            Heading: "Karen Allen",
            job: "Farmer",
            instagram: insta,
            facebook: face,
            twiter: twiter
        }
    ]

    return (
        <>
           
                <section className='team_sec_1'>
                    <div className='team_bg'>
                        <div>
                            <h1 className='color font_weigth text-center font_family_roboto'>Our Team</h1>
                        </div>
                    </div>
                </section>

                <section className='team_sec_2 about_sec_4'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-xl-8 col-xxl-7'>
                                <div className='mb-4'>
                                    <h2 className='heading text-center mb-0'>Team</h2>
                                    <h1 className='color text-center font_family_roboto font_weigth'>Our Organic Experts</h1>
                                    <p className='dummy_text1 text-center'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            {experts.map((experts) => (
                                <div className=' col-xl-6 col-xxl-4 d-flex justify-content-center '>
                                    <ExportCard expert={experts} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className='container section_10'>
                    <Subcribe />
            
                </section>
            
        </>
    )
}

export default Team