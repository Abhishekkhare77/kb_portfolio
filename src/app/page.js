"use client"
import { Navbar } from "@/components/Navbar";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Button } from "@/components/ui/moving-border";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Home() {

  return (
    <main>
      <div className="h-[100vh] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div className="flex gap-x-3">
          <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Welcome to</h1>
          <h1 class="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            KBTech
          </h1>
        </div>
        <h1 className="text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-gray-50 to-gray-600 bg-opacity-50">&quot;Elevate Your Online Presence, Effortlessly.&quot;</h1>
        <div className="flex items-center justify-center gap-5 mt-5">
          <div>
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span>{`Contact Now`}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                  ></path>
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>
          </div>
          <div>
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span>{`See Works`}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                  ></path>
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>
          </div>

        </div>
      </div>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          users={users}
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
              Revolutionize Your Digital Presence <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                With Our <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Expertise</span>
                </span>
              </h1>
            </>
          }
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-5 ">
        <h1 className="text-6xl font-bold text-center text-white relative z-20">
          Why Choose Us?
        </h1>
        <div className="w-[40rem] h-40 relative">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
  
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        <div className="w-1/2">
          <TextGenerateEffect words={"Choose KBTech for cutting-edge web and app development solutions that blend innovation, precision, and personalized service, ensuring your digital presence is powerful, user-friendly, and ahead of the curve."}/>
        </div>
      </div>    
    </main>
  );
}

export const users = [
  {
    name: "Social Media",
    designation: "App / Website",
    image: "/assets/socialMedia.webp",
  },
  {
    name: "Productivity",
    designation: "App / Website",
    image: "/assets/productivity.webp",
  },
  {
    name: "Entertainment",
    designation: "App / Website",
    image: "/assets/entertainment.webp",
  },
  {
    name: "Fitness",
    designation: "App / Website",
    image: "/assets/fitness.webp",
  },
  {
    name: "Education",
    designation: "App / Website",
    image: "/assets/education.webp",
  },
  {
    name: "Shopping",
    designation: "App / Website",
    image: "/assets/shopping.webp",
  },
  {
    name: "Finance",
    designation: "App / Website",
    image: "/assets/finance.webp",
  },
  {
    name: "Travel",
    designation: "App / Website",
    image: "/assets/travel.webp",
  },
  {
    name: "News",
    designation: "App / Website",
    image: "/assets/news.webp",
  },
  {
    name: "Health",
    designation: "App / Website",
    image: "/assets/health.webp",
  }
];
