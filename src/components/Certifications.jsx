import Section from "./Section";

const items = [
  "Google Cloud Computing Foundations - NPTEL",
  "Getting Started with Full Stack Development - Simplilearn",
  "AWS Academy Cloud Architecting - AWS Academy",
];

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications" subtitle="Courses and credentials that strengthened my foundations.">
      <ul className="grid gap-3">
        {items.map((c) => (
          <li key={c} className="rounded-xl border border-gray-200 p-4 bg-white text-gray-800">{c}</li>
        ))}
      </ul>
    </Section>
  );
}
