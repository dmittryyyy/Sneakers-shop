import { useState } from 'react';
import { useCart } from '../hooks/useCart';
import axios from 'axios';

import './Cart.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const Cart = ({ onRemove, cartOpen, setCartOpen }) => {
  const { cartItems, totalPrice } = useCart();

  return (
    <div className={`overlayHidden ${cartOpen ? 'overlayVisible' : ''}`}>
      <div className="cartBlock">
        <div className='cartTitle'>
          <h2>Корзина</h2>
          <span onClick={() => setCartOpen(false)}>X</span>
        </div>

            <>
            <div className="cartItems">
              {cartItems.map((item) => (
                <div key={item.id} className="cartItem">
                  <img src={item.imgUrl} alt="" />
                  <div>
                    <p>{item.title}</p>
                    <b>{item.price} руб</b>
                  </div>
                  <img className="btnDelete"
                    src="images/cartDelete.svg" alt="Удалить"
                    onClick={() => onRemove(item.id)} />
                </div>
                ))}
            </div>
             <ul className='cartTotalBlock'>
             <li>
               <span>Итого:</span>
               <div></div>
               <b>{totalPrice} руб.</b>
             </li>
             <li>
               <span>Налог:</span>
               <div></div>
               <b>{parseInt(totalPrice / 100 * 5)}руб.</b>
             </li>
           </ul>
           <button className='cartBtnCheck' 
           >Оформить заказ<img src="images/btnCheck.svg" 
           alt="Заказ" /></button>
           </>      
      </div>
    </div>
  )
}