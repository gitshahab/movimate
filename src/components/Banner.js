import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import BannerImg from "../assets/Movie Banner.png"
import { useDetailFetch } from '../hooks/useDetailFetch';
import Skeleton from '@mui/material/Skeleton';
import { useTheme } from '../context/ThemeContext';
import { Link, useParams } from 'react-router-dom';
import { CastCards } from './CastCards';
import { MovieStatistics } from './MovieStatistics';
import { PageNotFound } from '../pages';
import ErrorImg from "../assets/network-error.svg"


export const Banner = ({movieId}) => {
  const { movie,cast, loading, error } = useDetailFetch(movieId);
  const params = useParams();

  const { darkMode } = useTheme();
  
  if (error) {
    return <div><PageNotFound msg={`Error: ${error}`} img={ErrorImg} /></div>
  }
  return (
    <>
    {loading ? (
        <Skeleton variant="rectangular" height={500} width="100%">
          <div className='h-96 md:h-0' style={{ paddingTop: '35%' }} />
        </Skeleton>
      ) : 
    (<div className='relative w-full h-[70vh] z-1'>
        <img className='h-full w-full object-cover' src={movie?.backdrop_path 
            ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` 
            : BannerImg } alt={movie?.title}/>  
        
        <div className={`absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t ${darkMode ? "from-slate-800" : "from-white"}  to-transparent`}></div>

        <div className='absolute top-1/4 mx-5 transform -traslate-y-1/2 text-white'>
            <h1 className='text-3xl font-bold'>{movie?.title}</h1>
            <h3 className='text-2xl mt-2'>{movie?.genres?.map(genre => genre.name).join(", ")}</h3>
            <p className='mt-2 max-w-lg font-sans'>{movie?.overview}</p>
            <div className="mt-4 flex gap-4 ">
                <a href={`https://www.imdb.com/title/${movie?.imdb_id}/videogallery/`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1 bg-red-600 px-4 py-1 rounded text-white font-semibold hover:bg-red-700">
                        <PlayArrowIcon /> Teaser
                </a>
                {params.id !== movieId &&
                  <Link to={`/movie/${movieId}`}>
                    <button className="flex items-center gap-1 bg-slate-200 px-4 py-1 rounded text-black font-semibold hover:bg-slate-300"><InfoIcon/> More Info</button>
                  </Link>
                } 
            </div>
        </div>
    </div> )}
    { (params.id === movieId && loading) ? (
      <>
      <Skeleton variant="text" sx={{ fontSize: '7rem' }} />
      <Skeleton variant="rectangular" width="100%" height={200} />
      </>
    ) : (
      <>
      {params.id === movieId && (
        <div className='py-5'>
        <MovieStatistics movie={movie}/>
        </div>
      )}

      {params.id === movieId && (
        <div className='pb-14'>
          <h1 className="mb-2 text-3xl font-bold dark:text-white mx-5 font-mono">Meet the cast</h1>
          <CastCards cast={cast}/>
        </div>
      )} 
    </>
    )}
    </>
  )
}
