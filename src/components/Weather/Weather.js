import React from 'react';
import PropTypes from 'prop-types';

const Weater = ({ weather }) => {

    if( Object.keys(weather).length === 0 ) return null;

    const { name, main } = weather;

    const kelvin = 273.15;

    return ( 
        <div className="card-panel white">
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperatura">
                    {parseFloat(main.temp - kelvin).toFixed(2)}°C
                </p>
                <p> Temperatura Maxima: 
                    {parseFloat(main.temp_max - kelvin).toFixed(2)}°C
                </p>
                <p> Temperatura Minima: 
                    {parseFloat(main.temp_min - kelvin).toFixed(2)}°C
                </p>
            </div>
        </div>
     );
}

Weater.propTypes = {
    weather: PropTypes.object.isRequired
}
 
export default Weater;