import {
    Mail, Briefcase,
    BookOpen,
    Terminal,
    GraduationCap,
    LibraryBig
} from "lucide-react";

export default function Portfolio() {
    const data = {
        name: "Karthick C",
        role: "Software Developer",
        status: "B.E. CSE '27",
        location: "Tamil Nadu, India",
        about: "Final year student aspiring to become a Software Developer with a focus on Computer Vision and Innovative solution development.",
        email: "karthikcts17@gmail.com",
        github: "https://github.com/Karthick17-C",
        leetcode: "https://leetcode.com/u/Karthick_C_",
        education: {
            college: "Nandha Engineering College",
            degree: "Bachelor's degree in Computer Science and Engineering",
            cgpa: "8.8 CGPA",
            year: "2023 - 2027",
        },
        skills: {
            "Languages": ["Java (DSA)", "Python", "JavaScript"],
            "Technologies & Frameworks": ["HTML", "CSS", "React.js", "Node.js", "Express.js"],
            "Database": ["MySQL", "MongoDB"],
            "Gen AI": ["RAG", "AI Agents"]
        },
        experience: {
            role: "AI Intern",
            company: "ShellKode",
            date: "(Dec 2025 - Jan 2026)",
            description:
                "Worked as a Gen AI Intern at ShellKode and provided GenAI driven solutions with hands-on practice in RAG and AI Agents and gained a practical exposure to real-world problem solving.",
            tech: ["Gen AI", "RAG", "AI Agents"],
        },
        projects: [
            {
                title: "E-Commerce GUI",
                description: [
                    "Built a Java desktop application using JDBC, creating a user-friendly interface that connects to a database and handles real-time interactions.",
                    "Gained hands-on experience in both UI design and backend integration.",
                ],
                tech: ["Java", "JDBC"],
                theme: "group-hover:bg-emerald-50/60 group-hover:border-emerald-200 group-hover:shadow-sm",
                badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
            },
            {
                title: "OCR Website",
                description: [
                    "Built a web-based Optical Character Recognition (OCR) application that extracts text from images using an AI API and stores the results in a database for easy access.",
                    "Used prompt-based integration to process images automatically, making it simple to retrieve and work with the extracted text later.",
                ],
                tech: ["Python","API", "React.js"],
                theme: "group-hover:bg-orange-50/60 group-hover:border-orange-200 group-hover:shadow-sm",
                badge: "bg-orange-50 text-orange-700 border-orange-100",
            },
            {
                title: "Suggestion Box",
                description: [
                    "Developed a digital suggestion platform designed to collect, categorize, and organize feedback seamlessly.",
                    "Implemented structured database storage to securely log user entries for efficient retrieval and administrative review.",
                ],
                tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
                theme: "group-hover:bg-blue-50/60 group-hover:border-blue-200 group-hover:shadow-sm",
                badge: "bg-blue-50 text-blue-700 border-blue-100",
            },
        ],
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center p-4 md:p-8 relative selection:bg-indigo-100 selection:text-indigo-900"
            style={{ fontFamily: "'Inter', sans-serif" }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/70 via-white to-orange-50/40 -z-10" />

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 my-8">
                {/* 1. Header & About */}
                <section className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(6,81,237,0.05)] flex flex-col justify-between">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
                            {data.name}
                        </h1>
                        <h2 className="mt-3 text-2xl font-medium text-indigo-500">
                            {data.role}
                        </h2>
                        <p className="mt-8 text-slate-600 leading-relaxed text-base md:text-lg max-w-2xl">
                            {data.about}
                        </p>
                    </div>

                    <div className="mt-10 flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600">
                        {/* Links Container */}
                        <div className="flex gap-3">
                            <a
                                href={`mailto:${data.email}`}
                                className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all"
                            >
                                <Mail size={18} className="text-blue-500" />{" "}
                                Email
                            </a>
                            <a
                                href={data.github}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300 transition-all"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                >
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                                GitHub
                            </a>
                            <a
                                href={data.leetcode}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl hover:bg-orange-50 hover:text-orange-700 hover:border-orange-200 transition-all"
                            >
                                <img className="size-7.5 rounded-lg" src="./src/assets/leetcode.png" alt="LeetCode" />
                                LeetCode
                            </a>
                        </div>
                    </div>
                </section>

                {/* 2. Experience */}
                <section className="lg:col-span-1 bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(6,81,237,0.05)] flex flex-col">
                    <div className="flex items-center gap-2.5 mb-8">
                        <Briefcase size={22} className="text-emerald-500" />
                        <h3 className="font-bold text-lg text-slate-900">
                            Experience
                        </h3>
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

                {/* 3. Projects (Spans 2 columns) */}
                <section className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(6,81,237,0.05)] flex flex-col h-fit">
                    <div className="flex items-center gap-2.5 mb-8">
                        <Terminal size={22} className="text-blue-500" />
                        <h3 className="font-bold text-lg text-slate-900">
                            Projects
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                        {data.projects.map((project, index) => (
                            <div
                                key={index}
                                className={`group flex flex-col p-6 bg-white border border-slate-100 rounded-2xl transition-all duration-300 ${project.theme}`}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                                        {project.title}
                                    </h4>
                                </div>

                                <ul className="text-sm text-slate-600 leading-relaxed mb-5 list-disc list-outside mt-3.5 ml-4 space-y-3">
                                    {project.description.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mt-6">
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

                {/* 4. Right Stack: Skills & Education (Spans 1 column) */}
                <div className="lg:col-span-1 flex flex-col gap-6 md:gap-8">
                    {/* Education Card */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(6,81,237,0.05)] flex-1">
                        <div className="flex items-center gap-2.5 mb-8">
                            <LibraryBig size={22} className="text-amber-500" />
                            <h3 className="font-bold text-lg text-slate-900">
                                Education
                            </h3>
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
                                    <GraduationCap size={16} />{" "}
                                    {data.education.year}
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* Technical Skills Card */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(6,81,237,0.05)] flex-1">
                        <div className="flex items-center gap-2.5 mb-6">
                            <BookOpen size={22} className="text-purple-500" />
                            <h3 className="font-bold text-lg text-slate-900">
                                Skills
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {Object.entries(data.skills).map(
                                ([category, items]) => (
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
                                ),
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}