import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header>
      <div className="navigation">
        <Link to="/">Home</Link>
        <Link to="/page-2">Page 2</Link>
      </div>
			<h1>Header</h1>
		</header>
	)
}