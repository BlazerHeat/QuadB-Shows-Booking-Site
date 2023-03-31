import React from 'react';

const Hero = () => {
	return (
		<section id='hero' className='d-flex align-items-center'>
			<div className='container position-relative' data-aos='fade-up' data-aos-delay='100'>
				<div className='row justify-content-center'>
					<div className='col-xl-7 col-lg-9 text-center'>
						<h1>QuadB Bookings</h1>
						<h2>Your Ultimate Destination for Show Tickets and Reservations!</h2>
					</div>
				</div>
				<div className='text-center'>
					<a href='#shows' className='btn-get-started scrollto'>
						Click Here to Book Shows
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
