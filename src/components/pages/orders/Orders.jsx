import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CardSneakers } from '../../cardSneakers/CardSneakers';
import axios from 'axios';

import './Orders.scss';

export const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                const { data } = await axios.get('https://6253fc5019bc53e234769c4f.mockapi.io/Orders');
                setIsLoading(false);
                setOrders(data.map((obj) => obj.items).flat());
            } catch (error) {
                alert('Ошибка при запросе заказов...')
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <main>
            {isLoading ? (

                <div className="favorite__header">
                    <Link to='/'><img src="images/arrowPrevBlack.svg" alt="Назад" /></Link>
                    <div className="title">Загрузка заказов...</div>
                </div>

            ) : orders.length > 0 ? (
                <>
                    <div className="favorite__header">
                        <Link to='/'><img src="images/arrowPrevBlack.svg" alt="Назад" /></Link>
                        <div className="title">Заказы</div>
                    </div>

                    <div className="sneakersFavorite">
                        {(isLoading ? [...Array(5)] : orders).map((item, index) => (
                            <CardSneakers
                                key={index}
                                {...item}
                                loading={isLoading}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <div className="nullFavorite">
                    <img src="images/nullOrder.jpg" alt="Грустный смайлик" />
                    <h3>Заказов к сожалению нет...</h3>
                    <p>Закажите хотя бы одну пару кроссовок</p>
                    <Link to="/"><button className='cartBtnPrev'><img src="images/ArrowPrev.svg" alt="Вернуться" />Вернуться назад</button></Link>
                </div>
            )}
        </main>
    )
}
