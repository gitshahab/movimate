import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate} from 'react-router-dom';
import { useTheme } from "../context/ThemeContext";
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import { useFav } from '../context/FavContext';

export const Header = () => {
    const [ hidden, setHidden ] = useState(true);
    const [ scrollY, setScrollY ] = useState(0);
    const navigate = useNavigate();

    const { fav } = useFav();

    const { darkMode, setDarkMode } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    },[]);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const queryTerm = event.target.search.value;
        event.target.reset();
        setHidden(!hidden);
        return navigate(`/search?q=${queryTerm}`);
    }

    const activeClass = "text-base block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
    const inActiveClass = "text-base block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
  return (
    <header>
        <nav className={`bg-transparent ${scrollY > 50 ? 'dark:bg-gray-900 backdrop-blur-lg' : 'dark:bg-transparent'}  fixed top-0 left-0 right-0 z-50 shadow-sm`}>
            <div className="flex flex-wrap items-center justify-between mx-auto my-auto p-3 h-16">
            <Link to="/" className="flex flex-1 items-center space-x-3 rtl:space-x-reverse">
                <span className="self-center text-2xl font-bold font-serif whitespace-nowrap dark:text-red-500">MOVIMATE</span>
            </Link>
            <div id='moble-nav' className="flex flex-1 justify-end md:order-2">
                <div className="relative hidden md:block">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search icon</span>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" id="search-navbar" name="search" className={`block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg ${scrollY > 50 ? 'dark:bg-gray-700 bg-gray-50' : 'dark:bg-transparent  bg-transparent'} focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="Search..." autoComplete='false'/>
                    </form>
                    
                </div>
                {fav?.length > 0 && 
                <Link to="movie/favorite" className='relative flex items-center ml-2 text-gray-500 dark:text-gray-200 hover:scale-110 transition-transform duration-200'>
                    <BookmarksIcon />
                    <div className='absolute top-0 right-0 rounded-full px-1 py-0 text-xs bg-red-500 text-white'>
                        {fav?.length}
                    </div>
                </Link>}
                <button onClick={() => setDarkMode(!darkMode)} id="theme-toggle" data-tooltip-target="tooltip-toggle" type="button" className="mx-2 text-gray-500 inline-flex items-center justify-center dark:text-gray-200 hover:bg-gray-100 w-10 h-10 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                    {darkMode ? <svg id="theme-toggle-dark-icon"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
                    </svg> : <svg id="theme-toggle-light-icon"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
                    </svg> }
                </button>
                
                <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
                
                <div id="nav-links" className={`${hidden ? "hidden" : "" } items-center justify-between w-full md:flex md:w-auto md:order-1`} > 
                    <div className="relative mt-3 md:hidden">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <input type="text" id="search-navbar" name='search' className={`block bg-gray-50 dark:bg-gray-700 w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="Search..." autoComplete='false'/>
                        </form>
                        
                    </div>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-semibold font-serif border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <li>
                        <NavLink to="/" className={({isActive}) => isActive ? activeClass : inActiveClass } end onClick={() => setHidden(!hidden)}>Home</NavLink>
                        </li> 
                        <li>
                        <NavLink to="/movie/popular" className={({isActive}) => isActive ? activeClass : inActiveClass } onClick={() => setHidden(!hidden)}>Popular</NavLink>
                        </li>
                        <li>
                        <NavLink to="/movie/top_rated" className={({isActive}) => isActive ? activeClass : inActiveClass } onClick={() => setHidden(!hidden)}>Top Rated</NavLink>
                        </li>
                        <li>
                        <NavLink to="/movie/upcoming" className={({isActive}) => isActive ? activeClass : inActiveClass } onClick={() => setHidden(!hidden)}>Upcoming</NavLink>
                        </li> 
                    </ul>
                </div>
            </div>
        </nav>

    </header>
  );
}
