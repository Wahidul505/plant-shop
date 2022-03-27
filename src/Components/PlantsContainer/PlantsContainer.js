import React from 'react';
import Plant from '../Plant/Plant';
import './PlantsContainer.css';
const PlantsContainer = ({plants}) => {
    return (
        <div className='plants-container'>
            {
                plants.map(plant => <Plant plant={plant}></Plant>)
            }
        </div>
    );
};

export default PlantsContainer;