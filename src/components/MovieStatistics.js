import React from 'react'

export const MovieStatistics = ({movie}) => {
  return (
<div className="px-2 pt-14 md:p-8" id="statistics" role="tabpanel" aria-labelledby="statistics-tab">
        <dl className="grid  grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
            {movie?.release_date !== null && (
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold">{movie?.release_date}</dt>
                <dd className="md:text-xl text-gray-500 dark:text-gray-400">Release</dd>
              </div>
            )}
            {movie?.vote_average > 0 && (
              <div className="flex flex-col">
                <dt className="mb-2 text-xl md:text-3xl flex items-center font-extrabold">
                  <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>
                  {movie?.vote_average}
                </dt>
                <dd className="md:text-xl text-gray-500 dark:text-gray-400">Ratings with {movie?.vote_count} reviews</dd>
            </div>)}
            {movie?.runtime > 0 &&
            (<div className="flex flex-col">
                <dt className="mb-2 text-xl md:text-3xl font-extrabold">{movie?.runtime} mins</dt>
                <dd className="md:text-xl text-gray-500 dark:text-gray-400">Runtime</dd>
            </div>)}
            {movie?.budget > 0 && 
            (<div className="flex flex-col">
                <dt className="mb-2 text-xl md:text-3xl font-extrabold">{`$${movie?.budget}`}</dt>
                <dd className="md:text-xl text-gray-500 dark:text-gray-400">Budget</dd>
            </div>)}
            {movie?.revenue > 0 && 
            (<div className="flex flex-col">
                <dt className="mb-2 text-xl md:text-3xl font-extrabold">{`$${movie?.revenue}`}</dt>
                <dd className="md:text-xl text-gray-500 dark:text-gray-400">Revenue</dd>
            </div>)}
        </dl>
    </div>
  )
}
