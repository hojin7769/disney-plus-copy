import React, {useCallback, useEffect, useState} from 'react';
import axios from "../api/axios";
import "./Row.css";


const Row = ({title, id ,fetchUrl}) => {

    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelection] = useState({})

    const fetchMovieData =useCallback( async () => {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        console.log(request.data.results);
        return request;

    },[fetchUrl]);


    useEffect(() => {
        fetchMovieData()
    }, [fetchMovieData]);

    const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelection(movie);
    }
    return (
        <div>
            <h2>{title}</h2>
            <div className='slider'>
                <div className='slider__arrow-left'>
                    <span className='arrow'>
                        {"<"}
                    </span>
                </div>
                <div id={id} className='row__posters'>
                    {movies.map((movie) => (
                        <img
                            className='row__poster row__posterLarge'
                            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                            alt={movie.name}
                            onClick={() => handleClick(movie)}
                        />
                    ))}
                </div>
                <div className='slider__arrow-right'>
                    <span className='arrow'>
                        {">"}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Row;

