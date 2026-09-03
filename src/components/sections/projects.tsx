"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  useModal,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";

import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

import { SiGithub } from "react-icons/si";
import { ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto min-h-screen py-16">
      <SectionHeader 
        id="projects" 
        title="Featured Projects" 
        desc="Curated showcase of mobile systems, 3D WebGL, and scalable web applications." 
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mt-6">
        {projects.map((project, index) => (
          <Modall key={project.id || project.src} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const CancelButton = () => {
  const { setOpen } = useModal();
  return (
    <button
      onClick={() => setOpen(false)}
      className="px-2 py-1 bg-gray-200 text-black dark:bg-neutral-900 dark:border-neutral-700 dark:text-white border border-gray-300 rounded-md text-sm w-28 cursor-pointer hover:opacity-80 transition-opacity"
    >
      Cancel
    </button>
  );
};

const Modall = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn w-full">
          <div
            className="relative w-full max-w-[380px] h-auto rounded-xl overflow-hidden border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            style={{ aspectRatio: "3/2" }}
          >
            <Image
              className="absolute w-full h-full top-0 left-0 group-hover:scale-105 transition-transform duration-500 object-cover object-top"
              src={project.src}
              alt={project.title}
              width={400}
              height={300}
            />
            <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none">
              <div className="flex flex-col h-full items-start justify-end p-5">
                <div className="text-base md:text-lg font-semibold text-white text-left line-clamp-1">
                  {project.title}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[11px] font-medium bg-white/90 text-black rounded-md px-2 py-0.5">
                    {project.category}
                  </span>
                  {project.github && (
                    <span className="text-[10px] bg-neutral-800/90 text-neutral-300 border border-neutral-700 rounded-md px-1.5 py-0.5 flex items-center gap-1">
                      <SiGithub className="text-xs" /> Code
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ModalTrigger>
        <ModalBody className="md:max-w-4xl md:max-h-[85%] overflow-auto">
          <SmoothScroll isInsideModal={true}>
            <ModalContent>
              <ProjectContents project={project} />
            </ModalContent>
          </SmoothScroll>
          <ModalFooter className="gap-3 flex-wrap justify-end">
            <CancelButton />
            {project.github && (
              <Link href={project.github} target="_blank">
                <button className="flex items-center justify-center gap-1.5 bg-neutral-900 text-white dark:bg-neutral-800 dark:text-white text-sm px-3 py-1 rounded-md border border-neutral-700 hover:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors w-28">
                  <SiGithub size={14} />
                  <span>GitHub</span>
                </button>
              </Link>
            )}
            <Link href={project.live} target="_blank">
              <button className="flex items-center justify-center gap-1.5 bg-black text-white dark:bg-white dark:text-black text-sm px-3 py-1 rounded-md border border-black hover:opacity-90 transition-opacity w-28 font-medium">
                <ExternalLink size={14} />
                <span>Visit</span>
              </button>
            </Link>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default ProjectsSection;

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <>
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        {project.title}
      </h4>
      <div className="flex flex-col md:flex-row md:justify-evenly max-w-screen overflow-hidden md:overflow-visible">
        <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
          <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
            Frontend
          </p>
          {project.skills.frontend?.length > 0 && (
            <FloatingDock items={project.skills.frontend} />
          )}
        </div>
        {project.skills.backend?.length > 0 && (
          <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
            <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
              Backend
            </p>
            <FloatingDock items={project.skills.backend} />
          </div>
        )}
      </div>
      {/* <div className="flex justify-center items-center">
        {project.screenshots.map((image, idx) => (
          <motion.div
            key={"images" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            whileTap={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={`${project.src.split("1.png")[0]}${image}`}
              alt="screenshots"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div> */}
      {project.content}
    </>
  );
};
