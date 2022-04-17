import { Link } from 'react-router-dom';

import './Favorite.scss';

export const Favorite = () => {

  return (
    <main>
      <div className="favorite__header">
        <Link to='/'><img src="images/arrowPrevBlack.svg" alt="Назад" /></Link>
        <div className="title">Избранное</div>
      </div>
      <div className="nullFavorite">
        <img src="images/nullFavorite.jpg" alt="Грустный смайлик" />
        <h3>Избранных товаров нет...</h3>
        <p>Вы ничего не добавляли в избранное</p>
        <Link to="/"><button className='cartBtnPrev'><img src="images/ArrowPrev.svg" alt="Вернуться" />Вернуться назад</button></Link>
      </div>
    </main>
  )
}