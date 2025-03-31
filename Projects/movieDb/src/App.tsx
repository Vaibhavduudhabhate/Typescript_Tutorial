import './App.css';
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import Home from './pages/Home';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';
import { useState } from 'react';
import { fetchSearchedMovies } from './Apis/Apis';
import MovieDetails from './pages/MoviesDetails';
import { Menu, X } from "lucide-react"; 
import ThemeToggle from './Components/LightDark';

interface Movies {
  id: number;
  title: string;
  price: number;
  image: string;
  vote_average: string;
  poster_path: string;
}
function App() {
  const navigate = useNavigate();
  const [searchMovies ,setSearchMovies] = useState<Movies[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSearch = async () => {
    try {
        const data = await fetchSearchedMovies(searchTerm);
        setSearchMovies(data);
        navigate('/')
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  
  return (
    <>

<nav className="bg-gray-800 text-white p-4 flex justify-between items-center relative">
      {/* Logo */}
      <h1 className="text-2xl font-bold">
        <NavLink to="/">MovieDB</NavLink>
      </h1>
      

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-6 items-center">
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
          <button className="cursor-pointer bg-black text-white px-4 py-2 rounded-r" onClick={handleSearch}>
            Search
          </button>
        </div>
        <ThemeToggle />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu (Sliding from Right) */}
      <div
        className={`fixed top-0 right-0 h-full w-[90%] bg-gray-900 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-50`}
      >
        {/* Close Button */}
        <button className="absolute top-5 right-5 text-white" onClick={() => setIsOpen(false)}>
          <X size={28} />
        </button>

        {/* Mobile Nav Links */}
        <ul className="flex flex-col gap-6 text-lg p-8 mt-12">
        <ThemeToggle />
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 rounded ${isActive ? "bg-white text-black" : "text-gray-300"}`
              }
              onClick={() => setIsOpen(false)}
            >
              Popular
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/top-rated"
              className={({ isActive }) =>
                `block px-3 py-2 rounded ${isActive ? "bg-white text-black" : "text-gray-300"}`
              }
              onClick={() => setIsOpen(false)}
            >
              Top Rated
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/upcoming"
              className={({ isActive }) =>
                `block px-3 py-2 rounded ${isActive ? "bg-white text-black" : "text-gray-300"}`
              }
              onClick={() => setIsOpen(false)}
            >
              Upcoming
            </NavLink>
          </li>

          {/* Search Bar */}
          <div className="flex items-center bg-white rounded">
            <input
              type="text"
              placeholder="Search"
              className="p-2 text-black outline-none w-full rounded-l"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button
              className="bg-black cursor-pointer text-white px-4 py-2 rounded-r"
              onClick={() => {
                handleSearch();
                setIsOpen(false);
              }}
            >
              Search
            </button>
          </div>
        </ul>
      </div>
    </nav>

      
      <Routes>
        <Route path="/" element={<Home movies={searchMovies} />} />
        <Route path="/top-rated" element={<TopRated movies={searchMovies} />} />
        <Route path="/upcoming" element={<Upcoming movies={searchMovies} />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;