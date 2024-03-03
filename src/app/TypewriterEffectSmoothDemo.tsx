
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
        text: "HI!,",
        className: "text-blue-500 dark:text-blue-500",
      },
    {
      text: "Im",
    },
    {
      text: "Jeremias",
    },
    {
      text: "Gonzalez",
    },
    {
      text: "Developer Front-end",
    },
    {
      text: "React.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[10rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
      Welcome to my Portfolio
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Contact me
        </button>
    
      </div>
    </div>
  );
}
