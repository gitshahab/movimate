import React from 'react';
import { Link } from "react-router-dom";
import moment from "moment";
import defaultImage from "../assets/default-movie-background.jpg";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import { useFav } from '../context/FavContext';


export const Card = ({movie}) => {
    const {id, title, release_date, poster_path, vote_average} = movie;
    const image = poster_path ?`https://image.tmdb.org/t/p/w500/${poster_path}` : defaultImage ;
    const date = new Date(release_date);
    const formatedReleaseDate = moment(date).format('MMMM D, YYYY'); 

    const { fav, dispatch } = useFav();
    const isFav = fav.some(favMovie => favMovie.id === movie.id);

    const handleFav = () => {
        if(isFav) {
            dispatch({ type: "REMOVE_FAV", payload: { id }});
        } else {
            dispatch({ type: "ADD_FAV", payload: movie });
        }
    }

    let rate = 0.0;
    if(vote_average < 5.0){
        rate = 2.0
    } else if( vote_average >= 5.0 && vote_average < 6.0) {
        rate = 3.0
    } else if( vote_average >= 6.0 && vote_average < 7.0) {
        rate = 4.0
    } else if( vote_average >= 7.0 && vote_average < 8.0){
        rate = 4.5
    } else {
        rate = 5.0
    }

    const ratings = parseFloat(rate);

    const renderStars = () => {
        const star = []
        for(let i = 1; i <= 5; i++){
            star.push(
                <svg className={`w-4 ${ratings >= i ? "text-yellow-300" : "text-slate-300"}`}
                    key={i}
                    aria-hidden="true" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            );
        }
        return star
    }

  return (
        <div className="m-3 w-full max-w-32 md:max-w-52 bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-slate-700 dark:border-gray-700">
            <div className='relative rounded-t-lg overflow-hidden'>
                <Link to={`/movie/${id}`}>
                    <img className="hover:scale-105 transition-transform duration-300 ease-in-out" src={image} alt="product" />
                </Link>
                <button onClick={handleFav} className='absolute top-0 left-0 cursor-pointer hover:scale-125 ease-in-out duration-200 text-zinc-200 text-2xl md:text-4xl'>
                    {!isFav ? <BookmarkAddIcon fontSize='inherit'  sx={{
                        stroke: "black",          
                        strokeWidth: 1,
                    }}
                    />
                    : <BookmarkRemoveIcon fontSize='inherit'  sx={{
                        stroke: "black",          
                        strokeWidth: 1,
                    }}
                    />
                    }
                </button>
            </div>
            <div className="px-2 md:px-5 mb-2 md:pb-5">
                <div className="flex items-center justify-between mt-2">
                    <span className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">{title}</span>
                </div>

                <div className="flex flex-col md:flex-row gap-2 mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        {renderStars()}
                    </div>
                    <span className="w-fit bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 md:ms-3">{ratings.toFixed(1)}</span>
                </div>
                <p className="mb-3 text-sm md:text-lg font-normal text-gray-700 dark:text-gray-400">{formatedReleaseDate}</p>   
            </div>
        </div>
  );
}
