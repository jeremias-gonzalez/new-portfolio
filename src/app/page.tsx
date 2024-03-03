import { TracingBeamDemo} from "./TracingBeam";
import { HeroParallaxDemo } from "./HeroParallaxDemo";
import { FloatingNavDemo } from "./FloatingNavbar";
import { AnimatedTooltipPreview } from "./AnimatedTooltipPreview";
export default function Home() {
  return (
    <main>
      <FloatingNavDemo/>
    <HeroParallaxDemo/> 
    <AnimatedTooltipPreview/>
    <TracingBeamDemo/>
    </main>
  );
}
