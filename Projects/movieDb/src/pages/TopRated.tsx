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

const About = ({ movies }: { movies: Movies[] }) => {
  const [moviesmain, setMovies] = useState<Movies[]>([])
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
    <div className="flex ml-auto mr-auto items-center justify-center ">
      <div className="grid mt-[60px] max-w-7xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 flex-wrap justify-center w-full p-[30px]">
        {/* {movies.map((movies) => (
            <MoviesCard key={movies.id} Movie={movies} />
          ))} */}
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <MoviesCard key={movie.id} Movie={movie} />
          ))
        ) :
          moviesmain && moviesmain.length > 0 ? (
            moviesmain.map((movie) => (
              <MoviesCard key={movie.id} Movie={movie} />
            ))
          ) : (
            <p className="text-center text-gray-500">No movies found.</p>

          )}
      </div>
    </div>
  )
}

export default About