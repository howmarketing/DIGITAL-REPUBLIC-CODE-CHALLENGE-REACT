import React from 'react';

const Input = (props) => {
    const { name, action } = props;
    return (
        <>
            <input placeholder={ name } onChange={ action } />
        </>
    )
};

export default Input;