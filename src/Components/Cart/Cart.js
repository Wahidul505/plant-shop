import React, { useState } from 'react';
import './Cart.css';
import { BsMinecartLoaded } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import CartPlant from '../CartPlant/CartPlant';

const Cart = ({cart, deleteItem}) => {
    const [display, setDisplay] = useState('none');
    const toggleCart = () =>{
        if(display === 'none'){
            setDisplay('block')
        }
        else{
            setDisplay('none')
        }
    };
    let totalQuantity = 0;
    let totalPrice = 0;
    for(const item of cart){
        totalQuantity = totalQuantity + item.quantity;
        totalPrice = totalPrice + (item.price * item.quantity);
    }
    const tax = parseFloat((totalPrice * 0.05).toFixed(2));
    const grandTotal = totalPrice + tax;
    return (
        <div>
            <button onClick={toggleCart} className='cart-btn'><BsMinecartLoaded /><sup>{totalQuantity}</sup></button>
            <div style={{display:display}} className="cart-container">
                <div className='cart'>
                    {
                        cart.map(cartItem => <CartPlant key={cartItem.id} cartItem={cartItem} deleteItem={deleteItem}></CartPlant>)
                    }
                    <hr />
                    <div>
                        <h2>Cart Total:</h2>
                        <hr />
                        <h3>Total Price:</h3>
                        <p>TK {totalPrice}</p>
                        <h3>Total Tax:</h3>
                        <p>{tax}</p>
                        <h2>Grand Total:</h2>
                        <p>TK {grandTotal}</p>
                    </div>
                </div>
                <button className='close-btn' onClick={toggleCart}><IoMdClose /></button>
            </div>
        </div>
    );
};

export default Cart;