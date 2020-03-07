import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Search from './Search';

export default function Layout(props) {
  const { children } = props;
  const [searchIsOpen, setSearchIsOpen] = useState(false);

	return (
    <>
      <Header setSearchIsOpen={setSearchIsOpen} />
      <div style={{
        height: '75%',
        width: '100%',
        backgroundColor: '#f8faff'
      }}>
        {children}
      </div>
      {searchIsOpen && <Search setSearchIsOpen={setSearchIsOpen} />}
    </>
	)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
