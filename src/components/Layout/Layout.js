import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

export default function Layout(props) {
  const { children } = props;

	return (
    <>
      <Header />
      <div className="page-content" style={{height: '75%', width: '100%'}}>
        {children}
      </div>
    </>
	)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
