import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";
import PageNotFoundImg  from "../assets/404-page-not-found.svg";
import { useState } from "react";
import { Favorite } from "../pages/Favorite";

export const AllRoutes = () => {
  const [nowPlayingPage, setNowPlayingPage] = useState(1);
  const [popularPage, setPopularPage] = useState(1);
  const [topRatedPage, setTopRatedPage] = useState(1);
  const [upcomingPage, setUpcomingPage] = useState(1);
  return (
    <div className="dark:bg-slate-800">
        <Routes>
            <Route path="/" element={<MovieList apiPath="movie/now_playing" pageNum={nowPlayingPage} setPageNum={setNowPlayingPage} title="Home"/>} />
            <Route path="movie/:id" element={<MovieDetail />} />
            <Route path="movie/popular" element={<MovieList apiPath="movie/popular" pageNum={popularPage} setPageNum={setPopularPage} title="Popular"/>} />
            <Route path="movie/top_rated" element={<MovieList apiPath="movie/top_rated" pageNum={topRatedPage} setPageNum={setTopRatedPage} title="Top Rated"/>} />
            <Route path="movie/upcoming" element={<MovieList apiPath="movie/upcoming" pageNum={upcomingPage} setPageNum={setUpcomingPage} title="Upcoming"/>} />
            <Route path="movie/favorite" element={<Favorite/>} />
            <Route path="search" element={<Search apiPath="search/movie"/>} />
            <Route path="*" element={<PageNotFound msg="404, Oops Page Not Found" img={PageNotFoundImg} />} />
        </Routes>
    </div>
  )
}
