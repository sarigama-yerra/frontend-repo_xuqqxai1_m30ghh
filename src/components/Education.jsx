import Section from "./Section";

const items = [
  {
    school: "Nitte Meenakshi Institute Of Technology",
    degree: "Master of Computer Application",
    period: "Nov 2023 – Jul 2025",
    score: "CGPA – 8.04",
  },
  {
    school: "Presidency College",
    degree: "Bachelor of Computer Application",
    period: "Oct 2020 – Aug 2023",
    score: "Per – 81.17",
  },
  {
    school: "Kendriya Vidyalaya Malleshwaram",
    degree: "12th Standard (PCMC)",
    period: "Mar 2019 – Jul 2020",
    score: "Per – 76.14",
  },
];

export default function Education() {
  return (
    <Section id="education" title="Education" subtitle="Academic background and performance.">
      <div className="grid gap-4">
        {items.map((ed, i) => (
          <div key={i} className="rounded-xl border border-gray-200 p-5 bg-white">
            <h3 className="font-semibold text-gray-900">{ed.school}</h3>
            <p className="text-sm text-gray-700">{ed.degree}</p>
            <p className="text-sm text-gray-600">{ed.period} · {ed.score}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
