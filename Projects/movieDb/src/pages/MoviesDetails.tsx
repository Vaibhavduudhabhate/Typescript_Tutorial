import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ImgDomain } from "../../config/app.config";
import { fetchMoviesCastDetails, fetchMoviesDetails } from "../Apis/Apis";

interface Movie {
    id: number;
    title: string;
    vote_average: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    runtime: number;
    release_date: string;
    genres: { name: string }[];
}

interface MovieCast {
    cast: { id: number; name: string; character: string; profile_path: string }[];
}

const MovieDetails = () => {
    const { id } = useParams<{ id: any }>();
    const [movie, setMovie] = useState<Movie | null>(null);
    const [moviecast, setMovieCast] = useState<MovieCast | null>(null);

    useEffect(() => {
        const getMovie = async () => {
            try {
                const data = await fetchMoviesDetails(id);
                setMovie(data);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };

        const getMovieCast = async () => {
            try {
                const data = await fetchMoviesCastDetails(id);
                setMovieCast(data);
            } catch (error) {
                console.error("Error fetching movie cast details:", error);
            }
        };

        getMovie();
        getMovieCast();
    }, [id]);

    if (!movie) return <p>Loading...</p>;

    return (
        <div className="bg-gray-900 text-white min-h-screen">
    {/* Movie Header Section */}
    <div className="relative flex flex-col md:flex-row max-w-6xl mx-auto h-[400px] md:h-[500px]">
        {/* Left Side: Movie Details */}
        <div className="w-full md:w-1/2 flex items-end p-6 bg-black">
            <div className="flex items-center gap-6">
                {/* Movie Poster */}
                <img
                    className="w-40 md:w-52 rounded-lg shadow-lg"
                    src={`${ImgDomain}/${movie.poster_path}`}
                    alt={movie.title}
                />

                {/* Movie Info */}
                <div>
                    <h1 className="text-3xl font-bold">{movie.title}</h1>
                    <p className="text-lg text-blue-400">Rating: {movie.vote_average}</p>
                    <p className="text-gray-300">
                        {movie.runtime} min • {movie.genres.map((g) => g.name).join(", ")}
                    </p>
                    <p className="text-gray-300">Release Date: {new Date(movie.release_date).toDateString()}</p>
                </div>
            </div>
        </div>

        {/* Right Side: Background Image */}
        <div
            className="w-full md:w-1/2 h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${ImgDomain}/${movie.backdrop_path})` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 md:left-1/2 bg-black opacity-50"></div>
        </div>
    </div>

    {/* Overview Section */}
    <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-xl font-bold mb-2">Overview</h2>
        <p className="text-gray-300">{movie.overview}</p>
    </div>

    {/* Cast Section */}
    <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Cast</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {moviecast?.cast
                ?.filter((actor) => actor.profile_path)
                .map((actor) => (
                    <li key={actor.id} className="text-center">
                        <img
                            className="w-28 h-28 md:w-32 md:h-32 object-cover mx-auto rounded-full border border-gray-700 shadow-md"
                            src={`${ImgDomain}/${actor.profile_path}`}
                            alt={actor.name}
                        />
                        <p className="font-semibold mt-2">{actor.name}</p>
                        <p className="text-sm text-gray-400">{actor.character}</p>
                    </li>
                ))}
        </ul>
    </div>
</div>
    );
};

export default MovieDetails;



// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { ImgDomain } from "../../config/app.config";
// import { fetchMoviesCastDetails, fetchMoviesDetails } from "../Apis/Apis";
// interface Movie {
//     id: number;
//     title: string;
//     vote_average: string;
//     poster_path: string;
//     backdrop_path: string;
//     overview: string;
// }
// interface MovieCast {
//     cast: { id: number; name: string; character: string; profile_path: string }[];
//     crew: object[];
// }

// const MovieDetails = () => {
//     const { id } = useParams<{ id: any }>();
//     const [movie, setMovie] = useState<Movie | null>(null);
//     const [moviecast, setMovieCast] = useState<MovieCast | null>(null)

//     useEffect(() => {
//         const getMovie = async () => {
//             try {
//                 const data = await fetchMoviesDetails(id);
//                 console.log(data)
//                 setMovie(data);
//             } catch (error) {
//                 console.error("Error fetching movie details:", error);
//             }
//         };

//         const getMovieCast = async () => {
//             try {
//                 const data = await fetchMoviesCastDetails(id);
//                 // console.log(data)
//                 setMovieCast(data);
//             } catch (error) {
//                 console.error("Error fetching movie details:", error);
//             }
//         }

//         getMovie();
//         getMovieCast();
//     }, [id]);

//     if (!movie) return <p>Loading...</p>;

//     return (
//         <>
//             <div className="max-w-3xl mx-auto p-4">
//                 <img className="w-full h-auto" src={`${ImgDomain}/${movie.poster_path}`} alt={movie.title} />
//                 <img className="w-full h-auto" src={`${ImgDomain}/${movie.backdrop_path}`} alt={movie.title} />
//                 <h1 className="text-2xl font-bold mt-4">{movie.title}</h1>
//                 <p className="text-gray-700 mt-2">Rating: {movie.vote_average}</p>
//                 <p className="mt-4">{movie.overview}</p>
//             </div>
//             <div>
//                 <h2 className="text-xl font-bold mt-6">Cast:</h2>
//                 <ul className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-4">
//                     {moviecast?.cast
//                         ?.filter((actor) => actor.profile_path) // Removes actors with no image
//                         .map((actor) => (
//                             <li key={actor.id} className="text-center">
//                                 <img
//                                     className="w-full h-full object-cover mx-auto rounded"
//                                     src={`${ImgDomain}/${actor.profile_path}`}
//                                     alt={actor.name}
//                                 />
//                                 <p className="font-semibold">{actor.name}</p>
//                                 <p className="text-sm text-gray-500">{actor.character}</p>
//                             </li>
//                         ))}
//                 </ul>
//             </div>
//         </>
//     );
// };

// export default MovieDetails;
