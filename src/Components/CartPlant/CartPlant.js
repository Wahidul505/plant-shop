import React from 'react';
import './CartPlant.css';
import { BsTrash } from 'react-icons/bs';
const CartPlant = () => {
    return (
        <div className='cart'>
            <div className='cart-item'>
                <div>
                    <img src="https://www.plantandflowerinfo.com/images/pothos-marble-queen-plant.jpg" alt="" />
                    <span>0</span>
                </div>
                <p>something something</p>
                <button className='trash-btn'><BsTrash /></button>

            </div>
        </div>
    );
};

export default CartPlant;