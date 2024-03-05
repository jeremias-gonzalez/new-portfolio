"use client";

import TogglerMode from './TogglerMode'
import { useEffect, useContext } from "react";
const  NewNavbar = () => {
  useEffect(() => {
    
    const sidebar = document.getElementById('sidebar');
    const openSidebarButton = document.getElementById('open-sidebar');

    const handleSidebarToggle = (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('-translate-x-full');
        console.log('Sidebar Toggled');
    };

    const handleDocumentClick = (e) => {
        if (sidebar && openSidebarButton) {
            // Verifica si el clic está fuera del sidebar y del botón
            if (!sidebar.contains(e.target) && !openSidebarButton.contains(e.target)) {
                sidebar.classList.add('-translate-x-full');
                console.log('Sidebar Closed');
            }
        }
    };

    if (openSidebarButton) {
        openSidebarButton.addEventListener('click', handleSidebarToggle);
    }

    // Close the sidebar when clicking outside of it
    document.addEventListener('click', handleDocumentClick);

    return () => {
        // Limpieza al desmontar el componente
        if (openSidebarButton) {
            openSidebarButton.removeEventListener('click', handleSidebarToggle);
        }
        document.removeEventListener('click', handleDocumentClick);
    };
}, []);
  return (
    <div>
        
     
        <div className="dark:absolute
       absolute dark:text-white
       bg-white
       dark:bg-gray-800
         z-index-10000  rounded-lg
          text-white w-56 min-h-screen 
          transition-transform transform -translate-x-full 
          ease-in-out duration-500 "
            id="sidebar" style={{ zIndex: 1000 }}>
           
            <div className="p-5  ">
            <div className='flex '>
                        <h1 class="text-xl dark:text-white text-dark font-semibold">JereDev</h1>
                        <img src="./images/react.svg" className='w-7 h-6 mx-2 m-auto' alt="" />
                        </div>
                        
                <ul className="m-16 mt-52">
                    <li className="mb-2"><a href="#" class="block  size-10 font-bold text-xl dark:text-white dark:hover:text-indigo-400 text-dark hover:text-indigo-400">Home</a></li>
                    <li className="mb-2"><a href="#" class="block size-10 font-bold text-xl dark:text-white dark:hover:text-indigo-400 text-dark hover:text-indigo-400">About</a></li>
                    <li className="mb-2"><a href="#" class="block size-10 font-bold text-xl dark:text-white dark:hover:text-indigo-400 text-dark hover:text-indigo-400">Services</a></li>
                    <li className="mb-2"><a href="#" class="block size-10 font-bold text-xl dark:text-white dark:hover:text-indigo-400 text-dark hover:text-indigo-400">Contact</a></li>
                </ul>
            </div>
        </div>


   
       
            <div class="flex-1 flex bg-white dark:bg-dark flex-col overflow-hidden m-2 rounded-lg ">
                <div class="container ">
                    <div class="flex justify-between items-center py-4 px-2">
                      <div className='flex '>
                        <h1 class="text-xl  text-black font-semibold dark:text-white  dark:font-semibold">JereDev</h1>
                        <img src="/images/React-icon.svg.png" className='w-7 h-6 mx-2 m-auto' alt="" />
                        </div>
                        
                        <TogglerMode/>
                        <button class="text-gray-500 hover:text-gray-600" id="open-sidebar">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    </div>
                </div>
               
            </div>
            
            
        </div>

   
  )
}
export default NewNavbar