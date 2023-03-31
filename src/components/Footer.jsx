import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer id='footer'>
			<div className='container d-md-flex py-4'>
				<div className='me-md-auto text-center text-md-start'>
					<div className='copyright'>
						&copy; Copyright{' '}
						<strong>
							<span>QuadB</span>
						</strong>
						. All Rights Reserved
					</div>
					<div className='credits'>Designed by Vatsal Ghoghari</div>
				</div>
				<div className='social-links text-center text-md-right pt-3 pt-md-0'>
					<Link className='twitter'>
						<i className='bi bi-twitter'></i>
					</Link>
					<Link className='facebook'>
						<i className='bi bi-facebook'></i>
					</Link>
					<Link className='instagram'>
						<i className='bi bi-instagram'></i>
					</Link>
					<Link className='google-plus'>
						<i className='bi bi-skype'></i>
					</Link>
					<Link className='linkedin'>
						<i className='bi bi-linkedin'></i>
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
