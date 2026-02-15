import { motion } from "framer-motion";
import { FiGlobe, FiCode, FiServer, FiLayout } from "react-icons/fi";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { services } from "../../data/content";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  globe: FiGlobe,
  code: FiCode,
  server: FiServer,
  palette: FiLayout,
};

export default function Services() {
  return (
    <Section id="services">
      <SectionHeading subtitle="What I can build for you">
        Services
      </SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] || FiCode;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative p-6 rounded-2xl bg-surface-card dark:bg-surface-card-dark border border-border dark:border-border-dark hover:border-primary/50 dark:hover:border-primary/50 transition-colors duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                <Icon size={24} className="text-primary dark:text-primary-light" />
              </div>
              <h3 className="text-lg font-semibold text-text dark:text-text-dark mb-2">
                {service.title}
              </h3>
              <p className="text-text-muted dark:text-text-muted-dark text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
