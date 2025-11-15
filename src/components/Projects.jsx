import Section from "./Section";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "MARS 2.0",
    timeline: "Apr 2025 – Jul 2025",
    stack: ["ASP.NET", "Workflow", "RBAC"],
    summary:
      "Designed and analyzed workflows with document uploads, approvals, and role-based access. Improved transparency and reporting accuracy.",
  },
  {
    title: "IoT Smart Car – Gesture Controlled & Object Detection",
    timeline: "Dec 2024 – Feb 2025",
    stack: ["ESP32", "MPU6050", "C++", "Computer Vision"],
    summary:
      "Built a gesture-controlled smart car with real-time object detection for automation and collision avoidance.",
  },
  {
    title: "Virtual Resto",
    timeline: "Apr 2023 – Jul 2023",
    stack: ["MERN", "Dashboards", "Reporting"],
    summary:
      "Online restaurant platform with order tracking, automated sales reporting, and monthly performance insights.",
  },
  {
    title: "Automated Web Scraper & Data Exporter",
    timeline: "Apr 2024",
    stack: ["Python", "BeautifulSoup", "Pandas", "FPDF"],
    summary:
      "Scrape, clean, and export website data into CSV/PDF for quick analysis and reporting.",
  },
];

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Selected work demonstrating data, automation, and full‑stack skills.">
      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <div key={i} className="rounded-xl border border-gray-200 p-5 bg-white shadow-sm flex flex-col">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-gray-900">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.timeline}</p>
              </div>
              <a className="text-gray-400 hover:text-gray-700" aria-label="Project Link">
                <ExternalLink size={18} />
              </a>
            </div>
            <p className="mt-3 text-gray-700">{p.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-700 border border-gray-200">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
