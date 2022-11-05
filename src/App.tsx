import React from 'react';
import './App.scss';
import { Product } from '@components/Product';
import { Header } from '@modules/Header';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Product name="Рис" price={40} />
      <Product name="Макароны" price={25} />
    </div>
  );
};
