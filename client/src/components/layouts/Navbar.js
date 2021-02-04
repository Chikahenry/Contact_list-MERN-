import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../fontawesome.min.css';

const Navbar = ({ title, icon }) => {
	return (
		<div className='navbar bg-primary'>
			<h1>
				<i className={icon}>{title} </i>
			</h1>
			<ul>
				<li>
					<Link to='/'>Home</Link>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</div>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string,
};

Navbar.defaultProps = {
	title: 'Contact List',
	icon: 'fas fa-id-card-alt',
};

export default Navbar;
