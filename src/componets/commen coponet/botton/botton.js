import React from 'react';
import './button.css';

const Button = (props) => {
  return (
    <button
      className='explore_btn'
      id={props.id}
      style={{
        backgroundColor: props.style,
        color: props.color,
        fontWeight: props.font,
        border: props.border === undefined ? 0 : props.border,
      }}
    >
      {props.name}
      {props.icon && <img className='icon' src={props.icon} alt="icon" />}
    </button>
  );
};

export default Button;
