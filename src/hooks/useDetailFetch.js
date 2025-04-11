import { useEffect, useState } from 'react';
import { useLoading } from '../context/LoadingContext';

export const useDetailFetch = (movieId) => {
    const [ movie, setMovie ] = useState(null);
    const [ cast, setCast ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    const { startLoading, completeLoading } = useLoading();

    useEffect(() => {
        if (!movieId) return;

        const fetchMovieDetails = async () => {
            try {
                setLoading(true);
                startLoading();
        
                const movieRes = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
                );
                const movieData = await movieRes.json();
                
                const castRes = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`
                );
                const castData = await castRes.json();

                setMovie(movieData);
                setCast(castData.cast.slice(0, 20));

            } catch(err) {
                setError(err.message);
            } finally {
                setLoading(false);
                completeLoading();
            }
        };
        fetchMovieDetails();
    }, [movieId, startLoading, completeLoading]);

  return { movie, cast, loading, error }
}
