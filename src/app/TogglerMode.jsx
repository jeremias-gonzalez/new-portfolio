"use client";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import {BsSunFill} from "react-icons/bs"


const TogglerMode = () => {
  const [theme, setTheme] = useState(() => {
    // Verifica si estamos en un entorno de navegador antes de acceder a window
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    // Por defecto, devuelve "light" si no se puede determinar el tema
    return "light";
  });

  // useEffect para manejar cambios en el tema oscuro
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (theme === "dark") {
        document.querySelector("html").classList.add("dark");
      } else {
        document.querySelector("html").classList.remove("dark");
      }
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
  
    <div className="relative  w-16 h-8 flex items-center dark:bg-gray-900 bg-teal-50 cursor-pointer transform transition-transform duration-1000 rounded-full p-1" onClick={handleChangeTheme}>
      <FaMoon className="text-white" size={18} />
      <div
        className="absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md "
        style={{ right: theme === 'dark' ? '2px' : 'auto', left: theme === 'light' ? '2px' : 'auto' }}
      ></div>
      <BsSunFill className="ml-auto text-yellow-400 transition-all  duration-200" size={18} />
    </div>
  );
};

export default TogglerMode;
