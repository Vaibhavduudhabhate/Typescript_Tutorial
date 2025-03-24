import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from './pages/Home';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';
import { useState } from 'react';
import { fetchSearchedMovies } from './Apis/Apis';
interface Movies {
  id: number;
  title: string;
  price: number;
  image: string;
  vote_average: string;
  poster_path: string;
}
function App() {
  const [searchMovies ,setSearchMovies] = useState<Movies[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
        const data = await fetchSearchedMovies(searchTerm);
        setSearchMovies(data);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  
  return (
    <Router>
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold"><NavLink to="/">MovieDB</NavLink></h1>
        <div className="flex gap-6 items-center">
          <ul className="flex gap-6 text-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded ${isActive ? "bg-white text-black" : "text-gray-300"}`
                }
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/top-rated"
                className={({ isActive }) =>
                  `px-3 py-2 rounded ${isActive ? "bg-white text-black" : "text-gray-300"}`
                }
              >
                Top Rated
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/upcoming"
                className={({ isActive }) =>
                  `px-3 py-2 rounded ${isActive ? "bg-white text-black" : "text-gray-300"}`
                }
              >
                Upcoming
              </NavLink>
            </li>
          </ul>

          {/* Search Bar */}
          <div className="flex items-center bg-white rounded">
            <input
              type="text"
              placeholder="Search"
              className="p-2 text-black outline-none rounded-l"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button className="bg-black text-white px-4 py-2 rounded-r">Search</button>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home movies={searchMovies} />} />
        <Route path="/top-rated" element={<TopRated movies={searchMovies} />} />
        <Route path="/upcoming" element={<Upcoming movies={searchMovies} />} />
      </Routes>
    </Router>
  );
}

export default App;