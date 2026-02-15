import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail, FiFileText } from "react-icons/fi";
import { profile } from "../../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-border dark:border-border-dark">
      <div className="max-w-[97rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center justify-center text-center">
        <div className="mb-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xl font-heading font-bold text-indigo-600 dark:text-indigo-300 hover:opacity-80 transition-opacity"
          >
            A JSquareM Joint
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-text-muted dark:text-text-muted-dark text-sm">
            &copy; {year} {profile.name}. Built with React &amp; Tailwind CSS.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted dark:text-text-muted-dark hover:text-primary dark:hover:text-primary-light transition-colors"
              aria-label="Resume"
            >
              <FiFileText size={18} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted dark:text-text-muted-dark hover:text-primary dark:hover:text-primary-light transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted dark:text-text-muted-dark hover:text-primary dark:hover:text-primary-light transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-text-muted dark:text-text-muted-dark hover:text-primary dark:hover:text-primary-light transition-colors"
              aria-label="Email"
            >
              <FiMail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
