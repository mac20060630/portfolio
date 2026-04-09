"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "Abhii Studio",
    description: `A digital archive and portfolio for Abhijit Debnath, an interdisciplinary artist whose work explores themes of memory, displacement, and temporary structures using materials like bamboo and textile.`,
    link: "https://abhiistudio.vercel.app/",
    images: ["/assets/projects/abhii-studio.png"],
  },
  {
    id: 2,
    name: "White Pearl Convention Centre",
    description: `The official website for White Pearl Convention Centre, a premiere wedding venue in Bengaluru. The platform provides an immersive look into their luxurious spaces and world-class hospitality services.`,
    link: "https://whitepearl-eight.vercel.app/",
    images: ["/assets/projects/white-pearl.png"],
  },
  {
    id: 3,
    name: "Flowersss",
    description: `An interactive, bioluminescent floral animation that glows against a dark, starry background. The site highlights custom CSS and JavaScript animations to create a serene, ambient experience.`,
    link: "https://flowers-coral-ten.vercel.app/",
    images: ["/assets/projects/flowers-coral.png"],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
