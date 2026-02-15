import { FiMail, FiMapPin, FiDownload } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { profile } from "../../data/content";

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeading subtitle="Let's build something great together">
        Get In Touch
      </SectionHeading>
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Info items */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-text-muted dark:text-text-muted-dark">
              <FiMapPin size={18} />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-2 text-text-muted dark:text-text-muted-dark">
              <FiMail size={18} />
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-primary dark:hover:text-primary-light transition-colors"
              >
                {profile.email}
              </a>
            </div>
          </div>

          {/* CTA button */}
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary hover:bg-primary-dark text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            <FiMail /> Send Me an Email
          </a>

          {/* Resume links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-text-muted dark:text-text-muted-dark hover:text-primary dark:hover:text-primary-light transition-colors"
            >
              View Resume
            </a>
            <a
              href="/resume.html?print=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-text-muted dark:text-text-muted-dark hover:text-primary dark:hover:text-primary-light transition-colors"
            >
              <FiDownload size={16} /> Download Resume
            </a>
            <a
              href="/business-card.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-text-muted dark:text-text-muted-dark hover:text-primary dark:hover:text-primary-light transition-colors"
            >
              Business Card
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center justify-center gap-4 pt-2">
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
                className="w-11 h-11 rounded-full border border-border dark:border-border-dark flex items-center justify-center text-text-muted dark:text-text-muted-dark hover:text-primary dark:hover:text-primary-light hover:border-primary/50 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
