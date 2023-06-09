import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const MyShows = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('shows')) {
            const data = JSON.parse(localStorage.getItem('shows')).bookedShows;
            setShows(data);
        }
    }, []);

    return (
        <section
            style={{
                minHeight: '100vh',
                padding: '1rem',
                marginTop: '3rem',
                paddingBottom: '3rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}
        >
            <h1 className="text-center display-4 m-4 heading" style={{ marginBottom: '3rem' }}>
                Booked Shows
            </h1>
            <div className="d-flex justify-content-center align-items-center" style={{ flexWrap: 'wrap', gap: '1rem' }}>
                {shows.map((show, i) => {
                    return (
                        <Card
                            id={show.id}
                            key={i}
                            genres={show.genres}
                            rating={show.rating.average}
                            title={show.name}
                            premiered={show.premiered}
                            imgUrl={show.image ? show.image.medium : ''}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default MyShows;
