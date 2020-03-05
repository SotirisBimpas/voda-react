import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

export default function Layout(props) {
  const { children } = props;

	return (
    <>
      <Header />
      <div className="page-content">
        {children}
      </div>
    </>
	)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
