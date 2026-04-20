import { motion } from 'motion/react';
import { FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeContext } from '../App';

function ProjectCard({ title, description, tags, link, github, image, problemStatement, role, keyFeatures }) {
    const { theme } = useContext(ThemeContext);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="group relative h-full flex"
        >
            <div className={`flex flex-col h-full w-full p-6 md:p-8 rounded-3xl backdrop-blur-sm border-2 transition-all duration-500 relative overflow-hidden ${
                theme === "dark"
                    ? "bg-[#5e6472]/30 border-[#b8f2e6]/20 hover:border-[#b8f2e6]/50 hover:bg-[#5e6472]/50"
                    : "bg-white/80 border-[#aed9e0]/30 hover:border-[#aed9e0]/60 hover:bg-white"
            }`}>
                {/* Animated gradient overlay */}
                <motion.div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                        theme === "dark"
                            ? "bg-gradient-to-br from-[#b8f2e6]/10 via-transparent to-[#aed9e0]/10"
                            : "bg-gradient-to-br from-[#aed9e0]/20 via-transparent to-[#b8f2e6]/20"
                    }`}
                />

                <div className="relative z-10 flex flex-col h-full">
                    <motion.h3
                        className={`text-2xl md:text-3xl font-bold mb-3 ${
                            theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"
                        }`}
                    >
                        {title}
                    </motion.h3>

                    {role && (
                        <p className={`text-sm font-bold uppercase tracking-wider mb-4 px-3 py-1 rounded-lg inline-block w-fit ${
                            theme === "dark" ? "bg-[#b8f2e6]/10 text-[#b8f2e6]" : "bg-[#aed9e0]/30 text-[#5e6472]"
                        }`}>
                            Role: {role}
                        </p>
                    )}

                    <p className={`mb-6 text-base leading-relaxed ${
                        theme === "dark" ? "text-[#aed9e0]" : "text-[#5e6472]"
                    } opacity-90`}>
                        {description}
                    </p>

                    {problemStatement && (
                        <div className={`mb-6 p-4 rounded-2xl border-l-4 ${
                            theme === "dark" 
                                ? "bg-[#1c1c1c]/40 border-[#b8f2e6]/50 text-[#aed9e0]" 
                                : "bg-gray-50 border-[#aed9e0] text-[#5e6472]"
                        }`}>
                            <p className="text-xs font-bold uppercase mb-2 opacity-60">Problem Statement</p>
                            <p className="text-sm italic leading-relaxed">"{problemStatement}"</p>
                        </div>
                    )}

                    {keyFeatures && (
                        <div className="mb-6">
                            <p className={`text-sm font-bold mb-3 uppercase tracking-widest ${
                                theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"
                            }`}>Key Features</p>
                            <ul className="space-y-2">
                                {keyFeatures.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm opacity-90">
                                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                                            theme === "dark" ? "bg-[#b8f2e6]" : "bg-[#aed9e0]"
                                        }`} />
                                        <span className={theme === "dark" ? "text-[#aed9e0]" : "text-[#5e6472]"}>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                        {tags.map((tag, i) => (
                            <span
                                key={i}
                                className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                                    theme === "dark"
                                        ? "bg-[#b8f2e6]/5 text-[#b8f2e6] border border-[#b8f2e6]/20"
                                        : "bg-[#aed9e0]/10 text-[#5e6472] border border-[#aed9e0]/30"
                                }`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4 items-center pt-4 border-t-2 border-opacity-10 border-current">
                        {github && (
                            <motion.a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className={`flex items-center gap-2 font-bold transition-colors group/link ${
                                    theme === "dark"
                                        ? "text-[#b8f2e6] hover:text-[#aed9e0]"
                                        : "text-[#5e6472] hover:text-[#aed9e0]"
                                }`}
                            >
                                <FaGithub size={20} />
                                <span>Codebase</span>
                                <svg
                                    className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </motion.a>
                        )}
                    </div>
                </div>

                {/* Hover shine */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                        background: theme === "dark"
                            ? "linear-gradient(135deg, transparent 0%, rgba(184, 242, 230, 0.1) 50%, transparent 100%)"
                            : "linear-gradient(135deg, transparent 0%, rgba(174, 217, 224, 0.15) 50%, transparent 100%)"
                    }}
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
                />
            </div>
        </motion.div>
    );
}

export default ProjectCard;