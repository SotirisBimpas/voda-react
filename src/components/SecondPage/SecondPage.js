import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SecondPage.module.css';

export default function SecondPage({ description, tiles }) {
const [isHovered, setIsHovered] = useState();
  const {
    secondPage,
    pageTitle,
    tilesContainer,
    tile,
    activeTile,
    icon,
    title,
    text,
    link
  } = styles;

	return (
    <div className={secondPage}>
      <h3 className={pageTitle}>{description}</h3>
      <div className={tilesContainer}>
        {tiles.map(t => (
          <div 
            key={t.icon}
            className={[tile, isHovered === t.icon ? activeTile : ''].join(' ')}
            onMouseOver={() => setIsHovered(t.icon)}
            onMouseLeave={() => setIsHovered()}
          >
            <img
              src={`/${t.icon}${isHovered === t.icon ? '-white' : ''}.png`}
              alt={t.icon}
              className={icon}
            />
            <div className={title}>{t.title}</div>
            <div className={text}>{t.description}</div>
            <a className={link} href="#">{t.link}</a>
          </div>
          )
        )}
      </div>
    </div>
	)
}