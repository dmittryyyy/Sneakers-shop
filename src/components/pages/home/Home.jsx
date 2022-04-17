import { Search } from '../../search/Search';
import { CardSneakers } from '../../cardSneakers/CardSneakers';

import './Home.scss';

export const Home = ({ sneakers, searchValue, setSearch, onAddToCart, onAddFavorite, loading, cartItems }) => {

  const renderSneakers = () => {
    const filterSneaker = sneakers.filter((item) =>
      item.title.toLowerCase().includes(searchValue)
    );
    return (loading ? [...Array(10)] : filterSneaker).map((item, index) => (
      <CardSneakers
        key={index}
        loading={loading}
        cartItems={cartItems}
        onFavorite={(obj) => onAddFavorite(obj)}
        onAdd={(obj) => onAddToCart(obj)}
        {...item}
      />
    ));
  };

  return (
    <main>

      <Search searchValue={searchValue} setSearchValue={setSearch} />

      <div className='sneakersHome'>
        {renderSneakers()}
      </div>
    </main>
  )
}