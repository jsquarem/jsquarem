import { useState, useEffect, useCallback } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { testimonials } from "../../data/content";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
  }),
};

export default function Testimonials() {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const total = testimonials.length;

  const paginate = useCallback(
    (dir: number) => {
      setCurrent([(current + dir + total) % total, dir]);
    },
    [current, total]
  );

  // Auto-advance every 8 seconds
  useEffect(() => {
    if (total <= 1) return;
    const timer = setInterval(() => paginate(1), 8000);
    return () => clearInterval(timer);
  }, [paginate, total]);

  const t = testimonials[current];

  return (
    <Section id="testimonials">
      <SectionHeading subtitle="What people say about working with me">
        Testimonials
      </SectionHeading>

      <div className="max-w-3xl mx-auto relative">
        {/* Carousel container */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative p-8 rounded-2xl bg-surface-card dark:bg-surface-card-dark border border-border dark:border-border-dark"
            >
              <FaQuoteLeft
                size={32}
                className="absolute top-6 left-6 text-primary/20 dark:text-primary/30"
              />
              <blockquote className="relative z-10 pl-8">
                <p className="text-text-muted dark:text-text-muted-dark text-base leading-relaxed italic">
                  "{t.quote}"
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center text-primary dark:text-primary-light font-bold text-sm">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <cite className="not-italic font-semibold text-text dark:text-text-dark text-sm">
                      {t.name}
                    </cite>
                    <p className="text-text-muted dark:text-text-muted-dark text-xs">
                      {t.title}
                    </p>
                  </div>
                </footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        {total > 1 && (
          <>
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 w-9 h-9 rounded-full bg-surface-card dark:bg-surface-card-dark border border-border dark:border-border-dark flex items-center justify-center text-text-muted dark:text-text-muted-dark hover:text-primary dark:hover:text-primary-light hover:border-primary/50 transition-all shadow-sm"
            >
              <FiChevronLeft size={18} />
            </button>
            <button
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 w-9 h-9 rounded-full bg-surface-card dark:bg-surface-card-dark border border-border dark:border-border-dark flex items-center justify-center text-text-muted dark:text-text-muted-dark hover:text-primary dark:hover:text-primary-light hover:border-primary/50 transition-all shadow-sm"
            >
              <FiChevronRight size={18} />
            </button>
          </>
        )}

        {/* Dots indicator */}
        {total > 1 && (
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent([i, i > current ? 1 : -1])}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-primary w-6"
                    : "bg-border dark:bg-border-dark hover:bg-primary/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
