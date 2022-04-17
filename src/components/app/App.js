import { React, useState } from 'react';


import { Header } from "../header/Header";
import { Home } from '../pages/home/Home';
import { Favorite } from '../pages/favorite/Favorite';
import { Orders } from '../pages/orders/Orders';

import './App.scss';


export function App() {
  const [sneakers, setSneakers] = useState([]);
  const [searchValue, setSearchValue] = useState('');


  return (

      <div className="wrapper">
        <Header  />


        <Home sneakers={sneakers}
          searchValue={searchValue}
          setSearch={setSearchValue}
          setSneakers={setSneakers}
           />


        <Favorite />

        <Orders />

      </div>
  );
}
