import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [collapse, setCollpase] = useState(false);

	const handleClick = () => {
		setCollpase((prev) => !prev);
	};

	return (
		<header id='header' className='fixed-top'>
			<div className='container d-flex align-items-center justify-content-between'>
				<h1 className='logo'>
					<Link to='/'>QuadB Bookings</Link>
				</h1>

				<nav id='navbar' className={collapse ? 'navbar navbar-mobile' : 'navbar'}>
					<ul onClick={() => setCollpase(false)}>
						<li>
							<Link to='/' className='nav-link scrollto'>
								Home
							</Link>
						</li>
						<li>
							<Link to='/booked' className='getstarted scrollto'>
								My Shows
							</Link>
						</li>
					</ul>
					<div onClick={handleClick}>
						<i className={collapse ? 'bi bi-x mobile-nav-toggle' : 'bi bi-list mobile-nav-toggle'}></i>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
