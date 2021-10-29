import React from 'react';
import Input from './input';
import CheckingWallSize from '../CheckingWallSize';

const divWall = () => {
    return(
        <div className='wallInformation'>
            <label> Altura da Parede </label>
            <Input name='Altura da Porta' action={ CheckingWallSize } />
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