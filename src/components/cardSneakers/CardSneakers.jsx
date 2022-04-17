import './CardSneakers.scss';

export const CardSneakers = ({ imgUrl, title, price, id,}) => {


  return (
    <div className="card">

      <img className='liked'
        src='images/btnLiked.svg' alt="В избранное" />
      <img src={imgUrl} alt="Фото кроссовок" />
      <h5 className='cardTitle'>{title}</h5>
      <div className="cardBottom">
        <div className="cardContent">
          <p className='cardPrice'>Цена:</p>
          <b>{price} руб.</b>
        </div>
          <img className='btnCard' src='images/btnCart.svg' alt="В корзину" />
            </div>
    </div>
  )
}
