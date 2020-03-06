import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FirstSection.module.css';

export default function FirstSection({images}) {
  const [isHovered, setIsHovered] = useState();

  const { portfolio, portfolioImage, overlay, eyeIcon, underline } = styles;

  return (
    <div className={portfolio}>
      {images.map((image) => (
        <div
          key={image.title}
          className={portfolioImage}
          style={{
            background: `url(${image.img}) center center no-repeat`,
            backgroundSize: 'cover',
            position: 'relative'
          }}
          onMouseOver={() => setIsHovered(image.title)}
          onMouseLeave={() => setIsHovered()}
        >
          {
            isHovered === image.title
              && (
                <div className={overlay}>
                  <div className={eyeIcon} />
                  <p>{image.title}</p>    
                  <div className={underline} />
                </div>
              )
          }
        </div>
      ))}
    </div>
  )
}

FirstSection.propTypes = {
  images: PropTypes.array.isRequired,
};
