import React from 'react';
import './App.scss';
import Countries from './components/Countries';
import { countries } from './GraphQL/Queries';

export const App = () => (
  <div>
    <Countries countriesList={countries} />
  </div>
);
