import { Separator } from "@/components/ui/separator";
import { Exo_2 } from "next/font/google";

const Exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-exo2",
});

const LandingHero = () => {
  return (
    <>
      <div className="w-full bg-[#0d1e21]/5">
        <div className="max-w-6xl flex mx-auto max-md:flex-col justify-between">
          <div className="my-20 p-2 max-w-xl space-y-3">
            <h1 className="text-3xl md:text-5xl text-stone-900 font-bold">
              Clyre — Your Mental Health AI Companion
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-stone-800">
              AI-powered support for your mental health journey and well-being.
            </h2>
            <p className="text-sm md:text-lg max-md:text-center text-stone-800">
              Get personalized guidance and evidence-based insights through
              interactive conversations with our AI assistant.
            </p>
          </div>
        </div>
      </div>

      <div className="space-x-3 flex justify-between items-center max-w-xs md:max-w-xl mx-auto">
        <h1 className="tracking-tight flex-shrink-0 font-bold text-stone-800 text-2xl md:text-4xl">
          Why
          <span className={Exo2.className}>Clyre</span>
        </h1>
        <div className="h-10">
          <Separator orientation="vertical" className="bg-stone-400" />
        </div>
        <p className="text-stone-500 max-w-xs text-[8px] md:text-[14px] text-center">
          Designed to understand your mental health journey — symptoms,
          patterns, and personal needs.
        </p>
      </div>
    </>
  );
};

export default LandingHero;
