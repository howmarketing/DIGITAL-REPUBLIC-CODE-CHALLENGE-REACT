import React from 'react';

const Input = (props) => {
    const { name } = props;
    return (
        <>
            <input placeholder={ name } />
        </>
    )
};

export default Input;