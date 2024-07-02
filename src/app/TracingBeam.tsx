"use client";
import React from "react";

import Image from "next/image";


import { motion } from "framer-motion";
import { LinkPreview } from "../components/ui/link-preview";
import { TracingBeam } from "../components/ui/tracing-beam";

export function TracingBeamDemo() {
  return (
   
    <TracingBeam className="
    px-6 dark:bg-dark bg-white
    
 ">
    
      <div className="
       max-w-2xl mx-auto px-10 antialiased pt-4 relative animate-fade-left animate-duration-[1500ms] animate-delay-[400ms] animate-ease-in-out animate-alternate">
     
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="text-white bg-dark dark:bg-white dark:text-dark dark:font-bold  rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            {/* <p className={twMerge(calsans.className, "text-xl mb-4")}>
              {item.title}
            </p> */}

            <div className="text-sm text-dark font-black dark:text-white dark:font-bold prose prose-sm dark:prose-invert">
           
              
              {item.description}
            </div>
          </div>
        ))}
     
      </div>
      
    </TracingBeam>

  );
}

const dummyContent = [
  {
   
    description: (
      <>
      <img src="./images/fotoface.png" className="rounded-3xl" alt="" />
        <p className="m-5">
        ¡Hola! Soy Jeremias!, un apasionado por el Desarrollo Front-end 
         con una fascinación por dar vida a mis aplicaciones web. Desde temprana edad, he estado inmerso en este mundo y siempre me pregunte, <br /> ¿Como puedo dar una solucion a esta aplicacion en particular?,¿Porque tiene tantos errores?
         {/* . Mi objetivo es hacer crecer tu marca personal/empresa. */}
        </p>
       
       
      </>
    ),
    badge: "< Sobre mi />"
    
  },
  {
    
    description: (
      <>
      <img className="bg-white rounded-xl w-100 h-150" src="./images/velocisite.png" alt="" />
        <p  className="m-5">
        Con 2 años de experiencia en Desarrollo y Diseño Front-End, he tenido la oportunidad de fundar
          <LinkPreview
          url="https://velocisite.com.ar/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          <span className="text-green-400 mx-1">Velociste</span>
        </LinkPreview>{""}.
        Una startup en la que adquirí nuevas habilidades como lider , en gestion de tiempo , solucionando problemas,etc.
         
        </p>
     
      </>
    ),
    badge: "< Experiencia />",
   
  },
  {
    
    description: (
      
      <>
       <img src="./images/cursos.png" className="rounded-2xl" alt="" />
        <p className="m-5">
        
         Formé mi carrera profesional en CODERHOUSE y de manera autodidacta en Youtube.
         En la actualidad sigo reforzando conocimientos en la UNRC(Universidad Nacional De Rio Cuarto) como licenciado en Cs de la computación. 
        </p>
      </>
    ),
 
    badge: "< Educación /> ",
 
   
     
  },
];
