import React , {useState, useEffect}from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';


export const MovieDetail = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchmovies = async () => {
            const res = await axios.get(`https://www.omdbapi.com/?apikey=285b9ee9&i=${id}`);
            setMovie(res.data);
        };
        fetchmovies();
    }, [id]);

    if (!movie) return <h3 className="text-center mt-5">Loading...</h3>;
    
    return (
        <div className="container mt-5">
            <div className="card shadow p-4">

                <div className="row">
                    <div className="col-md-4">
                        <img
                            src={movie.Poster}
                            className="img-fluid"
                            alt={movie.Title}
                        />
                    </div>

                    <div className="col-md-8">
                        <h2>{movie.Title}</h2>
                        <p><strong>Year:</strong> {movie.Year}</p>
                        <p><strong>Genre:</strong> {movie.Genre}</p>
                        <p><strong>Director:</strong> {movie.Director}</p>
                        <p><strong>Actors:</strong> {movie.Actors}</p>
                        <p><strong>Plot:</strong> {movie.Plot}</p>
                        <p><strong>IMDB Rating:</strong> ⭐ {movie.imdbRating}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
