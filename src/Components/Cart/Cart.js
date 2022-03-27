import React, { useState } from 'react';
import './Cart.css';
import { BsMinecartLoaded } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import CartPlant from '../CartPlant/CartPlant';

const Cart = () => {
    const [display, setDisplay] = useState('none');
    const toggleCart = () =>{
        if(display === 'none'){
            setDisplay('block')
        }
        else{
            setDisplay('none')
        }
    };
    return (
        <div>
            <button onClick={toggleCart} className='cart-btn'><BsMinecartLoaded /><sup>0</sup></button>
            <div style={{display:display}} className="cart-container">
                <div>
                    <CartPlant></CartPlant>
                </div>
                <button className='close-btn' onClick={toggleCart}><IoMdClose /></button>
            </div>
        </div>
    );
};

export default Cart;