import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { about } from "../../data/content";

export default function About() {
  return (
    <Section id="about">
      <SectionHeading subtitle="A developer who builds with purpose">
        {about.heading}
      </SectionHeading>
      <div className="max-w-3xl mx-auto space-y-5">
        {about.paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-text-muted dark:text-text-muted-dark text-lg leading-relaxed"
          >
            {p}
          </p>
        ))}
      </div>
    </Section>
  );
}
