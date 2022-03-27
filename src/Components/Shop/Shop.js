import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import PlantsContainer from '../PlantsContainer/PlantsContainer';
const Shop = () => {
    const [plants, setPlants] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('plantsData.json')
        .then(res => res.json())
        .then(data => setPlants(data));
    },[])
    const addToCart = plant =>{
        let newCart = [];
        const exist = cart.find(item => item.id === plant.id);
        if(exist){
            const rest = cart.filter(item => item.id !== plant.id);
            plant.quantity = plant.quantity + 1;
            newCart = [...rest, plant];
        }
        else{
            plant.quantity = 1;
            newCart = [...cart, plant]
        }
        setCart(newCart);
    };
    const deleteItem = plant =>{
        const rest = cart.filter(item => item.id !== plant.id);
        setCart(rest);
    }
    return (
        <div>
          <div>
            <PlantsContainer plants={plants} addToCart={addToCart}></PlantsContainer>
          </div>
          <div>
            <Cart cart={cart} deleteItem={deleteItem}></Cart>
          </div>
        </div>
    );
};

export default Shop;   