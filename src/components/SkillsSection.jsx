import { cn } from "@/lib/utils"
import { useState } from "react";

// Skills with icons and brand colors
const skills = [
    // Frontend Skills 
    { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "frontend", color: "#E34F26" },
    { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "frontend", color: "#F7DF1E" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "frontend", color: "#61DAFB" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", category: "frontend", color: "#06B6D4" },
    { name: "GSAP", icon: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg", category: "frontend", color: "#88CE02" },
    { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg", category: "frontend", color: "#8B5CF6" },

    // Backend
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "backend", color: "#339933" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: "backend", color: "#6366F1" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "backend", color: "#47A248" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "backend", color: "#4479A1" },
    { name: "Pinecone", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", category: "backend", color: "#00A67E" },
    { name: "LLM Training", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg", category: "backend", color: "#EE4C2C" },
    { name: "Generative AI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg", category: "backend", color: "#FF6F00" },

    // Tools
    { name: "Git/GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "tools", color: "#F05032" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", category: "tools", color: "#F24E1E" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", category: "tools", color: "#007ACC" },
    { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", category: "tools", color: "#00C4CC" },
    { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", category: "tools", color: "#21759B" },
    { name: "Google Analytics", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg", category: "tools", color: "#4285F4" },
    { name: "Google Console", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg", category: "tools", color: "#EA4335" },
    { name: "Google Trends", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg", category: "tools", color: "#34A853" },
];

const categories = ["all", "frontend", "backend", "tools"];

// CSS for border beam animation with staggered start
const borderBeamStyles = `
@keyframes borderBeam {
    0% {
        --angle: 0deg;
    }
    100% {
        --angle: 360deg;
    }
}

@property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
}
`;

// Animated Skill Card Component
const SkillCard = ({ skill, index }) => {
    // Calculate staggered starting angle based on index (each card starts 60 degrees behind the previous)
    const startAngle = (index * 60) % 360;

    return (
        <div
            className="group relative rounded-xl p-[2px] cursor-pointer overflow-hidden"
            style={{
                background: `conic-gradient(from calc(var(--angle, 0deg) + ${startAngle}deg), transparent 50%, ${skill.color} 75%, transparent 100%)`,
                animation: 'borderBeam 6s linear infinite',
            }}
        >
            {/* Inner card with brand color background */}
            <div
                className="relative rounded-xl p-8 h-full transition-all duration-500 ease-out group-hover:shadow-xl"
                style={{
                    background: `linear-gradient(135deg, ${skill.color}15 0%, ${skill.color}08 50%, transparent 100%), hsl(var(--card))`,
                }}
            >
                {/* Glow effect on hover */}
                <div
                    className="absolute -inset-2 rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"
                    style={{ backgroundColor: skill.color }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                    {/* Icon container with animation */}
                    <div className="relative w-16 h-16 flex items-center justify-center">
                        {/* Background circle with brand color */}
                        <div
                            className="absolute inset-0 rounded-full group-hover:scale-110 transition-all duration-500"
                            style={{
                                backgroundColor: `${skill.color}20`,
                            }}
                        />

                        {/* Icon */}
                        <img
                            src={skill.icon}
                            alt={skill.name}
                            className="relative z-10 w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
                        />
                    </div>

                    {/* Skill name */}
                    <h3
                        className="font-medium text-base text-foreground transition-colors duration-300 text-center"
                        style={{
                            '--hover-color': skill.color
                        }}
                    >
                        <span className="group-hover:text-[var(--hover-color)] transition-colors duration-300">
                            {skill.name}
                        </span>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export const SkillsSection = () => {
    const [activeCetegory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCetegory === "all" || skill.category === activeCetegory
    );

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            {/* Inject CSS for border beam animation */}
            <style>{borderBeamStyles}</style>

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My<span className="text-primary">{" "}Skills</span>
                </h2>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button
                        key={key}
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-all duration-300 capitalize font-medium",
                            activeCetegory === category
                                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                                : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Skills grid with animated cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto px-4">
                {filteredSkills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
            </div>
        </section>
    );
};