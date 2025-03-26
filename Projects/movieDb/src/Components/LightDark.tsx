import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 cursor-pointer bg-gray-200 dark:bg-gray-800 rounded-full transition-all w-[40px] md:w-[40px] sm:w-[40px]"
    >
      {theme === "dark" ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-900" />}
    </button>
  );
};

export default ThemeToggle;