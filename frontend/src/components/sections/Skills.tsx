import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { skills, skillCategories } from "../../data/content";
import type { SkillCategory } from "../../data/content";
import { skillIconMap } from "../../data/skillIcons";
import { FiBox } from "react-icons/fi";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillCategory>("All");

  const filtered =
    activeTab === "All"
      ? skills
      : skills.filter((s) => s.category === activeTab);

  return (
    <Section id="skills">
      <SectionHeading subtitle="Technologies I work with">
        Skills & Toolset
      </SectionHeading>

      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {skillCategories.map((cat) => {
          const isActive = activeTab === cat;
          const count =
            cat === "All"
              ? skills.length
              : skills.filter((s) => s.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-surface-card dark:bg-surface-card-dark text-text-muted dark:text-text-muted-dark border border-border dark:border-border-dark hover:border-primary/40 dark:hover:border-primary/40"
              }`}
            >
              {cat}{" "}
              <span
                className={`ml-1 text-xs ${
                  isActive ? "text-white/70" : "text-text-muted/50 dark:text-text-muted-dark/50"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Badges grid */}
      <motion.div layout className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((skill) => {
            const Icon = skillIconMap[skill.name] || FiBox;
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-surface-card dark:bg-surface-card-dark border border-border dark:border-border-dark hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-200 cursor-default"
              >
                <Icon
                  size={28}
                  className="text-text-muted dark:text-text-muted-dark group-hover:text-primary dark:group-hover:text-primary-light transition-colors duration-200"
                />
                <span className="text-xs text-center font-medium text-text-muted dark:text-text-muted-dark group-hover:text-text dark:group-hover:text-text-dark transition-colors leading-tight">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
