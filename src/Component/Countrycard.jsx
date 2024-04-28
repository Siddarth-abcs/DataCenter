import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const Countrycard = () => {
  const { countryName } = useParams();
  const [datainfo, setDatainfo] = useState(null);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch(`https://restcountries.com/v3.1/name/${countryName}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setDatainfo(result[0])) // Since the API returns an array, get the first item
      .catch((error) => console.error(error));
  }, [countryName]); // Include 'countryName' as a dependency

  useEffect(() => {
    if (datainfo) {
      // Check if `datainfo.name` and `datainfo.name.nativeName` are defined
      if (datainfo.name && datainfo.name.nativeName && datainfo.name.nativeName.nld) {
        console.log(datainfo.name.nativeName.nld.common);
      }
    }
  }, [datainfo]);
  

  return (
    <div className='mt-16'>
      <div>
        <Link to="/">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-5 border border-gray-400 rounded shadow">
            <i className="fa-solid fa-arrow-left"></i> Back
          </button>
        </Link>
      </div>
      <div className='w-full h-80 mt-16 flex align-center items-center'>
        {datainfo ? (
          <>
            {/* Display country details */}
            {/* Replace 'datainfo.flags.png' with the appropriate property */}
            <div><img className='h-80' src={datainfo.flags.svg} alt="img"/></div>
            <div className='mx-16'>
                <h2 className='text-4xl font-bold'>{datainfo.name.common}</h2>
            <div className='grid grid-cols-2 grid-rows-4 my-6 gap-1'>
              <p>Native Name: {datainfo.name.official}</p>
              <p>Population: {datainfo.population}</p>
              <p>Region: {datainfo.region}</p>
              <p>Sub Region: {datainfo.subregion}</p>
              <p>Capital: {datainfo.capital}</p>
              <p>Top Level Domain: {datainfo.tld}</p>
              <p>Currencies: {datainfo.currencies && Object.values(datainfo.currencies).map(currency => currency.name).join(", ")}</p>
              <p>Languages: {Object.values(datainfo.languages).join(", ")}</p>
            </div>
              <p>Border Countries: {Object.values(datainfo.borders).join(", ")}</p>
              {/* Display border countries */}
              {/* Add other country details as needed */}
            </div>
          </>
        ) : (
          // If datainfo is not available, display a loading message
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};
