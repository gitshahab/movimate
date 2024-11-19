import {CardSkeleton} from '../components';

export const SkeletonPage = () => {
    const count = 4;
  return (
    <div className='flex flex-col md:flex-row gap-6 mt-4 max-w-screen'>
        {Array.from({length: count}).map((_,index) => {
            return <CardSkeleton key={index} />
        })}
    </div>
  )
}
