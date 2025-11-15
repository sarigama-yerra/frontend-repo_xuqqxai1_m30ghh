import Section from "./Section";

const items = [
  {
    role: "Intern",
    company: "Bharat Electronics Limited (BEL)",
    period: "Apr 2025 – Jul 2025",
    points: [
      "Worked on MARS 2.0 focusing on workflow management, document tracking, and multi-user approvals.",
      "Improved internal process transparency and reporting accuracy."
    ],
  },
  {
    role: "Operations",
    company: "Paytm Insiders",
    period: "—",
    points: [
      "Managed ticket inventory updates and allocations across public, members, and sponsors.",
      "Ensured timely reporting of sales and remaining stock."
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="Internships and roles where I learned by doing.">
      <div className="grid gap-4">
        {items.map((exp, i) => (
          <div key={i} className="rounded-xl border border-gray-200 p-5 bg-white shadow-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="font-semibold text-gray-900">{exp.role} · {exp.company}</h3>
                <p className="text-sm text-gray-600">{exp.period}</p>
              </div>
            </div>
            <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
              {exp.points.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
