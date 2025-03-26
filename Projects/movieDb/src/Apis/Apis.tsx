import {api_key, api_url} from "../../config/app.config"
  export const fetchPopularMovies = async () => {
    try {
      const response = await fetch(`${api_url}/3/movie/popular?api_key=${api_key}&language=en-US&page=1`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      return data.results; 
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; 
    }
  };

  export const fetchUpcomingMovies = async () => {
    try {
      const response = await fetch(`${api_url}/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      return data.results; 
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; 
    }
  };

  export const fetchTopRatedMovies = async () => {
    try {
      const response = await fetch(`${api_url}/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      return data.results; 
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; 
    }
  };

  export const fetchSearchedMovies = async (MovieName :string) => {
    try {
      const response = await fetch(`${api_url}/3/search/movie?api_key=${api_key}&language=en-US&query=${MovieName}&page=1`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      return data.results; 
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; 
    }
  };

  export const fetchMoviesDetails = async (movieId :string ) => {
    try {
      const response = await fetch(`${api_url}/3/movie/${movieId}?api_key=${api_key}&language=en-US`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      // console.log(data)
      return data; 
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; 
    }
  };

  export const fetchMoviesCastDetails = async (movieId :string ) => {
    try {
      const response = await fetch(`${api_url}/3/movie/${movieId}/credits?api_key=${api_key}&language=en-US`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data)
      return data; 
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; 
    }
  };

