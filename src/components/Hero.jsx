import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-200">
              Data & Business Analyst • Ops Enthusiast
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Turning data into clear, actionable decisions
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I’m Sandesh — a fresher with hands-on experience in workflow analysis, reporting automation, and full‑stack dev. I love simplifying processes and building data‑backed solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-black transition">
                View Projects <ArrowRight size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                Contact
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-emerald-500/10 border border-gray-200 p-6">
              <div className="grid grid-cols-2 gap-3 h-full">
                {[
                  "Python","SQL","Excel","Power BI","Pandas","BeautifulSoup","JavaScript","MERN","C++","Java"
                ].map((s) => (
                  <div key={s} className="flex items-center justify-center rounded-lg bg-white shadow-sm border border-gray-100 text-sm font-medium text-gray-700">
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
