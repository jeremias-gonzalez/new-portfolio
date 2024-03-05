"use client";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import {BsSunFill} from "react-icons/bs"


const TogglerMode = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="relative  w-16 h-8 flex items-center dark:bg-gray-900 bg-teal-50 cursor-pointer rounded-full p-1" onClick={handleChangeTheme}>
      <FaMoon className="text-white" size={18} />
      <div
        className="absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
        style={{ right: theme === 'dark' ? '2px' : 'auto', left: theme === 'light' ? '2px' : 'auto' }}
      ></div>
      <BsSunFill className="ml-auto text-yellow-400" size={18} />
    </div>
  );
};

export default TogglerMode;
