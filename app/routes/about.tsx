// app/routes/about/about.tsx

import type { Route } from "./+types/about";
import Navbar from "../../components/Navbar";
import {
    ArrowRight,
    Code2,
    Database,
    Server,
    TestTube,
    Cloud,
    GraduationCap,
    User,
    Sparkles,
    Target,
    Briefcase,
} from "lucide-react";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "About | Sumeth Vindunu" },
        {
            name: "description",
            content: "Learn more about Sumeth Vindunu - Full Stack Developer, QA Engineer, and IT Undergraduate.",
        },
    ];
}

export default function About() {
    return (
        <div className="min-h-screen text-gray-900">
            <Navbar />

            {/* Hero Section */}
            <section className="relative overflow-hidden pt-32 pb-20 px-6">
                <div className="absolute inset-0" />

                <div className="relative max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-sm text-gray-600 mb-8">
                        <Sparkles size={14} className="text-blue-500" />
                        <span>About Me</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                            Sumeth Vindunu
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        An Information Technology undergraduate passionate about
                        Full-Stack Development, Quality Assurance, DevOps, and Cloud
                        Technologies. I enjoy building scalable applications and solving
                        real-world problems through technology.
                    </p>
                </div>
            </section>

            {/* Journey Section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-sm text-blue-600 mb-6">
                            <Target size={14} />
                            My Journey
                        </div>

                        <h2 className="text-4xl font-bold mb-6">
                            Building software with quality and innovation
                        </h2>

                        <p className="text-gray-600 leading-relaxed mb-4">
                            I'm currently pursuing a Bachelor’s degree in Information
                            Technology at SLIIT while continuously improving my skills in
                            software engineering, testing, and cloud computing.
                        </p>

                        <p className="text-gray-600 leading-relaxed mb-8">
                            My experience spans Full-Stack Development, QA Automation,
                            Selenium Testing, REST APIs, Spring Boot, React, .NET, and DevOps
                            practices. I enjoy learning modern technologies and turning ideas
                            into impactful solutions.
                        </p>


                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { number: "5+", label: "Projects Built" },
                                { number: "3+", label: "Tech Domains" },
                                { number: "2+", label: "Internship Experiences" },
                                { number: "100%", label: "Continuous Learning" },
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-gray-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-20 px-6 border-t border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Technologies and tools I use to build, test, and deploy modern
                            software solutions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Code2 size={24} />,
                                title: "Frontend Development",
                                description:
                                    "React.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS.",
                            },
                            {
                                icon: <Server size={24} />,
                                title: "Backend Development",
                                description:
                                    "Spring Boot, Node.js, .NET, REST APIs, Authentication Systems.",
                            },
                            {
                                icon: <Database size={24} />,
                                title: "Database Management",
                                description:
                                    "MySQL, MongoDB, Entity Framework, Database Design.",
                            },
                            {
                                icon: <TestTube size={24} />,
                                title: "Quality Assurance",
                                description:
                                    "Manual Testing, Selenium, Postman, API Testing, SDLC.",
                            },
                            {
                                icon: <Cloud size={24} />,
                                title: "DevOps & Cloud",
                                description:
                                    "Git, CI/CD Concepts, Docker, Cloud Fundamentals.",
                            },
                            {
                                icon: <GraduationCap size={24} />,
                                title: "Continuous Learning",
                                description:
                                    "Always exploring new technologies and industry best practices.",
                            },
                        ].map((skill, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                                    {skill.icon}
                                </div>

                                <h3 className="text-lg font-semibold mb-2">
                                    {skill.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {skill.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-20 px-6 border-t border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-sm text-blue-600 mb-6">
                            <Briefcase size={14} />
                            Projects & Internship
                        </div>

                        <h2 className="text-4xl font-bold mb-4">
                            Practical Experience & Work
                        </h2>

                        <p className="text-gray-600 max-w-2xl mx-auto">
                            A combination of real-world internship experience and personal
                            development projects that shaped my skills in full-stack development,
                            QA, and software engineering.
                        </p>
                    </div>

                    <div className="space-y-6">

                        {/* Internship */}
                        <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
                            <h3 className="text-xl font-semibold">
                                Internship – Sarasa Soft Solutions
                            </h3>

                            <p className="text-gray-500 mt-1">
                                Software Engineering Intern
                            </p>

                            <p className="text-gray-600 mt-3 leading-relaxed">
                                Worked as a full-stack development intern where I contributed to
                                real-world software solutions. Gained hands-on experience in
                                React, Spring Boot, API development, debugging, and QA testing
                                practices in an Agile environment.
                            </p>
                        </div>

                        {/* Project 1 */}
                        <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
                            <h3 className="text-xl font-semibold">
                                Food Ordering System
                            </h3>

                            <p className="text-gray-600 mt-3 leading-relaxed">
                                Built a full-stack food ordering platform using React, Node.js,
                                and MongoDB with features like authentication, cart system, and
                                order management.
                            </p>
                        </div>

                        {/* Project 2 */}
                        <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
                            <h3 className="text-xl font-semibold">
                                Vehicle Service Management System
                            </h3>

                            <p className="text-gray-600 mt-3 leading-relaxed">
                                Developed a service management system using React and Spring Boot
                                to manage vehicle services, customers, and appointments efficiently.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 border-t border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-12">
                        <User size={50} className="mx-auto mb-6 text-blue-600" />

                        <h2 className="text-4xl font-bold mb-4">
                            Let's Build Something Amazing
                        </h2>

                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            I'm always interested in new opportunities, collaborations,
                            and innovative projects. Let's connect and create something
                            impactful together.
                        </p>


                    </div>
                </div>
            </section>
        </div>
    );
}