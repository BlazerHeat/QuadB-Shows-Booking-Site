import React, { useEffect, useState } from 'react';
import client from '../api';
import Card from '../components/Card';
import Hero from '../components/Hero';

const HomePage = () => {
    const [showsData, setShowsData] = useState([]);

    const fectData = async () => {
        try {
            const { data } = await client.get('/search/shows?q=all', { withCredentials: false });
            setShowsData(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fectData();
    }, []);

    return (
        <>
            <Hero />
            <section id="shows" className="text-center" style={{ margin: '4rem' }}>
                <h1 className="heading">Current Shows</h1>
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ flexWrap: 'wrap', gap: '1rem' }}
                >
                    {showsData.map(({ show }) => {
                        return (
                            <Card
                                key={show.id}
                                id={show.id}
                                title={show.name}
                                genres={show.genres}
                                premiered={show.premiered}
                                rating={show.rating.average}
                                imgUrl={show.image ? show.image.medium : ''}
                            />
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default HomePage;
