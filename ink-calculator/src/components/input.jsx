import React from 'react';

const Input = (props) => {
    return (
        <>
            <input type={ props.type } placeholder={ props.name } />
        </>
    )
};

export default Input;