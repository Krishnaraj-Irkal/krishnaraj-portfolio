import { motion } from 'framer-motion';
import Link from "next/link";
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Dashboard",
            description: "A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and order processing features.",
            tech: ["React", "Redux", "Tailwind CSS", "Chart.js", "REST API"],
            gradient: "from-blue-600 to-indigo-700",
            color: "blue",
        },
        {
            title: "Social Media App",
            description: "Real-time social platform with live chat, post sharing, and user authentication.",
            tech: ["Next.js", "Socket.io", "MongoDB", "Tailwind CSS", "NextAuth.js"],
            gradient: "from-purple-600 to-pink-500",
            color: "purple",
        },
        {
            title: "Health & Fitness Tracker",
            description: "Health tracking app with workout/nutrition monitoring and wellness goal visualization.",
            tech: ["Vue.js", "Vuex", "Firebase", "D3.js", "PWA"],
            gradient: "from-green-500 to-teal-400",
            color: "green",
        },
        {
            title: "Learning Management System",
            description: "LMS platform with course creation, student management, and interactive materials.",
            tech: ["React", "Node.js", "Express", "MongoDB", "AWS S3"],
            gradient: "from-yellow-500 to-orange-500",
            color: 'yellow'
        },
        {
            title: "Real Estate Platform",
            description: "Modern property search platform with virtual tours and appointment scheduling.",
            tech: ["Next.js", "GraphQL", "Mapbox", "Strapi CMS", "Framer Motion"],
            gradient: "from-red-500 to-pink-600",
            color: "red",
        },
        {
            title: "Code Collaboration Tool",
            description: "Real-time code collaboration with pair programming and code review features.",
            tech: ["React", "Node.js", "WebSockets", "Monaco Editor", "Redis"],
            gradient: "from-cyan-500 to-blue-500",
            color: "blue",
        }
    ];

    return (
        <section id="projects" className="py-20 bg-neutral-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto mb-6" />
                    <p className="text-gray-300 max-w-3xl mx-auto">
                        Explore my portfolio of web projects showcasing frontend development skills, responsive design, and creative problem-solving.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-neutral-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <div className={`h-56 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <div className="flex gap-3">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            className={`bg-${project.color}-500 backdrop-blur-sm hover:bg-${project.color}/20 px-4 py-2 rounded-md text-sm font-medium text-white transition-all`}
                                        >
                                            View Demo
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            className="bg-black/30 backdrop-blur-sm hover:bg-black/40 px-4 py-2 rounded-md text-sm font-medium text-white transition-all"
                                        >
                                            Source Code
                                        </motion.button>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                    <span className={`px-3 py-1 bg-${project.color}-500/20 text-${project.color}-400 rounded-full text-xs`}>
                                        {project.tech[0]}
                                    </span>
                                </div>
                                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="px-2 py-1 bg-neutral-700/50 rounded text-xs">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link href="/projects">
                        <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-medium transition-colors">
                            View All Projects
                            <ArrowRightIcon className="h-5 w-5 ml-2" />
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;