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
} from "lucide-react";

export default function Portfolio() {
  const data = {
    name: "Karthick C",
    role: "Software Engineer",
    status: "B.E. CSE '27",
    location: "Erode, Tamil Nadu, India",
    about:
      "Software Engineer with a strong foundation in computer science fundamentals, including Operating Systems, Computer Networks and Software Architecture, complemented by solid skills in Data Structures and Algorithms and hands-on exposure to Artificial Intelligence technologies such as Generative AI, RAG, and Agentic AI. Eager to apply this knowledge to build optimized, scalable solutions and to contribute to real-world projects.",
    email: "karthikcts17@gmail.com",
    linkedin: "https://www.linkedin.com/in/karthik-c-17profile/",
    github: "https://github.com/Karthick17-C",
    leetcode: "https://leetcode.com/u/Karthick_C_/",
    education: {
      college: "Nandha Engineering College",
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      cgpa: "8.75 CGPA",
      year: "2023 - 2027",
      location: "Erode, Tamil Nadu",
    },
    skills: {
      "Programming Languages": ["Java", "Python", "JavaScript"],
      "Frameworks & Libraries": ["React.js", "Express.js"],
      "Artificial Intelligence": [
        "Generative AI",
        "RAG",
        "Agentic AI",
        "MCP",
        "LangChain",
        "Vector Databases",
        "Fine-tuning",
      ],
      Databases: ["MySQL", "MongoDB"],
      "Tools & Technologies": ["Git", "GitHub", "Docker", "Node.js"],
    },
    experience: {
      role: "Gen AI Intern",
      company: "ShellKode",
      date: "Dec 2025 – Jan 2026",
      description:
        "Completed a Gen AI internship at ShellKode, where I developed AI-driven solutions and gained hands-on experience with Retrieval-Augmented Generation (RAG), combining large language models with custom data to produce accurate, context-aware responses. The internship strengthened my skills in Generative AI applications.",
      tech: ["Generative AI", "RAG", "AI Agents"],
    },
    projects: [
      {
        title: "Resolve AI",
        role: "AI Engineer",
        github: "https://github.com/Karthick17-C/Resolve-AI",
        description: [
          "Built a secure, self-hosted AI assistant using LangChain, Qdrant Vector DB, and an open-source LLM fine-tuned with LoRA.",
          "Enabled automated document search (RAG) and automated customer call scheduling via MCP tools, deployed on vLLM for fast, private local inference.",
        ],
        tech: ["LangChain", "MCP", "Vector Database", "Fine-tuning"],
        theme:
          "group-hover:bg-violet-50/60 group-hover:border-violet-200 group-hover:shadow-sm",
        badge: "bg-violet-50 text-violet-700 border-violet-100",
      },
      {
        title: "Suggestion Box",
        role: "Full Stack Developer",
        github: "https://github.com/Karthick17-C/Suggestion-Box",
        description: [
          "Developed a MERN stack–based suggestion platform that lets users create public or private suggestion boxes to collect feedback.",
          "The platform supports anonymous submissions, reactions, and threaded replies, enabling efficient feedback management and open communication.",
        ],
        tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
        theme:
          "group-hover:bg-blue-50/60 group-hover:border-blue-200 group-hover:shadow-sm",
        badge: "bg-blue-50 text-blue-700 border-blue-100",
      },
      {
        title: "Text Extractor",
        role: "Frontend Developer",
        github: "https://github.com/Karthick17-C/Text-Extractor",
        description: [
          "Developed a web-based OCR application that extracts text from uploaded images using an AI-powered OCR API.",
          "The extracted content is stored in a database for efficient retrieval and management, making it easy to search, review, and reuse the text later.",
        ],
        tech: ["React.js", "Django", "SQLite"],
        theme:
          "group-hover:bg-orange-50/60 group-hover:border-orange-200 group-hover:shadow-sm",
        badge: "bg-orange-50 text-orange-700 border-orange-100",
      },
    ],
    achievements: [
      "Completed NPTEL certifications in Cloud Computing, Cyber Security and Privacy, and Forests and their Managements.",
      "Solved 700+ problems on LeetCode and achieved 1700+ contest ratings.",
      "Member of the college Photography Club, participated in various live photography events.",
    ],
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center p-4 md:p-8 relative selection:bg-indigo-100 selection:text-indigo-900"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/70 via-white to-orange-50/40 -z-10" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 my-8">
        <section className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(6,81,237,0.05)] flex flex-col justify-between order-1">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              {data.name}
            </h1>
            <h2 className="mt-3 text-2xl font-medium text-indigo-500">
              {data.role}
            </h2>
            <div className="flex items-center gap-2 mt-3 text-sm text-slate-500">
              <MapPin size={14} />
              <span>{data.location}</span>
            </div>
            <p className="mt-8 text-slate-600 leading-relaxed text-base md:text-lg max-w-2xl">
              {data.about}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm font-medium text-slate-600">
            <a
              href={data.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all"
            >
              <img
                src="/linkedin.svg"
                alt="LinkedIn"
                className="w-5 h-5"
              />
              LinkedIn
            </a>
            <a
              href={data.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300 transition-all"
            >
              <img
                src="/github.svg"
                alt="GitHub"
                className="w-5 h-5"
              />
              GitHub
            </a>
            <a
              href={data.leetcode}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl hover:bg-orange-50 hover:text-orange-700 hover:border-orange-200 transition-all"
            >
              <img
                src="/leetcode.svg"
                alt="LeetCode"
                className="w-5 h-5"
              />
              LeetCode
            </a>
          </div>
        </section>

        <section className="lg:col-span-1 bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(6,81,237,0.05)] flex flex-col order-2">
          <div className="flex items-center gap-2.5 mb-8">
            <Briefcase size={22} className="text-emerald-500" />
            <h3 className="font-bold text-lg text-slate-900">Experience</h3>
          </div>
          <div className="flex flex-col h-full">
            <h4 className="font-bold text-lg text-slate-900">
              {data.experience.role}
            </h4>
            <div className="flex items-center justify-between mt-2 mb-6">
              <span className="text-base font-medium text-slate-600">
                {data.experience.company}
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 bg-slate-50 text-slate-500 rounded-md border border-slate-100">
                {data.experience.date}
              </span>
            </div>
            <p className="text-base text-slate-600 leading-relaxed mb-8 flex-grow">
              {data.experience.description}
            </p>
            <div className="flex flex-wrap gap-2.5 mt-auto">
              {data.experience.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg border text-emerald-700 bg-emerald-50 border-emerald-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(6,81,237,0.05)] flex flex-col order-3">
          <div className="flex items-center gap-2.5 mb-8">
            <Terminal size={22} className="text-blue-500" />
            <h3 className="font-bold text-lg text-slate-900">Projects</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className={`group flex flex-col p-6 bg-white border border-slate-100 rounded-2xl transition-all duration-300 ${project.theme}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-slate-900 text-base">
                    {project.title}
                  </h4>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-slate-700 transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <div className="mb-3">
                  <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100">
                    Role: {project.role}
                  </span>
                </div>

                <ul className="text-sm text-slate-600 leading-relaxed mb-5 list-disc list-outside ml-4 space-y-2.5">
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-lg border ${project.badge}`}
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
          <section className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(6,81,237,0.05)]">
            <div className="flex items-center gap-2.5 mb-8">
              <LibraryBig size={22} className="text-amber-500" />
              <h3 className="font-bold text-lg text-slate-900">Education</h3>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 leading-snug">
                {data.education.degree}
              </h4>
              <p className="text-slate-600 mt-2 font-medium">
                {data.education.college}
              </p>
              <p className="text-sm text-slate-500 mt-1">
                {data.education.location}
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

          <section className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(6,81,237,0.05)] flex-1">
            <div className="flex items-center gap-2.5 mb-6">
              <BookOpen size={22} className="text-purple-500" />
              <h3 className="font-bold text-lg text-slate-900">Skills</h3>
            </div>
            <div className="space-y-4">
              {Object.entries(data.skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-100 rounded-lg"
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

        <section className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(6,81,237,0.05)] flex flex-col justify-between order-6 lg:order-5">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Mail size={22} className="text-indigo-500" />
              <h3 className="font-bold text-lg text-slate-900">Get In Touch</h3>
            </div>
            <p className="text-slate-600 leading-relaxed max-w-2xl text-base">
              I am always open to discussing new opportunities, engineering challenges, or innovative AI collaborations. Feel free to connect via email or LinkedIn.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href={`mailto:${data.email}`}
              className="flex items-center gap-2.5 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
            >
              <Mail size={18} />
              E-mail
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 px-5 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all"
            >
              <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </section>

        <section className="lg:col-span-1 bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(6,81,237,0.05)] flex flex-col justify-between order-5 lg:order-6">
          <div className="flex items-center gap-2.5 mb-6">
            <Trophy size={22} className="text-yellow-500" />
            <h3 className="font-bold text-lg text-slate-900">Achievements</h3>
          </div>
          <ul className="space-y-4 text-sm text-slate-600 leading-relaxed flex-1">
            {data.achievements.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
