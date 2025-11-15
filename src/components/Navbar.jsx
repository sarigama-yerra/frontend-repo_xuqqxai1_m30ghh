import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-gray-900 text-lg">
          Sandesh Devaiah PP
        </a>
        <nav className="flex items-center gap-3">
          <a href="tel:+919008027802" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm">
            <Phone size={18} /> 9008027802
          </a>
          <a href="mailto:sandeshdevaiahpp01@gmail.com" className="p-2 rounded-md hover:bg-gray-100 text-gray-700" aria-label="Email">
            <Mail size={18} />
          </a>
          <a href="https://www.linkedin.com/in/sandesh-devaiah" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100 text-gray-700" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/sandesh2428sp" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100 text-gray-700" aria-label="GitHub">
            <Github size={18} />
          </a>
        </nav>
      </div>
    </header>
  );
}
