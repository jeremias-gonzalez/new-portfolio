"use client";
import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products}/>;
}
export const products = [

  {
    title: "Caes",
    link: "https://jeremias-gonzalez.github.io/Proyecto-CAES/",
    thumbnail:
      "./images/caes.png",
  },
  // {
  //   title: "Merceria Dina",
  //   link: "https://merceria-dina.vercel.app/",
  //   thumbnail:
  //     "./images/merceria dina.png",
  // },

  
  {
    title: "Velocisite",
    link: "https://www.velocisite.com.ar/",
    thumbnail:
      "./images/velocisite-react.png",
  },
  {
    title: "GrupoHydrotecnova",
    link: "https://grupohydrotecnova.netlify.app/",
    thumbnail:
      "./images/hydrotec.png",
  },
  
  
  {
    title: "Caes",
    link: "https://jeremias-gonzalez.github.io/Proyecto-CAES/",
    thumbnail:
      "./images/caes.png",
  },
  // {
  //   title: "Merceria Dina",
  //   link: "https://merceria-dina.vercel.app/",
  //   thumbnail:
  //     "./images/merceria dina.png",
  // },

  {
    title: "GrupoHydrotecnova",
    link: "https://grupohydrotecnova.netlify.app/",
    thumbnail:
      "./images/hydrotec.png",
  },
  
];
