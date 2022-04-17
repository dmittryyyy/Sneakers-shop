import { React, useState } from 'react'
import { Header } from '../header/Header'
import { Home } from '../pages/home/Home';

import './App.scss';

export const App = () => {
  const [searchValue, setSearchValue] = useState('');


  return (
    <div className="wrapper">
      
        <Header/>
        <Home
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        />

    </div>
    
  )
}
