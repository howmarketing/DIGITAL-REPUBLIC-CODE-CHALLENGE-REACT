import React from 'react';
import Input from './input';
import CheckingWallSize from '../functions/CheckingWallSize';

const divWall = () => {
    return(
        <div className='wallInformation'>
            <label> Altura da Parede </label>
            <Input name='Altura da Porta' action={ (e) => CheckingWallSize(e) } id='height' />
            <label> Largura da Parede </label>
            <Input name='Largura da Porta' action={ (e) => CheckingWallSize(e) } id='width' />
            <label> Número de Janelas </label>
            <Input name='Número de Janelas' id='windows'/>
            <label> Número de Portas </label>
            <Input name='Número de Portas' id='doors' />
        </div>
    )
};

export default divWall;