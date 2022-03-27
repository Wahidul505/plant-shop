import React from 'react';
import './CartPlant.css';
import { BsTrash } from 'react-icons/bs';
const CartPlant = ({cartItem, deleteItem}) => {
    const {picture, name, price, quantity} = cartItem;
    const itemPrice = price * quantity;
    return (
        <div>
            <div className='cart-item'>
                <div>
                    <img src={picture} alt="" />
                    <span>{quantity}</span>
                </div>
                <p>{name}(TK {itemPrice})</p>
                <button onClick={()=> deleteItem(cartItem)} className='trash-btn'><BsTrash /></button>
            </div>
        </div>
    );
};

export default CartPlant;