import {api_key} from "../../config/app.config"
export const fetchPopularMovies = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`);
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
      const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`);
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
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`);
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
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${MovieName}&page=1`);
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


