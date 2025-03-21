import { useEffect, useState } from "react"
import { fetchTopRatedMovies } from "../Apis/Apis"
import MoviesCard from "../Components/Card";

interface Movies {
  id: number;
  title: string;
  price: number;
  image: string;
  vote_average: string;
  poster_path: string;
}

const About = () => {
  const [movies, setMovies] = useState<Movies[]>([])
    useEffect(() => {
      const getMovies = async () => {
        try {
          const data = await fetchTopRatedMovies();
          setMovies(data);
          console.log(data)
        } catch (error) {
          console.error("Error loading products:", error);
        }
      };
  
      getMovies();
    }, []);
    return (
      <div className="max-w-7xl flex ml-auto mr-auto items-center justify-center ">
        <div className="grid grid-cols-3  gap-4 flex-wrap justify-center w-full">
          {movies.map((movies) => (
            <MoviesCard key={movies.id} Movie={movies} />
          ))}
        </div>
      </div>
    )
}

export default About