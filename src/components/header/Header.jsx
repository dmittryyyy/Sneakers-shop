import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import './Header.scss';

export const Header = (props) => {

    const { onOpenFavorite, setCartOpen } = props;
    
    const { totalPrice } = useCart();

    return (
        <header>
        <div className='headerLeft'>
          <Link to='/'><img src='images/logo.svg' alt="Логотип"/></Link>
          <div className='headerInfo'>
            <h2>SNEAKERS SHOP</h2>
            <p>Лучший магазин по продаже кросcовок</p>
          </div>
        </div>
        <div>
          <ul className='headerRight'>
            <li className='headerRight__item'>
              <div className='cartAndSum' onClick={() => setCartOpen(true)}>
              <img src='images/cart.svg' alt="Корзина"/>
              <span className="headerPrice">{totalPrice} р</span>
              </div>
            </li>
            <li className='headerRight__item'>
              <Link to='/favorite'>
              <img src='images/like.svg' alt="Избранное" className="log" onClick={onOpenFavorite}/>
              </Link>
            </li>
            <li className='headerRight__item'>
              <Link to="/orders"><img src='images/user.svg' alt="Заказы"/></Link>
            </li>
          </ul>
        </div>
      </header>
    )
}