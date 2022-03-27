import React from 'react';
import Plant from '../Plant/Plant';
import './PlantsContainer.css';
const PlantsContainer = ({plants, addToCart}) => {
    return (
        <div className='plants-container'>
            {
                plants.map(plant => <Plant key={plant.id} plant={plant} addToCart={addToCart}></Plant>)
            }
        </div>
    );
};

export default PlantsContainer;