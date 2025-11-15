import Section from "./Section";

const items = [
  "President of Aprameya (National-level IT Fest) 2025.",
  "Headed Sponsorship Committee in Anaadyanta-24; raised over 1 Lakh sponsorship.",
  "Coordinator of Disha club, IT Fests (NEXUS, Phoenix 2.0), and member of Trooper’s.",
  "Certificate of Excellence in Extra- and Co-Curricular Activities at Presidency College.",
];

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements" subtitle="Leadership and impact beyond the classroom.">
      <ul className="grid gap-3">
        {items.map((a) => (
          <li key={a} className="rounded-xl border border-gray-200 p-4 bg-white text-gray-800">{a}</li>
        ))}
      </ul>
    </Section>
  );
}
