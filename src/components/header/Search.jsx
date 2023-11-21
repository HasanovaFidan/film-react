import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function Search({ inputValue, setInputValue, setSearch, wishList, onRemoveWishListItem }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(inputValue);
    setInputValue('');
  };

  const handleRemove = (index) => {
    onRemoveWishListItem(index);
  };

  return (
    <div>
      <header>
        <div className="header__right">
          <form id="form" action="" onSubmit={(e) => handleSubmit(e)}>
            <FaSearch className="searched" />
            <input
              type="text"
              placeholder="search"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">search</button>
          </form>
        </div>

        <div className="header__left">
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            wishlist
          </button>

          <div
            className="offcanvas offcanvas-start"
            data-bs-scroll="true"
            tabIndex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                Fidan Hasanova
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul>
                {wishList.map((item, index) => (
                  <li key={index}>
                    <img src={item.Poster} alt="" />
                    <h3>{item.Title}</h3>
                    <p>{item.Year}</p>
                    <button className='delete' onClick={() => handleRemove(index)}>delete</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Search;
