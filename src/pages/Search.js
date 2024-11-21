import { useSearchParams } from 'react-router-dom';
import { Card } from '../components';
import { useFetch } from '../hooks/useFetch';
import { PageNotFound } from './PageNotFound';
import ResultNotFound from "../assets/result-not-found.png";
import ErrorImg from "../assets/network-error.svg";
import { useEffect } from 'react';
import { SkeletonPage } from './SkeletonPage';

export const Search = ({apiPath}) => {
    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get('q');

    const { data : movies, loading, error } = useFetch({apiPath, queryTerm});

    useEffect(() => {
        document.title = `Search Result for ${queryTerm}/Movimate`;
    });

    if (error) {
        return <div><PageNotFound msg={`Error: ${error}`} img={ErrorImg} /></div>
    }

  return (
    <main>
        <section className='max-w-7xl mx-auto py-7'>
            <div className='flex justify-center flex-wrap pt-10'>
                { loading ? (<SkeletonPage/>) : ( movies.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                ))
                )}
            </div>
        </section>
        <section className='py-2 flex justify-center text-2xl text-gray-700 font-bold my-7 dark:text-white'>
            <span>{movies.length === 0 && (
                <div><PageNotFound img={ResultNotFound} msg={`No Result Found for '${queryTerm}'`} /></div>)}
            </span>
        </section>
    </main>
  );
}
