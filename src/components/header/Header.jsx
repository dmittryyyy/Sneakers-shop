import './Header.scss';

export const Header = (props) => {


    return (
        <header>
        <div className='headerLeft'>
          <img src='images/logo.svg' alt="Логотип"/>
          <div className='headerInfo'>
            <h2>SNEAKERS SHOP</h2>
            <p>Лучший магазин по продаже кросcовок</p>
          </div>
        </div>
        <div>
          <ul className='headerRight'>
            <li className='headerRight__item'>
              <div className='cartAndSum'>
              <img src='images/cart.svg' alt="Корзина"/>
              <span className="headerPrice">2 р</span>
              </div>
            </li>
            <li className='headerRight__item'>
              <img src='images/like.svg' alt="Избранное"/>
            </li>
            <li className='headerRight__item'>
                <img src='images/user.svg' alt="Заказы"/>
            </li>
          </ul>
        </div>
      </header>
    )
}