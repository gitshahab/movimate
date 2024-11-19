import Skeleton from '@mui/material/Skeleton';

export const MovDetailSkeleton = () => {
  return (
    <div className='flex-col lg:pt-10'>
        <div className='flex flex-col lg:flex-row justify-center gap-4 p-10'>
            <div>
                <Skeleton variant='rounded'  sx={{height: {xs:400 ,lg:300}, width: {xs:330,lg:220}}} />
            </div>
            <div className='pl-6 lg:pl-none'>
                <Skeleton variant="text" sx={{ fontSize: '3rem', width: {xs:280, lg:200} }}  className='pt-4'/>
                <Skeleton variant="text" sx={{ fontSize: '1rem', width: {xs:250, lg:150} }}  className='pt-4'/>
                <Skeleton variant="text" sx={{ fontSize: '2rem', width: {xs:280, lg:200} }}  className='pt-4'/>
                <Skeleton variant="text" sx={{ fontSize: '1rem', width: {xs:100, lg:100} }}  className='pt-4'/>
                <Skeleton variant="text" sx={{ fontSize: '1rem', width: {xs:280, lg:200} }}  className='pt-4'/>
            </div>
        </div>
        <div className='p-10 lg:pl-20'>
            <Skeleton variant="text" sx={{ fontSize: '2rem', width: { xs: 50, lg: 70 } }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem', width: { xs: 330, lg: 1000 } }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem', width: { xs: 330, lg: 1000 } }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem', width: { xs: 330, lg: 1000 } }} />
        </div>
    </div>
  )
}
