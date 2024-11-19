import Skeleton from '@mui/material/Skeleton';

export const CardSkeleton = () => {
  return (
    <div>
        <Skeleton variant='rounded' width={240} height={350}/>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        <div className='flex gap-2'>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={70} />
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={20} />
        </div>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={150} />
    </div>
  )
}
