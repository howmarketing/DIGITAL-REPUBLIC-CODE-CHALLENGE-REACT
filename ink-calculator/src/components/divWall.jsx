import React from 'react';
import Input from './input';

const divWall = () => {
    return(
        <div className='wallInformation'>
            <label> Altura da Parede </label>
            <Input />
            <label> Largura da Parede </label>
            <Input />
            <label> Número de Janelas </label>
            <Input />
            <label> Número de Portas </label>
            <Input />
        </div>
    )
};

export default divWall;