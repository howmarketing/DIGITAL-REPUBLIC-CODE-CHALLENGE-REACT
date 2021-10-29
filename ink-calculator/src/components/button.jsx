import React from 'react';
import './button.css'

const Button = (props) => {
    const {type, name } = props;
    return(
        <>
            <button { ...type } > { name } </button>
        </>
    )
};

export default Button;