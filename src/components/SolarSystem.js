import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="planets-container">
        <Title headline="Planetas" />
        <div className="planet-card-container">
          {planets.map((element, index) => (
            <PlanetCard
              key={ index }
              planetName={ element.name }
              planetImage={ element.image }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
