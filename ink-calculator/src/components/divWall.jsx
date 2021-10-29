import React from 'react';
import Input from './input';

const divWall = () => {
    return(
        <div className='wallInformation'>
            <label> Altura da Parede </label>
            <Input name='Altura da Porta' />
            <label> Largura da Parede </label>
            <Input name='Largura da Porta' />
            <label> Número de Janelas </label>
            <Input name='Número de Janelas'/>
            <label> Número de Portas </label>
            <Input name='Número de Portas' />
        </div>
    )
};

export default divWall;