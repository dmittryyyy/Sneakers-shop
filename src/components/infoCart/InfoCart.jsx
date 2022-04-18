import { useContext } from 'react';
import { ThemeContext } from '../app/App';
import './InfoCart.scss';

export const InfoCart = ({ image, title, descr }) => {
  const { setCartOpen } = useContext(ThemeContext);

  return (
    <div className="infoCart">
          <img className='infoImage' src={image} alt="Пустая корзина" />
          <h2 className='infoTitle'>{title}</h2>
          <p className='infoDescr'>{descr}</p>
      <button onClick={() => setCartOpen(false)} 
      className='cartBtnPrev'><img src="images/ArrowPrev.svg" 
      alt="Вернуться" />Вернуться назад</button>
      </div>
  )
}