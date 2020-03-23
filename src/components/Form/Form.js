import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ search, setSearch, setRequest }) => {

    // Destructuri search
    const { city, country } = search;

    const initialStateError = {
        err: false,
        message: ''
    }
    const [error, setError] = useState(initialStateError)

    // HandleChange
    const handleChange = e => {
        
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })

    }

    // HandleSubmite
    const handleSubmite = e => {
        e.preventDefault();

        // Validaciones
        if( city.trim() === "" || country.trim() === "" ) {
            setError({
                ...error,
                err: true,
                message: 'Todos los campos son obligatorios'
            })
        }

        // Eliminar mensaje de error
        if( error.err ) {
            setError({
                ...error,
                err: false,
                message: ''
            })
        }

        console.log( 'enviado' );
        setRequest(true);
    }

    return ( 
        
        <form
            onSubmit={handleSubmite}
        >
            { error.err ? <p className="red darken-4 error">{ error.message }</p> : null }
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={handleChange}
                />
                <label htmlFor="city"> City: </label>
            </div>
            <div className="input-field col s12">
                <select 
                    name="country"
                    id="country"
                    value={country}
                    onChange={handleChange}
                >
                    <option value="" disabled>-- Select Country --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="country"> Country: </label>
            </div>

            

            <div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                > Buscar Clima </button>
            </div>
        </form>
     );
}

Form.propTypes = {
    search: PropTypes.object.isRequired,
    setSearch: PropTypes.func.isRequired,
    setRequest: PropTypes.func.isRequired
}
 
export default Form;