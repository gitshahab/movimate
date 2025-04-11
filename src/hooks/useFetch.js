import { useEffect, useState } from 'react';
import { useLoading } from '../context/LoadingContext';

export const useFetch = ({apiPath, queryTerm="", page=1}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}&query=${queryTerm}`;
    
    const { startLoading, completeLoading } = useLoading();
    
    useEffect(() => {
        async function fetchMovies(){
            try {
                startLoading();
                const response = await fetch(url);
                if(!response.ok) {
                    throw new Error(`Network response failed ${response.statusText}`);
                }
                const json = await response.json();
                setData(json.results);
            
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
                completeLoading();
            }
        }
        fetchMovies();
    }, [url, startLoading, completeLoading]);

  return {data, loading, error }
}
