import { React, useState, useContext } from 'react';
import ContentLoader from 'react-content-loader';
import { ThemeContext } from '../app/App';
import './cardSneakers.scss';

export const CardSneakers = ({ imgUrl, title, price, id, onAdd, onFavorite,
  loading = false, favorited = false }) => {

  const { cartItems } = useContext(ThemeContext);
  const [isFavorite, setIsFavorite] = useState(favorited);
  const sneakerObj = { imgUrl, title, price, id, parentId: id };

  return (
    <div className="card">
      {loading ? 
        <ContentLoader
          speed={2}
          width={210}
          height={260}
          viewBox="0 0 210 260"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="4" y="4" rx="10" ry="10" width="150" height="120" />
          <rect x="4" y="170" rx="3" ry="3" width="40" height="15" />
          <rect x="4" y="187" rx="8" ry="8" width="80" height="25" />
          <rect x="120" y="180" rx="8" ry="8" width="32" height="32" />
          <rect x="4" y="130" rx="8" ry="8" width="150" height="35" />
        </ContentLoader>
      : 
        <>
            <img className='liked'
              src='images/btnUnliked.svg' alt="В избранное" />
          <img src={imgUrl} alt="Фото кроссовок" />
          <h5 className='cardTitle'>{title}</h5>
          <div className="cardBottom">
            <div className="cardContent">
              <p className='cardPrice'>Цена:</p>
              <b>{price} руб.</b>
            </div>
            </div>
            
              <img className='btnCard' 
                src='images/btnAddCart.svg' alt="В корзину" />
</>} 
      </div>    )}