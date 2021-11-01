import React from 'react';

const Input = (props) => {
    const { name, action, id } = props;
    return (
        <>
            <input placeholder={ name } onChange={ action } id={ id } />
        </>
    )
};

export default Input;