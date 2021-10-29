import React from 'react';
import Input from './input';
import { CheckingWallSize, CheckingDoors } from '../functions/CheckingWallSize';

const divWall = () => {
    return(
        <div className='wallInformation'>
            <label> Altura da Parede </label>
            <Input name='Altura da Porta' action={ (e) => CheckingWallSize(e) } id='height' />
            <label> Largura da Parede </label>
            <Input name='Largura da Porta' action={ (e) => CheckingWallSize(e) } id='width' />
            <label> Número de Janelas </label>
            <Input name='Número de Janelas' id='windows' action= { (e) => CheckingWallSize(e) } />
            <label> Número de Portas </label>
            <Input name='Número de Portas' id='doors' action= { (e) => CheckingDoors(e) } />
        </div>
    )
};

export default divWall;