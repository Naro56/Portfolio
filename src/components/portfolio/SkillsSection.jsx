import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Brain,
  Layers,
  Database,
  Cloud,
  Server,
  Cpu,
  BookOpen,
} from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      skills: ["C++", "Python", "JavaScript"],
    },
    {
      title: "AI & ML",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      skills: [" NumPy", "Pandas", "OpenCV", "PyTorch", "TensorFlow ", "Computer Vision","CNNs", "Deep Learning",],
    },
    {
      title: "Frameworks",
      icon: Layers,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      skills: ["React", "Node.js", "Express", "OpenCV", "PyTorch"],
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-sky-500 to-blue-500",
      bgColor: "bg-sky-500/10",
      borderColor: "border-sky-500/20",
      skills: ["Docker", "Kubernetes", "AWS (basic)"],
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-rose-500 to-red-500",
      bgColor: "bg-rose-500/10",
      borderColor: "border-rose-500/20",
      skills: ["REST APIs", "JWT"],
    },
    {
      title: "CS Core",
      icon: Cpu,
      color: "from-indigo-500 to-violet-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
      skills: ["DSA", "OOP", "DBMS", "Operating Systems"],
    },
    {
      title: "Problem Solving",
      icon: BookOpen,
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-500/10",
      borderColor: "border-teal-500/20",
      skills: ["150+ LeetCode Problems"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            className="text-blue-400 text-sm font-medium tracking-wider uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mt-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Technologies I Work With
          </motion.h2>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className={`group relative p-6 rounded-2xl bg-slate-950/50 border ${category.borderColor} hover:border-opacity-50 backdrop-blur-sm transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              {/* Gradient glow on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <div className="relative">
                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-xl ${category.bgColor} mb-4`}
                >
                  <category.icon
                    className={`w-5 h-5 bg-gradient-to-r ${category.color} bg-clip-text`}
                    style={{
                      color: "transparent",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  />
                  <category.icon
                    className={`w-5 h-5 absolute opacity-100`}
                    style={{
                      color: category.color.includes("blue")
                        ? "#3B82F6"
                        : category.color.includes("purple")
                        ? "#A855F7"
                        : category.color.includes("green")
                        ? "#22C55E"
                        : category.color.includes("orange")
                        ? "#F97316"
                        : category.color.includes("sky")
                        ? "#0EA5E9"
                        : category.color.includes("rose")
                        ? "#F43F5E"
                        : category.color.includes("indigo")
                        ? "#6366F1"
                        : "#14B8A6",
                    }}
                  />
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold mb-3">
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs font-medium text-slate-400 bg-slate-800/50 rounded-full border border-slate-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
