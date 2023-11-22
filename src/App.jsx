import React, { useState, useEffect } from 'react';
import './App.css';
import Data from './components/Data';
import Search from './components/header/Search';
import Footer from './components/Footer';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [search, setSearch] = useState('attack on titan');
  const [wishList, setWishList] = useState(
    localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : []
  );

  const handleSetWishListItem = (item) => {
    setWishList((prevWishList) => [...prevWishList, item]);
  };

  const handleRemoveWishListItem = (index) => {
    const updatedWishList = [...wishList];
    updatedWishList.splice(index, 1);
    setWishList(updatedWishList);
        toast.error("wislisten silindi")
  };

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishList));
  }, [wishList]);

  return (
    <>
      <Search
        setInputValue={setInputValue}
        inputValue={inputValue}
        setSearch={setSearch}
        wishList={wishList}
        onRemoveWishListItem={handleRemoveWishListItem}
      />
      <Data search={search} setWishListItem={handleSetWishListItem} />
      <Footer />
    </>
  );
}

export default App;
