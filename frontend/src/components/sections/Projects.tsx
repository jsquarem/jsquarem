import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiTerminal, FiChevronDown, FiChevronUp } from "react-icons/fi";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { projects } from "../../data/content";
import type { Project } from "../../data/content";

// Dynamic import of project images
const images = import.meta.glob("../../assets/projects/*.png", { eager: true }) as Record<
  string,
  { default: string }
>;

function getProjectImage(filename: string): string | undefined {
  const match = Object.entries(images).find(([path]) => path.endsWith(filename));
  return match?.[1]?.default;
}

const CARD_MIN_HEIGHT = "420px";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const image = project.image ? getProjectImage(project.image) : undefined;
  const hasDetails = Boolean(project.details);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-2xl overflow-hidden bg-surface-card dark:bg-surface-card-dark border border-border dark:border-border-dark hover:border-primary/40 dark:hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex flex-col"
      style={{ minHeight: CARD_MIN_HEIGHT }}
    >
      {/* Image or placeholder - fixed height */}
      <div className="relative h-40 shrink-0 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
        {image ? (
          <img
            src={image}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <FiTerminal size={48} className="text-primary/40" />
          </div>
        )}
        {project.isClient && (
          <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-accent/90 text-white text-xs font-semibold">
            Client Work
          </span>
        )}
      </div>

      {/* Content - flex to fill and keep footer at bottom */}
      <div className="p-5 flex flex-col flex-1 min-h-0">
        <div className="mb-1 shrink-0">
          {project.subtitle && (
            <span className="text-xs font-medium text-primary dark:text-primary-light uppercase tracking-wider">
              {project.subtitle}
            </span>
          )}
          <h3 className="text-xl font-semibold text-text dark:text-text-dark">
            {project.title}
          </h3>
        </div>

        {/* Description: full text, no truncation */}
        <p className="text-text-muted dark:text-text-muted-dark text-sm leading-relaxed mt-2 shrink-0">
          {project.description}
        </p>

        {/* More details - only when there is extra content */}
        {hasDetails && (
          <div className="mt-2 shrink-0">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-primary dark:text-primary-light text-sm hover:underline"
            >
              {expanded ? "Less" : "More"} details
              {expanded ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
            </button>
            <AnimatePresence>
              {expanded && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-text-muted dark:text-text-muted-dark text-sm mt-2 leading-relaxed overflow-hidden"
                >
                  {project.details}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Spacer so tech + links sit at bottom */}
        <div className="flex-1 min-h-[12px]" />

        {/* Card footer: tech badges + links row (fixed min-height) */}
        <div className="mt-4 shrink-0 space-y-0">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-0.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-xs font-medium"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border dark:border-border-dark min-h-[44px]">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-text-muted dark:text-text-muted-dark hover:text-primary dark:hover:text-primary-light transition-colors"
              >
                <FiExternalLink size={14} /> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-text-muted dark:text-text-muted-dark hover:text-primary dark:hover:text-primary-light transition-colors"
              >
                <FiGithub size={14} /> Source
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const SMALL_CARD_MIN_HEIGHT = "200px";

function SmallProjectCard({ project }: { project: Project }) {
  const hasDetails = Boolean(project.details);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="p-4 rounded-xl bg-surface-card dark:bg-surface-card-dark border border-border dark:border-border-dark hover:border-primary/40 dark:hover:border-primary/40 transition-all duration-300 flex flex-col"
      style={{ minHeight: SMALL_CARD_MIN_HEIGHT }}
    >
      <div className="flex-1 min-h-0">
        {project.subtitle && (
          <span className="text-xs font-medium text-primary dark:text-primary-light uppercase tracking-wider">
            {project.subtitle}
          </span>
        )}
        <h3 className="text-base font-semibold text-text dark:text-text-dark mt-0.5">
          {project.title}
        </h3>
        <p className="text-text-muted dark:text-text-muted-dark text-sm mt-1 leading-relaxed">
          {project.description}
        </p>
        {hasDetails && (
          <>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-primary dark:text-primary-light text-xs mt-1 hover:underline"
            >
              {expanded ? "Less" : "More"} details
              {expanded ? <FiChevronUp size={12} /> : <FiChevronDown size={12} />}
            </button>
            {expanded && (
              <p className="text-text-muted dark:text-text-muted-dark text-xs mt-1 leading-relaxed">
                {project.details}
              </p>
            )}
          </>
        )}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-xs"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3 mt-3 pt-3 border-t border-border dark:border-border-dark shrink-0 min-h-[44px]">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-text-muted dark:text-text-muted-dark hover:text-primary dark:hover:text-primary-light transition-colors"
          >
            <FiExternalLink size={14} /> Live
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-text-muted dark:text-text-muted-dark hover:text-primary dark:hover:text-primary-light transition-colors"
          >
            <FiGithub size={14} /> Source
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <Section id="projects">
      <SectionHeading subtitle="Real projects, real impact">
        Projects
      </SectionHeading>

      {/* Featured grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {featured.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Other projects */}
      {other.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-text dark:text-text-dark mb-4">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {other.map((project) => (
              <SmallProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}

      {/* GitHub CTA */}
      <div className="text-center mt-10">
        <a
          href="https://github.com/jsquarem"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary/30 dark:border-primary/40 text-primary dark:text-primary-light font-medium hover:bg-primary/10 transition-all duration-300"
        >
          <FiGithub size={18} /> More on GitHub
        </a>
      </div>
    </Section>
  );
}
