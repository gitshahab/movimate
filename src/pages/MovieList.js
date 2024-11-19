import { Card, NextPage } from '../components';
import { useFetch } from '../hooks/useFetch';
import { PageNotFound } from './PageNotFound';
import ErrorImg from "../assets/network-error.svg";
import { useEffect } from 'react';
import { SkeletonPage } from './SkeletonPage';



export const MovieList = ({apiPath, pageNum, setPageNum, title}) => {
    const { data : Movies, loading, error } = useFetch({apiPath, page: pageNum});

    useEffect(() => {
        document.title = `${title}/Movimate`;
    });

    const handlePageChange = () => {
        setPageNum(pageNum + 1);  
    };

    if (error) {
        return <div><PageNotFound msg={`Error: ${error}`} img={ErrorImg} /></div>
    }

  return (
    <main>
        <section className='max-w-7xl mx-auto py-7'>
            <div className='flex justify-center flex-wrap'>
                { loading ? (
                    <SkeletonPage/>
                ) : (
                    Movies.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                    ))
                )}
            </div>
        </section>
        <section className='flex justify-center'>
            {!loading && <NextPage onPageChange={handlePageChange}/>}
        </section>
    </main>
  );
}
