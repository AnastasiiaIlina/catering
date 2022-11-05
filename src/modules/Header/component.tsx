import React from 'react';
import { Cart } from '@components/Cart';

export const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>Главная</li>
        </ul>
      </nav>
      <Cart />
    </div>
  );
};
