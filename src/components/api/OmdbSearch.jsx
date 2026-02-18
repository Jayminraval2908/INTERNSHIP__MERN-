import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const OmdbSearch = () => {

    const [movies, setmovies] = useState([]);
    const [movieName, setMovieName] = useState("");
    // const [searchParam, setsearchParam] = useState("Stranger Things");
    const navigate = useNavigate();

    const SearchMovie = async () => {

        const res = await axios.get(`https://www.omdbapi.com/?apikey=285b9ee9&s=${movieName}`);

        console.log(res);
        console.log(res.data);
        setmovies(res.data.Search)
    }
    return (
        <div className="container mt-4">

            <div className="input-group mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter movie name..."
                    value={movieName}
                    onChange={(e) => setMovieName(e.target.value)}
                    onKeyDown={(e)=>{
                        if(e.key==="Enter"){
                            SearchMovie();
                        }
                    }}
                />
                <button className="btn btn-dark" onClick={SearchMovie}>
                    Search
                </button>
            </div>


            <div className="row g-4">

                {movies.map((movie) => (
                    <div key={movie.imdbID} className="col-12 col-sm-6 col-md-4 col-lg-3">

                        <div className="card h-100 shadow">

                            <img
                                src={movie.Poster}
                                className="card-img-top"
                                style={{ height: "300px", objectFit: "cover", width: "100%", borderRadius: "0px" }}
                            />

                            <div className="card-body text-center">

                                <h5 className="card-title">{movie.Title}</h5>

                                <p className="card-text">
                                    Year: {movie.Year}
                                </p>

                                <p className="text-muted small">
                                    {movie.imdbID}
                                </p>
                                <button
                                    className="btn btn-dark btn-sm mt-2"
                                    onClick={() => navigate(`/movie/${movie.imdbID}`)}
                                >
                                    View Details
                                </button>

                            </div>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    )

}
