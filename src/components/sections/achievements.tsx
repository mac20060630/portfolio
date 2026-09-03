"use client";
import React, { useState } from "react";
import { ACHIEVEMENTS, Achievement } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, ShieldCheck, Sparkles, Code, Users, CheckCircle2 } from "lucide-react";

const categoryIcons = {
  Leadership: Users,
  Certification: ShieldCheck,
  "AI & ML": Sparkles,
  Hackathon: Code,
};

const AchievementsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Leadership", "Certification", "AI & ML", "Hackathon"];

  const filteredAchievements =
    selectedCategory === "All"
      ? ACHIEVEMENTS
      : ACHIEVEMENTS.filter((item) => item.category === selectedCategory);

  return (
    <SectionWrapper
      id="achievements"
      className="flex flex-col items-center justify-center min-h-[110vh] py-20 z-10"
    >
      <div className="w-full max-w-6xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="achievements"
          title="Honors & Credentials"
          desc="Verified certifications, leadership milestones, and competitive accolades."
          className="mb-8 mt-0"
        />

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border",
                selectedCategory === cat
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 border-neutral-900 dark:border-white shadow-sm"
                  : "bg-neutral-100/80 dark:bg-neutral-900/60 text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredAchievements.map((item, index) => {
              const Icon = categoryIcons[item.category] || Award;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                >
                  <Card
                    className={cn(
                      "h-full flex flex-col justify-between",
                      "bg-card/90 backdrop-blur-md text-card-foreground border-border",
                      "hover:border-primary/40 hover:shadow-xl transition-all duration-300 group",
                      "relative overflow-hidden"
                    )}
                  >
                    {/* Subtle Top Gradient Accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-80 group-hover:opacity-100 transition-opacity" />

                    <CardHeader className="pb-3 pt-6">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                          <Icon size={20} />
                        </div>
                        <div className="flex items-center gap-1.5">
                          {item.badgeText && (
                            <Badge
                              variant="secondary"
                              className="text-[10px] font-mono px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 border-border"
                            >
                              {item.badgeText}
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-[10px] font-mono">
                            {item.date}
                          </Badge>
                        </div>
                      </div>

                      <CardTitle className="text-lg font-bold leading-snug tracking-tight group-hover:text-primary transition-colors">
                        {item.title}
                      </CardTitle>
                      <p className="text-xs font-semibold text-muted-foreground flex items-center gap-1 mt-1">
                        <CheckCircle2 size={13} className="text-emerald-500" />
                        <span>{item.issuer}</span>
                      </p>
                    </CardHeader>

                    <CardContent className="space-y-4 pt-1 flex-1 flex flex-col justify-between">
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>

                      <div className="pt-2 flex items-center justify-between border-t border-border/50">
                        <span className="text-[11px] font-medium text-neutral-400">
                          {item.category}
                        </span>
                        <span className="text-[11px] text-emerald-500 dark:text-emerald-400 flex items-center gap-1 font-medium">
                          Verified Credential
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AchievementsSection;
