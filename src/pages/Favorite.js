import { useEffect } from 'react';
import { Card } from '../components/Card';
import { useFav } from '../context/FavContext';

export const Favorite = () => {
    const { fav } = useFav();

    useEffect(() => {
      document.title = "Favorite/Movimate";
    } ,[]);
  return (
    <section className='min-h-screen max-w-7xl mx-auto py-7 pt-20'>
      {fav.length > 0 ? 
        <h1 className="text-lg md:text-2xl text-center font-bold dark:text-white font-mono">Your favorite movies</h1> :
        <h1 className="text-lg md:text-2xl text-center font-bold dark:text-white font-mono">You have not add favorite yet!</h1> }
      
        <div className='flex justify-center flex-wrap pt-2'>
        {(fav.map((movie) => (
            <Card key={movie.id} movie={movie} />
        )))}   
        </div>
    </section>
  )
}
