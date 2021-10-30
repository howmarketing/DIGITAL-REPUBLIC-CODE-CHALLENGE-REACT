import React from 'react';
import './button.css'

const Button = (props) => {
    const {type, name, action, id } = props;
    return(
        <>
            <button { ...type } onClick={ action } id= { id } > { name } </button>
        </>
    )
};

export default Button;