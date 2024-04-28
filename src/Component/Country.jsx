import React, { useState, useEffect } from 'react';
import { Select } from './Select';
import { Search } from './Search';
import { Link } from 'react-router-dom';

export const Country = () => {
  const [url, setUrl] = useState("https://restcountries.com/v3.1/all");
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => setCountry(result))
      .catch((error) => console.error(error));
  }, [url]); // Include 'url' as a dependency

  // Function to change the URL based on filter
  const updateUrl = (newUrl) => {
    setUrl(newUrl);
  };


  return (
    <div className="flex flex-wrap justify-center items-center mt-6">
      {/* Search and Select */}
      <div className="mt-4 w-5/6 m-auto py-2 grid md:grid-cols-2 gap-4">
        <Search updateUrl={updateUrl} />
        <Select updateUrl={updateUrl} />
      </div>

      {/* Country List */}
      {country.length > 0 ? (
        country.map((countryData, index) => (
          <Link to={`/Countrycard/${countryData.name.common}`} key={index}>
          <div>
            <div className="h-80 w-64 m-4 shadow-xl">
              <div className="w-full h-2/4 my-2">
                <img
                  src={countryData.flags.svg}
                  className="h-full"
                  alt="Country Flag"
                />
              </div>
              <div className="m-6">
                <h1 className="font-bold text-2xl">{countryData.name.common}</h1>
                <h3>Population: {countryData.population}</h3>
                <h3>Region: {countryData.region}</h3>
                <h3>Capital: {countryData.capital}</h3>
              </div>
            </div>
            
            {/* Add onClick handler to each country card */}
          </div>
          </Link>
        ))
      ) : (
        <div className="text-6xl w-5/6 m-auto text-center mt-28">
          Loading...
        </div>
      )}
    </div>
  );
};
