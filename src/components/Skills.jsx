import Section from "./Section";

const skills = {
  "Analytical & Business": [
    "Requirement Gathering",
    "Data Analysis",
    "Problem-Solving",
    "Process Optimization",
  ],
  "Tools & Reporting": ["Excel", "SQL", "Power BI (Beginner)", "Data Visualization"],
  "Programming & Automation": [
    "Python",
    "Pandas",
    "BeautifulSoup",
    "Java",
    "C++",
    "JavaScript",
    "MERN Stack",
  ],
  "Soft Skills": [
    "Leadership",
    "Communication",
    "Teamwork",
    "Creativity",
    "Fast Learner",
  ],
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="A mix of analytical, technical, and people skills.">
      <div className="grid md:grid-cols-2 gap-5">
        {Object.entries(skills).map(([group, list]) => (
          <div key={group} className="rounded-xl border border-gray-200 p-5 bg-white">
            <h3 className="font-medium text-gray-900">{group}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {list.map((item) => (
                <span key={item} className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-700 border border-gray-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
