import React from 'react';
import { Link } from "react-router-dom";
import moment from "moment";
import defaultImage from "../assets/default-movie-background.jpg"

export const Card = ({movie}) => {
    const {id, title, release_date, poster_path, vote_average} = movie;
    const image = poster_path ?`https://image.tmdb.org/t/p/w500/${poster_path}` : defaultImage ;
    const date = new Date(release_date);
    const formatedReleaseDate = moment(date).format('MMMM D, YYYY'); 

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
                <svg className={`w-4 h-4 ${ratings >= i ? "text-yellow-300" : "text-slate-300"}`}
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
        <div className="m-3 w-full max-w-60 bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-slate-700 dark:border-gray-700">
            <Link to={`/movie/${id}`}>
                <img className="rounded-t-lg" src={image} alt="product" />
            </Link>
            <div className="px-5 pb-5">
                <div className="flex items-center justify-between mt-2">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">{title}</span>
                </div>

                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        {renderStars()}
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{ratings.toFixed(1)}</span>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{formatedReleaseDate}</p>   
            </div>
        </div>
  );
}
