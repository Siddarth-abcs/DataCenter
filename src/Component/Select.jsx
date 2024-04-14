import React from 'react';

export const Select = ({ updateUrl }) => {
  const handleChangeUrl = (event) => {
    // Get the selected value from the event
    const selectedValue = event.target.value;

    // Call the function passed as a prop to update the URL
    updateUrl(`https://restcountries.com/v3.1/region/${selectedValue}`);
  };

  return (
    <div class="px-4 md:ml-auto">
      <select onChange={handleChangeUrl} class="px-3 w-[160px] h-14 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
        <option value="">All Regions</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};
