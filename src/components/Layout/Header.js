import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const [slides, setSlides] = useState([]);
  const [activeSlide, setActiveSlide] = useState({});

  const { pathname } = useLocation();
  console.log(pathname)

  useEffect(() => {
    fetch('https://voda-react-assessment.herokuapp.com/slider')
      .then(res => res.json())
      .then(res => {
        setSlides(res);
        setActiveSlide(res[0]);
      })
  }, []);

  const {
    header,
    menu,
    search,
    navigation,
    navItem,
    navItemActive,
    sliderPointer,
    dot,
    dotActive
  } = styles;

	return (
		<header className={header} style={{
      background: `url(${activeSlide.image}) 100% no-repeat`
    }}>
      <div className={navigation}>
        <div className={menu}>
          <div className={pathname.includes('/home') ? navItemActive : navItem}>
            <Link to="/">Home</Link>
          </div>
          <div className={pathname === '/page-2' ? navItemActive : navItem}>
            <Link to="/page-2">Page 2</Link>
          </div>
        </div>
        <div className={search} />
      </div>
      <h1>{activeSlide.title}</h1>
			<h2>{activeSlide.subtitle}</h2>
      <div className={sliderPointer}>
        {slides.length > 0 && slides.map((s, i) => (
          <div
            className={[dot, activeSlide.title === `Slide ${i + 1}` && dotActive].join(' ')}
            onClick={() => setActiveSlide(s)}
          />
        ))}
      </div>
		</header>
	)
}