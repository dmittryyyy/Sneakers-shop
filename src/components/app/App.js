import { React, useEffect, useState, createContext } from 'react';
import axios from 'axios';

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [getSneakers, getCart] = await Promise.all([
          await axios.get('https://6253fc5019bc53e234769c4f.mockapi.io/sneakers'),
          await axios.get('https://6253fc5019bc53e234769c4f.mockapi.io/CartSneakers'),
        ]);
        setIsLoading(false);

        setSneakers(getSneakers.data);
        setCartItems(getCart.data);
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
        sneakers, cartItems, cartOpen,
       setCartOpen, setCartItems, onRemoveCard
      }}>

      <div className="wrapper">
        <Header setCartOpen={setCartOpen} />

        <Cart
          onRemove={onRemoveCard}
          setCartOpen={setCartOpen}
          cartOpen={cartOpen}
        />

        
              <Home sneakers={sneakers}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearch={setSearchValue}
                onAddToCart={onAddToCart}
                loading={isLoading} />


       <Favorite />

          <Orders />

      </div>
    </ThemeContext.Provider>
  );
}
