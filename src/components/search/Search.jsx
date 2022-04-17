import './Search.scss';

export const Search = ({ searchValue, setSearchValue }) => {

const onChangeInputValue = (e) => {
    setSearchValue(e.target.value);
  }

  return (
      <div className='contentTop'>
        <h1 className="searchTitle">{searchValue ? `Поиск по запросу '${searchValue}'` : 'Наши кроссовки'}</h1>
        <div className="search">
          <img src="images/search.svg" alt="Поиск" />
          {searchValue && <span className='clearInput' onClick={() => setSearchValue('')}>X</span>}
          <input placeholder='Поиск...' onChange={onChangeInputValue} value={searchValue} />
        </div>
      </div>
  )
}