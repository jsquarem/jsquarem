import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function Section({ id, children, className = "", fullWidth = false }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-16 md:py-24 ${fullWidth ? "" : "max-w-[97rem] mx-auto px-4 sm:px-6 lg:px-8"} ${className}`}
    >
      {children}
    </motion.section>
  );
}
