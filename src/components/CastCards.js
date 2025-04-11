import { useRef } from "react";
import { IconButton } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import DefaultBG from "../assets/default-movie-background.jpg"

export const CastCards = ({cast}) => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if(scrollRef.current){
          scrollRef.current.scrollBy({left: -500, behavior: "smooth"});
        }
    }
    const scrollRight = () => {
        if(scrollRef.current){
          scrollRef.current.scrollBy({left: 500, behavior: "smooth"});
        }
    }
  return (
    <div className="relative group mt-6 mx-5">

      <IconButton
        onClick={scrollLeft}
        className="z-20 !absolute left-0 top-1/2 -translate-y-1/2 !bg-black/50 !text-white !opacity-0 group-hover:!opacity-100  transition-opacity duration-300"
      >
        <ArrowBackIosNew fontSize="large" />
      </IconButton>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
      >
      {cast.map((actor) => (
        <div key={actor.id} className="relative group/card min-w-44 md:min-w-52  overflow-hidden z-10">
          <img
            className="w-44 md:w-52 object-cover transition-transform duration-300 ease-in-out group-hover/card:scale-105"
            src={actor?.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : DefaultBG}
            alt={actor.name}
          />
          <div className="absolute bottom-0 left-0 right-0 text-white px-3 py-3  opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 h-20 bg-gradient-to-t from-black to-transparent">
            <span className="text-lg font-semibold leading-tight">
              {actor.name}
            </span>
            <br />
            <span className="text-sm italic text-stone-200">
              {actor.character}
            </span>
          </div>
        </div>
      ))}
      </div>
      <IconButton
        onClick={scrollRight}
        className="z-20 !absolute right-0 top-1/2 -translate-y-1/2 !bg-black/50 !text-white !opacity-0 group-hover:!opacity-100 transition-opacity duration-300"
      >
        <ArrowForwardIos fontSize="large" />
      </IconButton>
    </div>
  );
}
