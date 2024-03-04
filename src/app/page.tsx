import { TracingBeamDemo} from "./TracingBeam";
import { HeroParallaxDemo } from "./HeroParallaxDemo";
import  NewNavbar from './Navbar';
import { AnimatedTooltipPreview } from "./AnimatedTooltipPreview";
import { StickyScrollRevealDemo } from "./StickyScrollRevealDemo";
export default function Home() {
  return (
    <main>
      <NewNavbar/>
    <HeroParallaxDemo/> 
    <AnimatedTooltipPreview/>
    <TracingBeamDemo/>
    {/* <StickyScrollRevealDemo/> */}
   
    </main>
  );
}
