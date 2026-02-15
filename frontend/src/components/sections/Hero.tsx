import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiChevronDown, FiMail } from "react-icons/fi";
import { profile } from "../../data/content";
import { useTypingEffect } from "../../hooks/useTypingEffect";
import profileImg from "../../assets/jeff.jpeg";

export default function Hero() {
  const typedText = useTypingEffect(profile.taglines);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background - light vs dark */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-indigo-50/80 to-slate-200 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900 animate-gradient transition-colors duration-500" />

      {/* Grid overlay - light theme: dark dots; dark theme: white dots */}
      <div
        className="absolute inset-0 opacity-[0.12] dark:opacity-0 transition-opacity duration-500"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.2) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute inset-0 opacity-0 dark:opacity-10 transition-opacity duration-500"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating gradient orbs - lighter in light mode */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-200/40 dark:bg-primary/20 rounded-full blur-3xl transition-colors duration-500" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-200/40 dark:bg-accent/20 rounded-full blur-3xl transition-colors duration-500" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6">
        {/* Profile Photo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <img
              src={profileImg}
              alt={profile.name}
              className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-indigo-300/80 dark:border-primary/50 animate-glow"
            />
            <div className="absolute inset-0 rounded-full border-2 border-indigo-300/50 dark:border-primary/30 animate-ping" style={{ animationDuration: "3s" }} />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-slate-800 dark:text-white mb-4 transition-colors duration-300"
        >
          {profile.name}
        </motion.h1>

        {/* Typing tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="h-10 mb-8"
        >
          <span className="text-xl md:text-2xl text-indigo-700 dark:text-indigo-200 font-mono transition-colors duration-300">
            {typedText}
            <span className="animate-blink text-indigo-500 dark:text-primary-light">|</span>
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 rounded-full bg-primary hover:bg-primary-dark text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="px-8 py-3 rounded-full border-2 border-slate-300 dark:border-white/30 text-slate-700 dark:text-white font-semibold hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
          >
            <FiMail /> Get In Touch
          </a>
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border-2 border-slate-300 dark:border-white/30 text-slate-700 dark:text-white font-semibold hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
          >
            View Resume
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: FaLinkedinIn, href: profile.social.linkedin, label: "LinkedIn" },
            { icon: FaGithub, href: profile.social.github, label: "GitHub" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full border border-slate-300 dark:border-white/30 flex items-center justify-center text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white hover:border-primary hover:bg-primary/20 transition-all duration-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-slate-500 dark:text-white/50 hover:text-slate-700 dark:hover:text-white/80 transition-colors animate-bounce-slow block"
        >
          <FiChevronDown size={28} />
        </a>
      </motion.div>
    </section>
  );
}
