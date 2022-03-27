import React from 'react';
import './Plant.css';
import { BsMinecartLoaded } from 'react-icons/bs';
const Plant = ({plant, addToCart}) => {
    const {picture, name, price} = plant;
    return (
        <div className='plant-card'>
            <div>
                <img src={picture} alt="" />
                <h3>{name}</h3>
                <p>TK {price}</p>
            </div>
            <div>
                <button onClick={()=>addToCart(plant)}><BsMinecartLoaded /></button>
            </div>
        </div>
    );
};

export default Plant;