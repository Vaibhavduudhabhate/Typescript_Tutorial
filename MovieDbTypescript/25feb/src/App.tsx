import './App.css';
import { BrowserRouter as Router, Routes, Route ,NavLink} from "react-router-dom";
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import Contact from './Pages/Contact';
import { IoIosHome  } from "react-icons/io";
import { AiOutlineGlobal } from 'react-icons/ai';
import { RiContactsBook3Line } from 'react-icons/ri';
function App() {


  return (
    <Router>
    <nav>
  <ul className="flex gap-[20px] justify-center items-center py-[30px] text-[20px]  bg-linear-to-t from-blue-800 to-indigo-500">
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
</nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  );
}

export default App;