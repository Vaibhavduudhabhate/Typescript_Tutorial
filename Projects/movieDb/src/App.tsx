import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { AiOutlineGlobal } from 'react-icons/ai';
import { RiContactsBook3Line } from 'react-icons/ri';
import Home from './pages/Home';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';
function App() {
  return (
    <Router>
      {/* <nav>
      <ul className="">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `flex flex-row gap-1 items-center px-4 py-2 rounded ${isActive ? "bg-green-300 text-black" : "text-gray-700 bg-gray-200"}`
            }
          >
            Home<IoIosHome />
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `flex flex-row gap-1 items-center px-4 py-2 rounded ${isActive ? "bg-green-300 text-black" : "text-gray-700 bg-gray-200"}`
            }
          >
            About<AiOutlineGlobal />
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `flex flex-row gap-1 items-center px-4 py-2 rounded ${isActive ? "bg-green-300 text-black" : "text-gray-700 bg-gray-200"}`
            }
          >
            Contact<RiContactsBook3Line />
          </NavLink>
        </li>
      </ul>
    </nav> */}

      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">MovieDB</h1>
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
            />
            <button className="bg-black text-white px-4 py-2 rounded-r">Search</button>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Routes>
    </Router>
  );
}

export default App;