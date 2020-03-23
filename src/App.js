import React, { useState, Fragment, useEffect } from 'react';

// Components
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Weather from './components/Weather/Weather';
import Error from './components/Error/Error';

function App() {

// Create State Search
const initialStateSearch = {
    city: '',
    country: ''
};
const [search, setSearch] = useState(initialStateSearch);

// Create State Request
const initialStateRequest = false;
const [request, setRequest] = useState(initialStateRequest);

// Destructuri search
const { city, country } = search;

// Create State Clima
const initialStateWeather = {};
const [weather, setWeather] = useState(initialStateWeather);

// Create State Error
const initialStateError = {
  err: false,
  code: '',
  message: ''
};
const [error, setError] = useState(initialStateError);

// Declare vars global
const apiKey = '27d9a8bd60c4eff141983e7d10e011c0';
const url = `https://api.openweathermap.org/data/2.5/weather`;

// Request a la api de OpenWeather
const requestApi = async ( city, country, apiKey ) => {

  try {
    const res = await fetch(`${url}?q=${city},${country}&appid=${apiKey}`);
    const data = await res.json();

    // Validar el resultado devuelto
    if( data.cod !== 200 ) {
        setError({
            ...error,
            err: true,
            code: data.cod,
            message: data.message
          });
      } else {
        // Setear los valores en caso de que la peticion encuentre un resultado.
        setWeather({
          ...weather,
          ...data
        });

        // Verifica su hubo un error previo y modifica el state de Error.
        if( error.err ) {
          setError({
            ...error,
            err: false,
            code: '',
            message: ''
          });
        };

      }

    console.log(data);
  } catch (error) {
    console.log(error);
  }

}

useEffect(() => {
  
  if( request ) {
    // Ejecuta la consulta
    requestApi(city, country, apiKey);

    // Estado inicial
    setRequest(false);
  }

}, [request, city, country]);

let component;
if( error.err ) {
  component = <Error message={error.message} />
} else {
  component = <Weather
                weather={weather}
              />
}

  return (
    <Fragment>
      <Header title={'Clima App'} />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
                <Form 
                  search={search}
                  setSearch={setSearch}
                  setRequest={setRequest}
                />
            </div>
            <div className="col m6 s12">
                {component}
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
