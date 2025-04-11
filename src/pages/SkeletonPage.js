import {CardSkeleton} from '../components';

export const SkeletonPage = () => {
    const count = 5;
  return (
    <div className='grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-8 mt-4 mx-auto'>
        {Array.from({length: count}).map((_,index) => {
            return <CardSkeleton key={index} />
        })}
    </div>
  )
}
