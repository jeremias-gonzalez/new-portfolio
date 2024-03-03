import { TracingBeamDemo} from "./TracingBeam";
import { HeroParallaxDemo } from "./HeroParallaxDemo";
import { NavbarDemo } from "./FloatingNavbar";
import { AnimatedTooltipPreview } from "./AnimatedTooltipPreview";
export default function Home() {
  return (
    <main>
      <NavbarDemo/>
    <HeroParallaxDemo/> 
    <AnimatedTooltipPreview/>
    <TracingBeamDemo/>
    </main>
  );
}
