import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, title, rating, genres, premiered, imgUrl }) => {
	return (
		<div className='card' style={{ width: '330px' }}>
			<img className='card-img-top' src={imgUrl || '/assets/img/placeholder.png'} alt={title} height='330px' />
			<div className='card-body text-start'>
				<h5 className='card-title text-center'>{title || 'Unknown'}</h5>
				<ul className='list-group list-group-flush my-3'>
					<li className='list-group-item'>
						Rating:{' '}
						<span className='text-muted' style={{ fontSize: '14px' }}>
							{rating || 'Unknown'}
						</span>
					</li>
					<li className='list-group-item'>
						Genres:{' '}
						<span className='text-muted' style={{ fontSize: '14px' }}>
							{genres.length > 0 ? genres.join(', ') : 'Unkown'}
						</span>
					</li>
					<li className='list-group-item'>
						Premiered:{' '}
						<span className='text-muted' style={{ fontSize: '14px' }}>
							{premiered || 'Unknown'}
						</span>
					</li>
				</ul>
				<Link to={'/shows/' + id} className='btn btn-primary'>
					More Info
				</Link>
			</div>
		</div>
	);
};

export default Card;
