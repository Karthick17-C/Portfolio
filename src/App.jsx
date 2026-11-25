import {
  Briefcase,
  BookOpen,
  Terminal,
  GraduationCap,
  LibraryBig,
  Trophy,
  Mail,
  MapPin,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function Portfolio() {
  const data = {
    name: "Karthick C",
    role: "Software Engineer",
    status: "B.E. CSE '27",
    location: "Erode, Tamil Nadu, India",
    about:
      "Software Engineer with a strong foundation in Data Structures & Algorithms, Operating Systems, Computer Networks, DBMS, and Software Architecture. Experienced in building web applications, Generative and Agentic AI solutions for real world problems. Seeking a Software Engineer role to design and deliver scalable, optimized, production-ready software.",
    email: "karthikcts17@gmail.com",
    linkedin: "https://www.linkedin.com/in/karthik-c-17profile/",
    github: "https://github.com/Karthick17-C",
    leetcode: "https://leetcode.com/u/Karthick_C_/",
    education: {
      college: "Nandha Engineering College, Erode, Tamil Nadu",
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      cgpa: "8.75 CGPA",
      year: "2023 – 2027",
      location: "Erode, Tamil Nadu",
    },
    skills: {
      "Programming Languages": ["Java", "Python", "JavaScript"],
      "Web & Backend": ["React.js", "Node.js", "Express.js", "HTML", "CSS"],
      "Artificial Intelligence": [
        "Generative AI",
        "Retrieval-Augmented Generation (RAG)",
        "Agentic AI",
        "Model Context Protocol (MCP)",
        "LangChain",
        "Vector Databases",
        "Fine-tuning",
      ],
      Databases: ["MySQL", "SQLite", "MongoDB"],
      "Tools & DevOps": ["Git", "GitHub", "Docker", "Linux"],
    },
    experience: {
      role: "Gen AI Intern",
      company: "ShellKode",
      date: "Dec 2025 – Jan 2026",
      points: [
        "Developed Generative AI solutions using Retrieval-Augmented Generation that combine large language models with custom data to produce accurate, context-aware responses.",
        "Gained hands-on experience building and testing AI-driven applications, strengthening skills in LLM, prompt design, and vector-based retrieval.",
      ],
      tech: ["Generative AI", "RAG", "LLMs", "Prompt Design", "Vector Retrieval"],
    },
    projects: [
      {
        title: "Resolve AI",
        github: "https://github.com/Karthick17-C/Resolve-AI",
        description: [
          "Built a self-hosted AI assistant using LangChain, Qdrant (vector database), and an LLM fine-tuned with LoRA.",
          "Implemented automated document search (RAG) and customer call scheduling through MCP tools.",
          "Deployed the model on vLLM for fast and private local inference.",
        ],
        tech: ["LangChain", "MCP", "Vector Database", "Fine-tuning", "vLLM"],
        theme:
          "hover:bg-gradient-to-br hover:from-white hover:to-violet-50/50 hover:border-violet-200 hover:shadow-violet-100/50",
        badge: "bg-violet-50 text-violet-700 border-violet-100",
        accent: "bg-violet-500",
      },
      {
        title: "Suggestion Box",
        github: "https://github.com/Karthick17-C/Suggestion-Box",
        description: [
          "Developed a full-stack MERN application where users create public or private suggestion boxes to collect feedback.",
          "Implemented anonymous submissions and reply options for organized open communication.",
          "Helps gather customer feedback for small businesses and contributes to continuous improvements.",
        ],
        tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
        theme:
          "hover:bg-gradient-to-br hover:from-white hover:to-blue-50/50 hover:border-blue-200 hover:shadow-blue-100/50",
        badge: "bg-blue-50 text-blue-700 border-blue-100",
        accent: "bg-blue-500",
      },
      {
        title: "Text Extractor",
        github: "https://github.com/Karthick17-C/Text-Extractor",
        description: [
          "Developed a web-based OCR application that extracts text from uploaded images and PDF documents via an API key.",
          "Stored extracted content in a database for efficient search, retrieval, and reuse.",
        ],
        tech: ["React.js", "Django", "SQLite"],
        theme:
          "hover:bg-gradient-to-br hover:from-white hover:to-orange-50/50 hover:border-orange-200 hover:shadow-orange-100/50",
        badge: "bg-orange-50 text-orange-700 border-orange-100",
        accent: "bg-orange-500",
      },
      {
        title: "E-Commerce Module",
        github: "https://github.com/Karthick17-C/E-Commerce_Module",
        description: [
          "Built an interactive desktop e-commerce application using Java and JDBC for seamless product browsing and transactions.",
          "Designed a database-connected architecture to handle real-time inventory management and user order processing.",
        ],
        tech: ["Java", "JDBC", "MySQL"],
        theme:
          "hover:bg-gradient-to-br hover:from-white hover:to-emerald-50/50 hover:border-emerald-200 hover:shadow-emerald-100/50",
        badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
        accent: "bg-emerald-500",
      },
    ],
    achievements: [
      "Solved 700+ problems on LeetCode and achieved a contest rating of 1700+.",
      "NPTEL certifications: Cloud Computing, Cyber Security and Privacy, Forests and their Managements.",
      "Member of the college photography club, participated in live photography events.",
    ],
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center p-4 md:p-8 relative selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-50/70 via-white to-orange-50/40 -z-20" />
      <div className="fixed top-10 left-10 w-96 h-96 bg-indigo-200/25 rounded-full blur-3xl pointer-events-none -z-10 animate-float-slow" />
      <div className="fixed bottom-10 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none -z-10 animate-float-reverse" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 my-8">
        <section className="lg:col-span-2 bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-slate-100 shadow-[0_4px_25px_-4px_rgba(6,81,237,0.06)] hover:shadow-[0_12px_35px_-8px_rgba(79,70,229,0.12)] hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between order-1 animate-fade-in-up">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/70">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for Software Engineer Roles
              </span>
              <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                <Sparkles size={13} className="text-indigo-400" />
                {data.status}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              {data.name}
            </h1>
            <h2 className="mt-3 text-2xl font-medium text-indigo-600 flex items-center gap-2">
              {data.role}
            </h2>
            <div className="flex items-center gap-2 mt-3 text-sm text-slate-500">
              <MapPin size={14} className="text-slate-400" />
              <span>{data.location}</span>
            </div>
            <p className="mt-7 text-slate-600 leading-relaxed text-base md:text-lg max-w-2xl">
              {data.about}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm font-medium text-slate-600">
            <a
              href={data.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
            >
              <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href={data.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
            >
              <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
              GitHub
            </a>
            <a
              href={data.leetcode}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl hover:bg-orange-50 hover:text-orange-700 hover:border-orange-200 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
            >
              <img src="/leetcode.svg" alt="LeetCode" className="w-5 h-5" />
              LeetCode
            </a>
          </div>
        </section>

        <section className="lg:col-span-1 bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-slate-100 shadow-[0_4px_25px_-4px_rgba(6,81,237,0.06)] hover:shadow-[0_12px_35px_-8px_rgba(79,70,229,0.12)] hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col order-2 animate-fade-in-up delay-100">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-100">
              <Briefcase size={20} className="text-emerald-600" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">Experience</h3>
          </div>
          <div className="flex flex-col h-full">
            <h4 className="font-bold text-lg text-slate-900">
              {data.experience.role}
            </h4>
            <div className="flex items-center justify-between mt-2 mb-5">
              <span className="text-base font-medium text-slate-600">
                {data.experience.company}
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 bg-slate-50 text-slate-500 rounded-md border border-slate-100">
                {data.experience.date}
              </span>
            </div>
            <ul className="text-sm text-slate-600 leading-relaxed mb-6 space-y-2.5 list-disc list-outside ml-4 flex-grow">
              {data.experience.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-auto">
              {data.experience.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-semibold rounded-lg border text-emerald-700 bg-emerald-50 border-emerald-100 hover:scale-105 transition-transform duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="lg:col-span-2 bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-slate-100 shadow-[0_4px_25px_-4px_rgba(6,81,237,0.06)] hover:shadow-[0_12px_35px_-8px_rgba(79,70,229,0.12)] hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col order-3 animate-fade-in-up delay-200">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-blue-50 rounded-xl border border-blue-100">
                <Terminal size={20} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Projects</h3>
            </div>
            <span className="text-xs font-semibold text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg">
              4 Featured Works
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className={`group relative flex flex-col p-6 bg-white border border-slate-100 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${project.theme}`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${project.accent}`}></span>
                    <h4 className="font-bold text-slate-900 text-base group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h4>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 group-hover:text-slate-800 transition-colors p-1"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <ArrowUpRight
                      size={18}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    />
                  </a>
                </div>

                <ul className="text-sm text-slate-600 leading-relaxed mb-5 list-disc list-outside ml-4 space-y-2.5 flex-grow">
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-slate-50">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-lg border hover:scale-105 transition-transform duration-200 cursor-default ${project.badge}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="lg:col-span-1 flex flex-col gap-6 md:gap-8 order-4">
          <section className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-slate-100 shadow-[0_4px_25px_-4px_rgba(6,81,237,0.06)] hover:shadow-[0_12px_35px_-8px_rgba(79,70,229,0.12)] hover:-translate-y-1 transition-all duration-300 ease-out animate-fade-in-up delay-300">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 bg-amber-50 rounded-xl border border-amber-100">
                <LibraryBig size={20} className="text-amber-600" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Education</h3>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 leading-snug">
                {data.education.degree}
              </h4>
              <p className="text-slate-600 mt-2 font-medium">
                {data.education.college}
              </p>
              <div className="flex items-center gap-3 mt-5">
                <span className="px-3 py-1.5 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-100 rounded-lg">
                  {data.education.cgpa}
                </span>
                <span className="text-sm font-medium text-slate-500 flex items-center gap-1.5">
                  <GraduationCap size={16} /> {data.education.year}
                </span>
              </div>
            </div>
          </section>

          <section className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-slate-100 shadow-[0_4px_25px_-4px_rgba(6,81,237,0.06)] hover:shadow-[0_12px_35px_-8px_rgba(79,70,229,0.12)] hover:-translate-y-1 transition-all duration-300 ease-out flex-1 animate-fade-in-up delay-400">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 bg-purple-50 rounded-xl border border-purple-100">
                <BookOpen size={20} className="text-purple-600" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Technical Skills</h3>
            </div>
            <div className="space-y-4">
              {Object.entries(data.skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-100 rounded-lg hover:scale-105 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="lg:col-span-2 bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-slate-100 shadow-[0_4px_25px_-4px_rgba(6,81,237,0.06)] hover:shadow-[0_12px_35px_-8px_rgba(79,70,229,0.12)] hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between order-6 lg:order-5 animate-fade-in-up delay-500">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-2 bg-indigo-50 rounded-xl border border-indigo-100">
                <Mail size={20} className="text-indigo-600" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Get In Touch</h3>
            </div>
            <p className="text-slate-600 leading-relaxed max-w-2xl text-base">
              I am open to software engineering roles, Generative AI initiatives, and scalable web application projects. Feel free to connect via email or LinkedIn.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href={`mailto:${data.email}`}
              className="flex items-center gap-2.5 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl hover:-translate-y-0.5 hover:shadow-md hover:shadow-indigo-200 transition-all duration-200"
            >
              <Mail size={18} />
              E-mail
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 px-5 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
            >
              <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </section>

        <section className="lg:col-span-1 bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-slate-100 shadow-[0_4px_25px_-4px_rgba(6,81,237,0.06)] hover:shadow-[0_12px_35px_-8px_rgba(79,70,229,0.12)] hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between order-5 lg:order-6 animate-fade-in-up delay-600">
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 bg-yellow-50 rounded-xl border border-yellow-100">
                <Trophy size={20} className="text-yellow-600" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Achievements & Certifications</h3>
            </div>
            <ul className="space-y-4 text-sm text-slate-600 leading-relaxed">
              {data.achievements.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
