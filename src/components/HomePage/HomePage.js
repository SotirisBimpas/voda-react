import React from 'react';
import PropTypes from 'prop-types';
import {
  Link, Redirect, Route, useLocation, useRouteMatch
} from 'react-router-dom';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import styles from './HomePage.module.css';

export default function HomePage({description, sections}) {
  const { pathname } = useLocation();
  const { url } = useRouteMatch();

  const { homepage, sectionsFilters, section, sectionActive } = styles;

	return (
  	<div className={homepage}>
      <h3>{description}</h3>
      <div className={sectionsFilters}>
        <Link
          to={`${url}/section1`}
          className={[section, pathname === `${url}/section1` ? sectionActive : ''].join(' ')}
        >
          Section 1
        </Link>
        <Link
          to={`${url}/section2`}
          className={[section, pathname === `${url}/section2` ? sectionActive : ''].join(' ')}
        >
          Section 2
        </Link>
      </div>
      <Route path="/home/section1" render={() => <FirstSection images={sections[0].images} />} /> 
      <Route path="/home/section2" render={() => <SecondSection data={sections[1]} />} /> 
      <Redirect to="/home/section1" />
    </div>
	)
}

HomePage.propTypes = {
  description: PropTypes.string.isRequired,
  sections: PropTypes.array.isRequired,
};
