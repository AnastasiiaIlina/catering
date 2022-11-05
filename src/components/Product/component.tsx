import React, { FC } from 'react';
import './styles.scss';
import { Button } from 'react-bootstrap';

interface IProduct {
  name: string;
  price: number;
}

export const Product: FC<IProduct> = ({ name, price }) => {
  return (
    <div className="card">
      <p className="card_title">{name}</p>
      <p className="card_price">{price} грн</p>
      <Button>Купить</Button>
    </div>
  );
};
