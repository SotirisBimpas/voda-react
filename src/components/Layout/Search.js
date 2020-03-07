import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Search.module.css';

export default function Search({setSearchIsOpen}) {
  const [searchQuery, setSearchQuery] = useState();
  const [filteredRoutes, setFilteredRoutes] = useState();

  useEffect(
    () => {
      const routes = ['home/section1', 'home/section2', 'page-2']
      if (searchQuery) {
        setFilteredRoutes(routes.filter(r => r.includes(searchQuery)));
      } else {
        setFilteredRoutes(routes)
      }
    },
    [searchQuery]
  )

  const {
    quitBtn,
    searchContainer,
    search,
    searchInput,
    options
  } = styles;

  return (
    <div className={searchContainer}>
      <img
        src="/quit.png"
        alt="quit button"
        className={quitBtn}
        onClick={() => setSearchIsOpen(false)}
      />
      <div className={search}>
        <input
          autoFocus
          className={searchInput}
          type="text"
          onChange={e => setSearchQuery(e.target.value)}
        />
        <div className={options}>
          {filteredRoutes && filteredRoutes.map(route => (
            <Link
              key={route}
              onClick={() => setSearchIsOpen(false)}
              to={`/${route}`}
            >
              {route}
            </Link>
            ))}
        </div>
      </div>
    </div>
  )
}