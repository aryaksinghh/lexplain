import Image from "next/image";
import Navbar from "@/components/Navbar";
import { WavyBackground } from "@/components/ui/wavy-background";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { FeaturesSectionDemo } from "@/components/ui/cards";
import { MinimalistAccordion } from "@/components/accordion";
import Footer from "@/components/footer";
import Link from "next/link";
import ObserverProvider from "@/components/observerprovider";

export default function Home() {
  return (
    <WavyBackground className="max-w-screen mx-auto">
      <ObserverProvider>
      <div className="flex flex-col">
        <div>
          <Navbar />
        </div>
        <div className="hero text-black flex flex-col justify-center items-center text-center px-5 mt-20 md:mt-30">
          <div className="flex flex-col items-center justify-center gap-7">
            <h1 className="motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md motion-delay-200 text-4xl md:text-5xl">Ai powered lawyer - Understand legal documents easily</h1>
            <p className="motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md motion-delay-300 text-md w-[80vw] md:w-[60vw] text-center text-gray-700">Upload any contract or legal doc — our AI breaks it down into simple, no-fluff explanations. Fast, secure, and designed for people who hate legalese</p>
            <Link href="/playground" className="motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md motion-delay-400">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black cursor-pointer bg-black text-white dark:text-white flex items-center space-x-2"
              >
                <span>Try a clause</span>
              </HoverBorderGradient >
            </Link>
          </div>
          <Image className="mt-15 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md motion-delay-500 rounded-xl border-6 border-gray-500" width={800} height={500} src={'/heroimg.png'} alt="hero" />
        </div>
        <div id="features" className=" flex flex-col items-center justify-center mt-24">
          <h1 className="intersect-once intersect:motion-preset-slide-up motion-delay-200 text-5xl font-bold border-black border-b-3 italic">Features</h1>
          <FeaturesSectionDemo containerclassName="bg-black" />
        </div>
        <div className="qna flex flex-col items-center gap-15 mt-10">
          <h1 className="intersect-once intersect:motion-preset-slide-up motion-delay-200 text-5xl font-serif italic text-center">Your Questions, Answered</h1>
          <MinimalistAccordion />
        </div>
        <div className="footer intersect-once intersect:motion-preset-slide-up motion-delay-300">
          <Footer />
        </div>
      </div>
      </ObserverProvider>
    </WavyBackground>
  );
}
