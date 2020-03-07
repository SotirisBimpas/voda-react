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
        {tiles.map(t => {
          const active = isHovered === t.icon;
          return ( 
            <div 
              key={t.icon}
              className={[tile, active ? activeTile : ''].join(' ')}
              onMouseOver={() => setIsHovered(t.icon)}
              onMouseLeave={() => setIsHovered()}
            >
              <img
                src={`/${t.icon}${active ? '-white' : ''}.png`}
                alt={t.icon}
                className={icon}
              />
              <div className={title}>{t.title}</div>
              <div className={text}>{t.description}</div>
              <div className={link}>
                {t.link}
                <img src={`/${active ? 'arrow-white' : 'arrow'}.png`} alt="arrow"/>                
              </div>
            </div>
          )
        })}
      </div>
    </div>
	)
}

SecondPage.propTypes = {
  description: PropTypes.string.isRequired,
  tiles: PropTypes.array.isRequired,
};
