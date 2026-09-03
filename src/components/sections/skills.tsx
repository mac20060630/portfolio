"use client";
import React, { useState } from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SKILLS, Skill, SkillNames } from "@/data/constants";
import { useSounds } from "../realtime/hooks/use-sounds";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Terminal } from "lucide-react";

const CATEGORIES: { name: string; keys: SkillNames[] }[] = [
  {
    name: "Frontend & UI",
    keys: [
      SkillNames.NEXTJS,
      SkillNames.REACT,
      SkillNames.TS,
      SkillNames.JS,
      SkillNames.TAILWIND,
      SkillNames.VUE,
      SkillNames.HTML,
      SkillNames.CSS,
    ],
  },
  {
    name: "Backend & Systems",
    keys: [
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.PYTHON,
      SkillNames.POSTGRES,
      SkillNames.MONGODB,
      SkillNames.FIREBASE,
    ],
  },
  {
    name: "DevOps & Cloud",
    keys: [
      SkillNames.DOCKER,
      SkillNames.LINUX,
      SkillNames.GCP,
      SkillNames.AWS,
      SkillNames.VERCEL,
      SkillNames.NGINX,
      SkillNames.GIT,
      SkillNames.GITHUB,
    ],
  },
];

const SkillsSection = () => {
  const { playPressSound, playReleaseSound } = useSounds();
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleSkillClick = (skill: Skill) => {
    playPressSound();
    setSelectedSkill(skill);
    setTimeout(() => {
      playReleaseSound();
    }, 150);
  };

  return (
    <SectionWrapper
      id="skills"
      className="w-full min-h-screen md:min-h-[140dvh] relative flex flex-col justify-between py-12 pointer-events-none"
    >
      <div className="pointer-events-auto">
        <SectionHeader
          id="skills"
          title="Tech Stack"
          desc="(Type on your keyboard or tap below to test keys)"
        />
      </div>

      {/* Interactive HUD and Categorized Skill Matrix */}
      <div className="w-full max-w-5xl mx-auto px-4 pointer-events-auto mt-auto pb-10 z-20">
        {/* Active Skill HUD Display */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="mb-6 p-4 rounded-xl bg-neutral-900/90 text-white dark:bg-black/90 border border-white/20 backdrop-blur-xl shadow-2xl flex items-center justify-between gap-4 max-w-xl mx-auto"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/10 border border-white/10 flex-shrink-0">
                  <img
                    src={selectedSkill.icon}
                    alt={selectedSkill.label}
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold tracking-tight">
                      {selectedSkill.label}
                    </span>
                    <Badge variant="outline" className="text-[10px] font-mono border-white/20 text-white/80">
                      Active Key
                    </Badge>
                  </div>
                  <p className="text-xs text-neutral-300 font-mono mt-0.5 line-clamp-2">
                    {selectedSkill.shortDescription}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                className="text-xs text-neutral-400 hover:text-white px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors flex-shrink-0"
              >
                ✕ Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Categorized Pill Tray */}
        <div className="bg-white/60 dark:bg-neutral-950/70 backdrop-blur-md rounded-2xl border border-border/80 p-5 shadow-lg space-y-4">
          <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Terminal size={14} className="text-primary" />
              <span>Interactive Skill Matrix</span>
            </div>
            <span className="text-[11px] text-muted-foreground flex items-center gap-1 font-mono">
              <Sparkles size={12} className="text-amber-500" />
              Audio Feedback Enabled
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="space-y-2">
                <span className="text-[11px] font-semibold text-muted-foreground/90 tracking-wide block uppercase">
                  {cat.name}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cat.keys.map((keyName) => {
                    const skill = SKILLS[keyName];
                    if (!skill) return null;
                    const isSelected = selectedSkill?.name === skill.name;

                    return (
                      <button
                        key={skill.name}
                        onClick={() => handleSkillClick(skill)}
                        className={cn(
                          "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer",
                          "border active:scale-95",
                          isSelected
                            ? "bg-primary text-primary-foreground border-primary shadow-md scale-105"
                            : "bg-background/80 hover:bg-secondary/80 text-foreground border-border hover:border-primary/40 shadow-sm"
                        )}
                      >
                        <img
                          src={skill.icon}
                          alt={skill.label}
                          className="w-3.5 h-3.5 object-contain"
                        />
                        <span>{skill.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
