import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DefaultImage from "../assets/default-movie-background.jpg"
import { PageNotFound } from "./PageNotFound";
import ErrorImg from "../assets/network-error.svg";
import { MovDetailSkeleton } from "./MovDetailSkeleton";

export const MovieDetail = () => {
  const [ movie, setMovie ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);
  const params = useParams();
  const image = movie.poster_path ?`https://image.tmdb.org/t/p/w500/${movie.poster_path}` : DefaultImage ;

  useEffect(() => {
    document.title = `${movie.title}/Movimate`;
  });

  useEffect(() => {
    async function fetchMovie(){
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
        if(!response.ok){
          throw new Error (`Network Response Failed ${response.statusText}`);
        }
        const json = await response.json();
        setMovie(json);
      } catch(err) {
        setError(err.message);
      } finally {
        setLoading(false);
      } 
    }
    fetchMovie();
  }, [params.id])


  if (error) {
    return <div><PageNotFound msg={`Error: ${error}`} img={ErrorImg} /></div>
  }


  return (
    <main>
      {loading ? (<MovDetailSkeleton/>) : (
        <div>
        <section className="flex justify-center my-7 ">
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800">
          <img className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={image} alt="poster" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
            <p className="my-1">
              <span className="mr-2 text-sm font-medium dark:text-white">Release Date:</span>
              <span className="text-sm dark:text-white">{movie.release_date}</span>
            </p>
            {movie.genres ? (
              <p className="my-3 flex flex-wrap gap-1"> 
              {movie.genres.map((genre) => (
                <span className="mr-2 text-sm border border-gray-200 rounded dark:border-gray-600 dark:text-white p-1" key={genre.id}>{genre.name}</span>
              ))} </p>) : "" }
            <div className="flex items-center my-2">
              <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg> 
              <p className="ms-2 text-sm font-normal text-gray-900 dark:text-white">{movie.vote_average}/10 ratings</p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <p className="text-sm font-normal text-gray-900 dark:text-white">{movie.vote_count} reviews</p>
            </div>
            <p className="my-1">
              <span className="mr-2 text-sm font-medium dark:text-white">Runtime:</span>
              <span className="text-sm dark:text-white">{movie.runtime} mins.</span>
            </p>
            <p className="my-1">
              <span className="mr-2 text-sm font-medium dark:text-white">Budget:</span>
              <span className="text-sm dark:text-white">{`$${movie.budget}`}</span>
              <span className="mx-2 text-sm font-medium dark:text-white">Revenue:</span>
              <span className="text-sm dark:text-white">{`$${movie.revenue}`}</span>
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-center my-3">
        <div className="max-w-base my-7 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">Overview</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.overview}</p>
        </div>
      </section>
      </div>
      )}
    </main>
  )
}
