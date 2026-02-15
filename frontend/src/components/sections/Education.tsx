import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { education } from "../../data/content";

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading subtitle="Formal training and credentials">
        Education
      </SectionHeading>
      <div className="max-w-2xl mx-auto">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            className="relative flex gap-4 pb-8 last:pb-0"
          >
            {/* Timeline line */}
            {i < education.length - 1 && (
              <div className="absolute left-5 top-10 w-0.5 h-[calc(100%-10px)] bg-border dark:bg-border-dark" />
            )}

            {/* Icon */}
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 border-2 border-primary/30 dark:border-primary/40 flex items-center justify-center z-10">
              <FiBookOpen size={16} className="text-primary dark:text-primary-light" />
            </div>

            {/* Content */}
            <div className="pt-1">
              <h3 className="font-semibold text-text dark:text-text-dark">
                {edu.degree}
              </h3>
              <p className="text-text-muted dark:text-text-muted-dark text-sm">
                {edu.institution}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
