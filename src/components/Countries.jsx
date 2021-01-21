/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import './countries.scss';

const Countries = ({ countriesList }) => {
  const [countryInfo, setCountryInfo] = useState(null);
  const { data, loading, error } = useQuery(countriesList);

  if (loading) {
    return <p className="loading">Loading... Please wait, or try to reload</p>;
  }

  if (error) {
    return <p className="error">Error :(</p>;
  }

  const handleClick = (country) => {
    const newCountryInfo = {
      capital: country.capital,
      currency: country.currency,
    };

    setCountryInfo(newCountryInfo);
  };

  return (
    <>
      {data && (
        <ul className="countries">
          {data.countries.map(country => (
            <li
              onClick={() => handleClick(country)}
              key={country.code}
              className="countries__country"
            >
              {country.name}
            </li>
          ))}
        </ul>
      )}

      {countryInfo && (
        <div className="countries__info">
          <p className="countries__capital">
            {`Capital: ${countryInfo.capital}`}
          </p>
          <p className="countries__currency">
            {`Currency: ${countryInfo.currency}`}
          </p>
        </div>
      )}
    </>
  );
};

export default Countries;
