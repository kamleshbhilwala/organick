import React from 'react'
import './couter.css'

const Counter =({counter1})=> {
    return (
        <>
            <div className='counter_main d-flex'>
                <div className='counter_inner'> 
                <h1 className='font_family_roboto color font_weight text-center mb-0'>{counter1.counter}</h1>
                <p className='Orgaanic color'>{counter1.name}</p>
                </div>
            </div>
        </> 
    )
}

export default Counter