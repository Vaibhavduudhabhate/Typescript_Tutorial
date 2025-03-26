import React from "react";
import { ImgDomain } from "../../config/app.config";
import { useNavigate } from "react-router-dom";

interface Movies {
    id: number;
    title: string;
    price: number;
    image: string;
    vote_average: string;
    poster_path: string,
}

interface MovieCardProps {
    Movie: Movies;
}

const MoviesCard: React.FC<MovieCardProps> = ({ Movie }) => {
  const navigate = useNavigate();
    return (
            Movie.poster_path === null ? null : (
            <div className="shadow-xl cursor-pointer h-fit bg-gray-100 hover:bg-base-200 w-full " onClick={() => navigate(`/movie/${Movie.id}`)}
            >
              <div className="h-full bg-cover bg-no-repeat bg-center">
                <img
                  className="object-cover w-full h-full"
                  src={`${ImgDomain}${Movie.poster_path}`}
                  alt={Movie.title}
                />
              </div>
          
              <div className="p-4">
                <h2 className="text-lg font-bold">{Movie.title}</h2>
                <h2 className="text-md text-gray-700">Rating: {Movie.vote_average}</h2>
              </div>
            </div>
          )
    );
};

export default MoviesCard;