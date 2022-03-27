import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import PlantsContainer from '../PlantsContainer/PlantsContainer';
const Shop = () => {
    const [plants, setPlants] = useState([]);
    useEffect(()=>{
        fetch('plantsData.json')
        .then(res => res.json())
        .then(data => setPlants(data));
    },[])
    return (
        <div>
          <div>
            <PlantsContainer plants={plants}></PlantsContainer>
          </div>
          <div>
            <Cart></Cart>
          </div>
        </div>
    );
};

export default Shop;   