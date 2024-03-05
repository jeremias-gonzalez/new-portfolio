"use client";
import { TracingBeamDemo} from "./TracingBeam";
import { HeroParallaxDemo } from "./HeroParallaxDemo";
import  NewNavbar from './Navbar';

import { AnimatedTooltipPreview } from "./AnimatedTooltipPreview";

export default function Home() {
  const theme = 'dark'; 
  return (

    <main className="dark:bg-dark">
      <NewNavbar/>
 <HeroParallaxDemo/>  
    <AnimatedTooltipPreview/> 
<TracingBeamDemo/> 

   
    </main>

  );
}
