import React from 'react'
import { useEffect } from 'react'
import TogglerMode from './TogglerMode'
const Contact = () => {
    
  return (
    <div  >
<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-0.5 ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/images/React-icon.svg.png" className="h-8" alt="Flowbite Logo" />
                <span className=" text-dark self-center text-2xl font-semibold whitespace-nowrap dark:text-white">JereDev</span>
            </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">Jeremias Gonzalez Front-end Dev™</a>. All Rights Reserved.</span>
    </div>
    <div className='fixed bottom-4 right-4  text-white font-bold py-2 px-4'>
    <TogglerMode/>
    </div>
</footer>


    </div>
  )
}

export default Contact