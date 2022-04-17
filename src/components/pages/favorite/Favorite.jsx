import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import {CardSneakers} from '../../cardSneakers/CardSneakers';
import { ThemeContext } from '../../app/App';
import './Favorite.scss';

export const Favorite = ({ onAddToCart }) => {
  const { favorites, onAddFavorite } = useContext(ThemeContext);

  return (
    <main>
      <div className="favorite__header">
        <Link to='/'><img src="/images/arrowPrevBlack.svg" alt="Назад" /></Link>
        <div className="title">Избранное</div>
      </div>

{favorites.length > 0 ? <>
      <div className='sneakersFavorite'>
        {favorites.map((favorites) => (
            <CardSneakers
              key={favorites.id}
              {...favorites}
              favorited={true}
              onFavorite={(obj) => onAddFavorite(obj)}
              onAdd={(obj) => onAddToCart(obj)} 
              />
          ))}
      </div>
      </> 
      : 
      <div className="nullFavorite">
        <img src="images/nullFavorite.jpg" alt="Грустный смайлик" />
        <h3>Избранных товаров нет...</h3>
        <p>Вы ничего не добавляли в избранное</p>
        <Link to="/"><button className='cartBtnPrev'><img src="images/ArrowPrev.svg" alt="Вернуться" />Вернуться назад</button></Link>
      </div>
      }
    </main>
  )
}