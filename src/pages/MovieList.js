import { Card, NextPage } from '../components';
import { useFetch } from '../hooks/useFetch';
import { useEffect } from 'react';
import { SkeletonPage } from './SkeletonPage';
import { Banner } from '../components/Banner';



export const MovieList = ({apiPath, pageNum, setPageNum, title}) => {
    const { data : Movies, loading, error } = useFetch({apiPath, page: pageNum});


    useEffect(() => {
        document.title = `${title}/Movimate`;
    });
    
    const handlePageChange = () => {
        setPageNum(pageNum + 1);  
    };

    if (error) {
        return (
            <div className='flex flex-col justify-center items-center h-screen p-4'>
                <h1 className='font-medium text-2xl text-gray-800 dark:text-gray-400'>Oops! The TMDB API is currently unavailable.</h1>
                <h3 className='font-medium text-xl text-gray-800 dark:text-gray-400'>Please try again later.</h3>
                <span className='text-xl text-gray-800 dark:text-gray-400 py-2'>Check out movi-o, based on OMDB API.<a className='text-blue-600' href="https://movi-o.netlify.app" target="_blank" rel="noopener noreferrer"> Visit movi-o</a></span>
            </div>
        )
        
    }

  return (
    <>
    <div>
        <Banner movieId={Movies.length ? Movies[6].id : null} />
    </div>

    <section className='max-w-7xl mx-auto py-7 pt-16'>
        <div className='flex justify-center flex-wrap'>
        { loading ? (
        <SkeletonPage/>
        ) : 
        (Movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
        )))}   
        </div>
    </section>
    {!loading && <section className='flex justify-center pb-10'>
        <NextPage onPageChange={handlePageChange}/>
    </section>}
    
    </>
  );
}
