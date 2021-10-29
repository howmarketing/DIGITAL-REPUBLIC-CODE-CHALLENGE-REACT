import React from 'react';
import './button.css'

const Button = (props) => {
    const {type, name, action } = props;
    return(
        <>
            <button { ...type } onClick={ action } > { name } </button>
        </>
    )
};

export default Button;