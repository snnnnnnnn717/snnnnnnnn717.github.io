export default function SukainaPortfolio() {
  const projects = [
    {
      title: "SafeSwitch",
      description:
        "A modern business-focused project centered around smart problem solving, usability, and innovation with a clean professional approach.",
      category: "Business Innovation",
    },
    {
      title: "Zvyelle",
      description:
        "A creative and strategic project demonstrating branding, presentation, and entrepreneurial thinking with a polished business perspective.",
      category: "Brand & Strategy",
    },
  ];

  const skills = [
    "Business Strategy",
    "Marketing",
    "Communication",
    "Leadership",
    "Presentation Skills",
    "Management",
    "Creative Thinking",
    "Problem Solving",
    "Teamwork",
    "Branding",
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden font-sans">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-emerald-950" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-700/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-3xl rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="w-full border-b border-white/10 backdrop-blur-md sticky top-0 z-50 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-semibold tracking-wide">
            Sukaina Naqvi
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-zinc-300">
            <a href="#about" className="hover:text-emerald-400 transition">
              About
            </a>
            <a href="#skills" className="hover:text-emerald-400 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-emerald-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-emerald-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 rounded-full text-sm text-emerald-300 mb-6">
              Aspiring Business Professional
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Building Modern
              <span className="block text-emerald-400">
                Business Solutions
              </span>
            </h1>

            <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-2xl">
              I’m Sukaina Batool Naqvi — an aspiring business professional
              passionate about strategy, branding, leadership, and innovative
              problem-solving. I combine creativity with professionalism to
              create impactful business ideas and modern solutions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-7 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 transition text-black font-semibold shadow-2xl shadow-emerald-500/20"
              >
                View Projects
              </a>

              <a
                href="mailto:nsukaina4@outlook.com"
                className="px-7 py-4 rounded-2xl border border-white/15 hover:border-emerald-500/40 hover:bg-white/5 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Decorative Card */}
          <div className="relative">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2rem] p-10 shadow-2xl shadow-emerald-900/20">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <p className="text-zinc-500 text-sm">Professional Focus</p>
                  <h3 className="text-2xl font-semibold mt-2">
                    Business & Corporate
                  </h3>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-xl">
                  ✦
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-black/40 border border-white/5">
                  <p className="text-zinc-500 text-sm">Core Strength</p>
                  <h4 className="mt-2 text-xl font-medium">
                    Strategic Thinking
                  </h4>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/5">
                  <p className="text-zinc-500 text-sm">Approach</p>
                  <h4 className="mt-2 text-xl font-medium">
                    Creative + Professional
                  </h4>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/5">
                  <p className="text-zinc-500 text-sm">Goal</p>
                  <h4 className="mt-2 text-xl font-medium">
                    Building Impactful Business Ideas
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-emerald-400 uppercase tracking-[0.3em] text-sm mb-4">
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              A Modern Business Mindset
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10">
              <p className="text-zinc-400 leading-relaxed text-lg">
                I am passionate about business strategy, branding, communication,
                and leadership. My interests lie in combining creativity with
                corporate professionalism to develop ideas that are modern,
                impactful, and solution-driven.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10">
              <p className="text-zinc-400 leading-relaxed text-lg">
                Through projects, presentations, and academic experiences, I
                continuously work on improving my business knowledge,
                professional communication, strategic thinking, and management
                skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-emerald-400 uppercase tracking-[0.3em] text-sm mb-4">
              Expertise
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Skills & Strengths
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                <p className="text-zinc-200 font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-emerald-400 uppercase tracking-[0.3em] text-sm mb-4">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:border-emerald-500/40 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <p className="text-emerald-400 text-sm uppercase tracking-widest">
                      {project.category}
                    </p>
                    <h3 className="text-3xl font-semibold mt-3">
                      {project.title}
                    </h3>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:rotate-12 transition">
                    ↗
                  </div>
                </div>

                <p className="text-zinc-400 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center bg-white/5 border border-white/10 rounded-[2.5rem] p-12 md:p-20 backdrop-blur-xl">
          <p className="text-emerald-400 uppercase tracking-[0.3em] text-sm mb-5">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Let’s Build Something
            <span className="block text-emerald-400">Meaningful Together</span>
          </h2>

          <p className="mt-8 text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Open to opportunities, collaborations, networking, and professional
            connections in business, branding, strategy, and creative projects.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <a
              href="mailto:nsukaina4@outlook.com"
              className="px-8 py-4 rounded-2xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/sukaina-b-naqvi-5953aa3b6"
              target="_blank"
              className="px-8 py-4 rounded-2xl border border-white/15 hover:border-emerald-500/40 hover:bg-white/5 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/sukaina________n"
              target="_blank"
              className="px-8 py-4 rounded-2xl border border-white/15 hover:border-emerald-500/40 hover:bg-white/5 transition"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
          <p>© 2026 Sukaina Batool Naqvi. All rights reserved.</p>
          <p>Designed with a luxury corporate aesthetic.</p>
        </div>
      </footer>
    </div>
  );
}
