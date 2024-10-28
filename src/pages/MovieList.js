import { Card, NextPage } from '../components';
import { useFetch } from '../hooks/useFetch';
import { PageNotFound } from './PageNotFound';
import LoadingImg from "../assets/loading.svg";
import ErrorImg from "../assets/network-error.svg";
import { useEffect } from 'react';



export const MovieList = ({apiPath, pageNum, setPageNum, title}) => {

    const { data : Movies, loading, error } = useFetch({apiPath, page: pageNum});

    useEffect(() => {
        document.title = `${title}/Movimate`;
    });

    const handlePageChange = () => {
        setPageNum(pageNum + 1);  
    };

    if (loading) {
        return <div><PageNotFound msg="Loading...." img={LoadingImg} /></div>
    }

    if (error) {
        return <div><PageNotFound msg={`Error: ${error}. Try Again!`} img={ErrorImg} /></div>
    }

  return (
    <main>
        <section className='max-w-7xl mx-auto py-7'>
            <div className='flex justify-center flex-wrap'>
                { Movies.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </div>
        </section>
        <section className='flex justify-center'>
            <NextPage onPageChange={handlePageChange}/>
        </section>
    </main>
  );
}
