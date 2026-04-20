import { motion } from 'motion/react';
import ProjectCard from './ProjectCard';
import { useContext } from 'react';
import { ThemeContext } from '../App';

function Projects() {
    const { theme } = useContext(ThemeContext);

    const projects = [
        {
            title: '🛒 E-commerce Microservices',
            description: 'A scalable, production-grade e-commerce platform built using a microservices architecture with independent services for Auth, Product, and Orders.',
            problemStatement: 'Monolithic e-commerce apps often struggle with scalability and independent deployment of features.',
            role: 'Backend Architect',
            keyFeatures: [
                'Independently deployable microservices using Docker',
                'Event-driven communication with message queues',
                'Centralized API Gateway for request routing',
                'JWT-based authentication and service-to-service security'
            ],
            tags: ['Node.js', 'React', 'MongoDB', 'Docker', 'Redis'],
            github: 'https://github.com/MrCarpediem/ecommerce-microservices',
            image: '/assets/project-ecommerce.png'
        },
        {
            title: '📊 Finance Dashboard',
            description: 'A real-time financial tracking platform designed with high-performance microservices to process and visualize transactional data.',
            problemStatement: 'Existing finance trackers often have high latency when processing large volumes of concurrent transactions.',
            role: 'Lead Backend Developer',
            keyFeatures: [
                'Optimized PostgreSQL queries for sub-100ms response times',
                'Real-time data visualization with Recharts',
                'RBAC (Role-Based Access Control) for data security',
                'Automated financial reporting service'
            ],
            tags: ['Flask', 'Node.js', 'PostgreSQL', 'Nginx', 'Docker'],
            github: 'https://github.com/MrCarpediem/finance-dashboard',
            image: '/assets/project-finance.png'
        },
        {
            title: '🧠 NewsSense-AI',
            description: 'An advanced NLP pipeline for real-time news classification and sentiment analysis using transformer-based models.',
            problemStatement: 'Filtering relevant information from thousands of news articles daily is a significant challenge for analysts.',
            role: 'ML Engineer',
            keyFeatures: [
                'BERT-based text classification system',
                'Real-time scraping and processing pipeline',
                'FastAPI for low-latency inference',
                'Scalable AWS deployment'
            ],
            tags: ['Python', 'NLP', 'TensorFlow', 'FastAPI', 'AWS'],
            github: 'https://github.com/MrCarpediem/NewsSense-AI',
            image: '/assets/project-ml.png'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    return (
        <section
            id="projects"
            className={`py-24 px-6 relative overflow-hidden bg-transparent`}
        >
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, 50, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl opacity-10 ${
                        theme === "dark" ? "bg-[#b8f2e6]" : "bg-[#aed9e0]"
                    }`}
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 30, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute bottom-40 left-20 w-80 h-80 rounded-full blur-3xl opacity-10 ${
                        theme === "dark" ? "bg-[#b8f2e6]" : "bg-[#aed9e0]"
                    }`}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className={`text-5xl md:text-6xl font-bold mb-4 ${
                            theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"
                        }`}
                    >
                        Projects
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "6rem" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className={`h-1 mx-auto rounded-full mb-6 ${
                            theme === "dark" ? "bg-[#b8f2e6]" : "bg-[#aed9e0]"
                        }`}
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className={`text-lg max-w-2xl mx-auto ${
                            theme === "dark" ? "text-[#aed9e0]" : "text-[#5e6472]"
                        } opacity-90`}
                    >
                        Here are some of my projects showcasing backend engineering, security, and AI/ML
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, i) => (
                        <ProjectCard key={i} {...project} />
                    ))}
                </motion.div>

                {/* View More */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <motion.a
                        href="https://github.com/MrCarpediem"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                            theme === "dark"
                                ? "bg-[#b8f2e6]/10 text-[#b8f2e6] border-2 border-[#b8f2e6]/30 hover:bg-[#b8f2e6]/20 hover:border-[#b8f2e6]/50"
                                : "bg-[#aed9e0]/20 text-[#5e6472] border-2 border-[#aed9e0]/40 hover:bg-[#aed9e0]/30 hover:border-[#aed9e0]/60"
                        }`}
                    >
                        <span>View More Projects</span>
                        <motion.svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </motion.svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}

export default Projects;