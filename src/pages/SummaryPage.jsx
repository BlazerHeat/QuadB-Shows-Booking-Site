import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../api';

const SummaryPage = () => {
    const { id } = useParams();
    const [showData, setShowData] = useState({});
    const [loading, setlaoding] = useState(true);
    const [submitted, setSubmitted] = useState(false);

    const fetchShowData = async () => {
        try {
            const { data } = await client.get('/shows/' + id, { withCredentials: false });
            setShowData(data);
        } catch (err) {
            console.error(err);
        } finally {
            setlaoding(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let shows;
        if (localStorage.getItem('shows')) {
            shows = JSON.parse(localStorage.getItem('shows'));
        } else {
            shows = { bookedShows: [] };
        }
        shows.bookedShows.push({ ...showData });
        localStorage.setItem('shows', JSON.stringify(shows));
        setSubmitted(true);
    };

    useEffect(() => {
        fetchShowData();
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return (
            <div style={{ height: '100vh', display: 'grid', placeItems: 'center' }}>
                <h1>Loading...</h1>
            </div>
        );
    }

    const summary = {
        __html: showData.summary || 'Unknown',
    };

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
            <div className="modal fade" id="bookshow" tabIndex="-1" aria-labelledby="bookshow" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Booking {showData.name || 'Unknown'}
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-3" onSubmit={handleSubmit}>
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">
                                        First Name
                                    </label>
                                    <input type="text" className="form-control" id="inputEmail4" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">
                                        Last Name
                                    </label>
                                    <input type="text" className="form-control" id="inputPassword4" required />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="inputCity" className="form-label">
                                        City
                                    </label>
                                    <input type="text" className="form-control" id="inputCity" required />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputState" className="form-label">
                                        State
                                    </label>
                                    <select id="inputState" className="form-select" required>
                                        <option>Gujarat</option>
                                        <option>Mumbai</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="inputZip" className="form-label">
                                        Zip
                                    </label>
                                    <input type="text" className="form-control" id="inputZip" required />
                                </div>
                                <div className="modal-footer pb-0">
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                                        Close
                                    </button>
                                    <button type="submit" className="btn btn-success" disabled={submitted}>
                                        {submitted ? 'Booked!' : 'Confirm Book'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="display-4 heading" style={{ marginBottom: '3rem' }}>
                Show Summary
            </h1>
            <div className="card mb-3 w-100" style={{ maxWidth: '720px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={showData.image?.medium || '/assets/img/placeholder.png'}
                            className="img-fluid rounded-start"
                            alt="..."
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title display-4">{showData.name || 'Unknown'}</h5>
                            <ul>
                                <li className="mb-1">
                                    Rating: <span className="text-muted">{showData.rating?.average || 'Unknown'}</span>
                                </li>
                                <li className="mb-1">
                                    Genres:{' '}
                                    <span className="text-muted">
                                        {showData.genres?.length > 0 ? showData.genres.join(', ') : 'Unknown'}
                                    </span>
                                </li>
                                <li className="mb-1">
                                    Average Runtime:{' '}
                                    <span className="text-muted">{showData.averageRuntime || 'Unknown'}</span>
                                </li>
                                <li className="mb-1">
                                    Premiered: <span className="text-muted">{showData.premiered || 'Unknown'}</span>
                                </li>
                            </ul>
                            <p className="card-text" dangerouslySetInnerHTML={summary}></p>
                            <p className="card-text">
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    data-bs-toggle="modal"
                                    data-bs-target="#bookshow"
                                >
                                    Book
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SummaryPage;
