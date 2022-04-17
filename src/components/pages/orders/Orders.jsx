import { Link } from 'react-router-dom';


import './Orders.scss';

export const Orders = () => {


    return (
        <main>
            <div className="favorite__header">
                <Link to='/'><img src="images/arrowPrevBlack.svg" alt="Назад" /></Link>
                <div className="title">Загрузка заказов...</div>
            </div>

            <div className="favorite__header">
                <Link to='/'><img src="images/arrowPrevBlack.svg" alt="Назад" /></Link>
                <div className="title">Заказы</div>
            </div>

            <div className="sneakersFavorite">

            </div>

            <div className="nullFavorite">
                <img src="images/nullOrder.jpg" alt="Грустный смайлик" />
                <h3>Заказов к сожалению нет...</h3>
                <p>Закажите хотя бы одну пару кроссовок</p>
                <Link to="/"><button className='cartBtnPrev'><img src="images/ArrowPrev.svg" alt="Вернуться" />Вернуться назад</button></Link>
            </div>

        </main>
    )
}
