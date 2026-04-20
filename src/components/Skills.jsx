import { motion } from 'motion/react';
import { useContext } from 'react';
import { ThemeContext } from '../App';

function Skills() {
    const { theme } = useContext(ThemeContext);
    const skillsCategories = [
        { title: 'Languages', items: ['C++', 'Python', 'JavaScript (ES6+)', 'SQL', 'Bash'] },
        { title: 'Backend', items: ['Node.js', 'Express', 'Flask', 'FastAPI', 'REST APIs', 'JWT/Auth', 'Microservices'] },
        { title: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Redux'] },
        { title: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'] },
        { title: 'DevOps & Cloud', items: ['Docker', 'Kubernetes', 'AWS (EC2, S3)', 'CI/CD', 'Nginx'] },
        { title: 'Tools & Systems', items: ['Git/GitHub', 'Postman', 'Linux', 'System Design', 'Unit Testing'] }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1, y: 0,
            transition: { type: "spring", stiffness: 100, damping: 12 }
        }
    };

    return (
        <section
            id="skills"
            className={`py-24 px-6 relative overflow-hidden bg-transparent`}
        >
            {/* Background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${
                        theme === "dark" ? "bg-[#b8f2e6]" : "bg-[#aed9e0]"
                    }`}
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], x: [0, -30, 0], y: [0, 50, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${
                        theme === "dark" ? "bg-[#b8f2e6]" : "bg-[#aed9e0]"
                    }`}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className={`text-5xl md:text-6xl font-bold mb-4 ${
                            theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"
                        }`}
                    >
                        Skills
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "6rem" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className={`h-1 mx-auto rounded-full ${
                            theme === "dark" ? "bg-[#b8f2e6]" : "bg-[#aed9e0]"
                        }`}
                    />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {skillsCategories.map((category, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className={`p-8 rounded-3xl backdrop-blur-sm border-2 transition-all duration-300 ${
                                theme === "dark"
                                    ? "bg-[#5e6472]/30 border-[#b8f2e6]/20 hover:border-[#b8f2e6]/50"
                                    : "bg-white/80 border-[#aed9e0]/30 hover:border-[#aed9e0]/60"
                            }`}
                        >
                            <h3 className={`text-2xl font-bold mb-6 ${
                                theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"
                            }`}>
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                                            theme === "dark"
                                                ? "bg-[#b8f2e6]/10 text-[#b8f2e6] hover:bg-[#b8f2e6]/20"
                                                : "bg-[#aed9e0]/20 text-[#5e6472] hover:bg-[#aed9e0]/40"
                                        }`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Skills;