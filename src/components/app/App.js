import { React, useEffect, useState, createContext } from 'react';
import axios from 'axios';

import { Header } from "../header/Header";
import { Home } from '../pages/home/Home';
import { Favorite } from '../pages/favorite/Favorite';
import { Orders } from '../pages/orders/Orders';

import './App.scss';

export const ThemeContext = createContext({});

export function App() {
  const [sneakers, setSneakers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [getSneakers] = await Promise.all([
          await axios.get('https://6253fc5019bc53e234769c4f.mockapi.io/sneakers'),
        ]);
        setIsLoading(false);

        setSneakers(getSneakers.data);;
      } catch (error) {
        alert('Не удалось получить данные')
      }
    }

    fetchData();
  }, []);



  return (
    <ThemeContext.Provider
      value={{
        sneakers 
      }}>

      <div className="wrapper">
        <Header />


        <Home sneakers={sneakers}
          searchValue={searchValue}
          setSearch={setSearchValue}
          loading={isLoading} />


        <Favorite />

        <Orders />

      </div>
    </ThemeContext.Provider>
  );
}
