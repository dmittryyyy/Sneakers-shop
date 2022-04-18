import { React, useEffect, useState, createContext } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import { Header } from "../header/Header";
import { Cart } from "../cart/Cart";
import { Home } from '../pages/home/Home';
import { Favorite } from '../pages/favorite/Favorite';
import { Orders } from '../pages/orders/Orders';

import './App.scss';

export const ThemeContext = createContext({});

export function App() {
  const [sneakers, setSneakers] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [getSneakers, getCart, getFavorite] = await Promise.all([
          await axios.get('https://6253fc5019bc53e234769c4f.mockapi.io/sneakers'),
          await axios.get('https://6253fc5019bc53e234769c4f.mockapi.io/CartSneakers'),
          await axios.get('https://6253fc5019bc53e234769c4f.mockapi.io/favoriteSneakers')
        ]);
        setIsLoading(false);

        setSneakers(getSneakers.data);
        setCartItems(getCart.data);
        setFavorites(getFavorite.data);
      } catch (error) {
        alert('Не удалось получить данные')
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findeItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findeItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://6253fc5019bc53e234769c4f.mockapi.io/CartSneakers/${findeItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post('https://6253fc5019bc53e234769c4f.mockapi.io/CartSneakers', obj)
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id
              };
            }
            return item;
          }))
      }
    } catch {
      alert('Не удалось добавить товар в корзину');
    }
  };

  const onAddFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
        axios.delete(`https://6253fc5019bc53e234769c4f.mockapi.io/favoriteSneakers/${obj.id}`);
      } else {
        const { data } = await axios.post('https://6253fc5019bc53e234769c4f.mockapi.io/favoriteSneakers', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в избранное')
    }
  };

  const onRemoveCard = (id) => {
    try {
      axios.delete(`https://6253fc5019bc53e234769c4f.mockapi.io/CartSneakers/${id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    } catch (error) {
      alert('Ошибка при удалении из корзины')
    }
  };

  return (
      <ThemeContext.Provider
        value={{
          sneakers, cartItems, favorites, cartOpen,
          onAddFavorite, setCartOpen, setCartItems, onRemoveCard
        }}>

        <div className="wrapper">

          <Header setCartOpen={setCartOpen} />

          <Cart
            onRemove={onRemoveCard}
            setCartOpen={setCartOpen}
            cartOpen={cartOpen} />

          <Routes>
            <Route path='/' element={
              <Home sneakers={sneakers}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearch={setSearchValue}
                onAddToCart={onAddToCart}
                onAddFavorite={onAddFavorite}
                loading={isLoading} />} />

            <Route path="/favorite" element={<Favorite />} />

            <Route path='/orders' element={<Orders />} />
          </Routes>

        </div>
      </ThemeContext.Provider>
  );
}
