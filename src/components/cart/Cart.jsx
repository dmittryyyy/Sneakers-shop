import { useState } from 'react';
import { useCart } from '../hooks/useCart';
import {InfoCart} from '../infoCart/InfoCart';
import axios from 'axios';

import './Cart.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const Cart = ({ onRemove, cartOpen, setCartOpen }) => {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onMakeOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://6253fc5019bc53e234769c4f.mockapi.io/Orders', {
        items: cartItems
      });
      setOrderId(data.id);
      setIsSending(true);
      setCartItems([]);
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(`https://6253fc5019bc53e234769c4f.mockapi.io/CartSneakers/${item.id}`);
        await delay(1000);
      }
    } catch (error) {
      alert('Не удалось создать заказ');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={`overlayHidden ${cartOpen ? 'overlayVisible' : ''}`}>
      <div className="cartBlock">
        <div className='cartTitle'>
          <h2>Корзина</h2>
          <span onClick={() => setCartOpen(false)}>X</span>
        </div>

        {cartItems.length > 0 ?
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
           disabled={isLoading} onClick={onMakeOrder}>Оформить заказ<img src="images/btnCheck.svg" 
           alt="Заказ" /></button>
           </>
          : <InfoCart 
          image={!isSending ? 'images/nullCart.jpg' : 'images/order-success.jpg'} 
          title={!isSending ? 'Корзина пустая!' : 'Заказ оформлен!'}
          descr={!isSending ? 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.' : `Заказ #${orderId} скоро будет передан курьерской доставке`}/>}
         
      </div>
    </div>
  )
}