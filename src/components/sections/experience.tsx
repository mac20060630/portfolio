"use client";
import React, { useState } from "react";
import { EXPERIENCE, EDUCATION, SkillNames, SKILLS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  return (
    <SectionWrapper
      id="experience"
      className="flex flex-col items-center justify-center min-h-[120vh] py-20 z-10"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="experience"
          title="Journey & Background"
          desc="Professional industry experience and academic foundations."
          className="mb-8 mt-0"
        />

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-xl bg-neutral-200/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-300 dark:border-neutral-800 shadow-inner">
            <button
              onClick={() => setActiveTab("experience")}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
                activeTab === "experience"
                  ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-md"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              )}
            >
              <Briefcase size={16} />
              <span>Work Experience</span>
              <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 font-mono ml-1">
                {EXPERIENCE.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("education")}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
                activeTab === "education"
                  ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-md"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              )}
            >
              <GraduationCap size={17} />
              <span>Education</span>
              <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 font-mono ml-1">
                {EDUCATION.length}
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "experience" ? (
            <motion.div
              key="exp-list"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-8 md:gap-10 relative"
            >
              <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-border hidden md:block -translate-x-1/2" />

              {EXPERIENCE.map((exp, index) => (
                <div key={exp.id} className="relative">
                  <ExperienceCard experience={exp} index={index} />
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="edu-list"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-8 md:gap-10 relative"
            >
              <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-border hidden md:block -translate-x-1/2" />

              {EDUCATION.map((edu, index) => (
                <div key={edu.id} className="relative">
                  <EducationCard education={edu} index={index} />
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
};

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: (typeof EXPERIENCE)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card
        className={cn(
          "bg-card/90 backdrop-blur-sm text-card-foreground border-border",
          "hover:border-primary/30 transition-all duration-300",
          "shadow-sm hover:shadow-lg"
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1">
              <CardTitle className="text-xl font-bold tracking-tight">
                {experience.title}
              </CardTitle>
              <div className="text-base font-medium text-muted-foreground flex items-center gap-1.5">
                <Briefcase size={15} className="text-primary/70" />
                <span>{experience.company}</span>
              </div>
            </div>
            <Badge variant="secondary" className="w-fit font-mono text-xs font-normal">
              {experience.startDate} - {experience.endDate}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <ul className="list-disc list-outside ml-4 space-y-2 text-sm md:text-base text-muted-foreground leading-relaxed">
            {experience.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skillName) => {
              const skill = SKILLS[skillName as SkillNames];
              if (!skill) return null;
              return (
                <Badge
                  key={skillName}
                  variant="outline"
                  className="gap-2 text-xs font-normal bg-secondary/30 hover:bg-secondary/50 transition-colors border-transparent"
                >
                  <img
                    src={skill.icon}
                    alt={skill.label}
                    className="w-3.5 h-3.5 object-contain opacity-80"
                  />
                  {skill.label}
                </Badge>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const EducationCard = ({
  education,
  index,
}: {
  education: (typeof EDUCATION)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card
        className={cn(
          "bg-card/90 backdrop-blur-sm text-card-foreground border-border",
          "hover:border-primary/30 transition-all duration-300",
          "shadow-sm hover:shadow-lg"
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <CardTitle className="text-xl font-bold tracking-tight">
                  {education.degree}
                </CardTitle>
                {education.status && (
                  <Badge
                    variant={education.status === "Pursuing" ? "default" : "secondary"}
                    className="text-[10px] px-2 py-0.5"
                  >
                    {education.status}
                  </Badge>
                )}
              </div>
              <div className="text-base font-medium text-muted-foreground flex items-center gap-2">
                <GraduationCap size={16} className="text-primary/70" />
                <span>{education.institution}</span>
              </div>
              <div className="text-xs text-muted-foreground/80 flex items-center gap-1">
                <MapPin size={12} />
                <span>{education.location}</span>
              </div>
            </div>
            <Badge variant="secondary" className="w-fit font-mono text-xs font-normal">
              {education.startDate} - {education.endDate}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <ul className="list-disc list-outside ml-4 space-y-2 text-sm md:text-base text-muted-foreground leading-relaxed">
            {education.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {education.skills.map((skillName) => {
              const skill = SKILLS[skillName as SkillNames];
              if (!skill) return null;
              return (
                <Badge
                  key={skillName}
                  variant="outline"
                  className="gap-2 text-xs font-normal bg-secondary/30 hover:bg-secondary/50 transition-colors border-transparent"
                >
                  <img
                    src={skill.icon}
                    alt={skill.label}
                    className="w-3.5 h-3.5 object-contain opacity-80"
                  />
                  {skill.label}
                </Badge>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceSection;
